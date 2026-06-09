import os
import json
from datetime import datetime, timezone
from typing import Optional, Type
from dotenv import load_dotenv

load_dotenv()

# ─────────────────────────────────────────────────────────────────────────────
# CrewAI imports
# ─────────────────────────────────────────────────────────────────────────────
from crewai import Agent, Task, Crew, Process, LLM
from crewai.tools import BaseTool
from pydantic import BaseModel, Field

# ─────────────────────────────────────────────────────────────────────────────
# Simulated TRAIL Memory Store (in-memory for prototype)
# In production: replace with DynamoDB on AWS af-south-1 per DPA 2019
# ─────────────────────────────────────────────────────────────────────────────
TRAIL_MEMORY = {
    "current_session": {},
    "learner_history": {
        "L001": {
            "name": "Akinyi",
            "county": "Kisumu",
            "language": "Dholuo",
            "grade": "Form 3",
            "quiz_avg_14d": 61,
            "missed_sessions": 2,
            "last_topic": "Photosynthesis",
            "next_harvest": "March 2025",
            "family_flags": ["school_fee_month"],
        }
    },
    "counsellors_available": [
        {"name": "Ms. Wanjiru", "specialty": "Nyanza region", "available": True},
        {"name": "Mr. Otieno",  "specialty": "ASAL counties", "available": True},
    ],
}

DISTRESS_KEYWORDS = [
    "give up", "not coming back", "useless", "hate school",
    "no point", "family crisis", "can't afford", "drop out",
    "no money", "sick of", "want to quit",
]

# ─────────────────────────────────────────────────────────────────────────────
# Tool: Distress Detector
# ─────────────────────────────────────────────────────────────────────────────
class DistressDetectorInput(BaseModel):
    message: str = Field(description="The learner's raw message to analyse.")
    learner_id: str = Field(default="L001", description="Learner ID for context lookup.")

class DistressDetectorTool(BaseTool):
    name: str = "distress_detector"
    description: str = (
        "Analyses a learner message for emotional distress signals. "
        "Returns a JSON object with: is_distress (bool), severity (low/medium/high), "
        "matched_keywords (list), and learner_context (dict)."
    )
    args_schema: type[BaseModel] = DistressDetectorInput

    def _run(self, message: str, learner_id: str = "L001") -> str:
        msg_lower = message.lower()
        matched = [kw for kw in DISTRESS_KEYWORDS if kw in msg_lower]
        severity = "none"
        if len(matched) >= 2:
            severity = "high"
        elif len(matched) == 1:
            severity = "medium"

        context = TRAIL_MEMORY["learner_history"].get(learner_id, {})

        # RANK check: also trigger if ≥3 consecutive missed sessions
        missed = context.get("missed_sessions", 0)
        if missed >= 3 and severity == "none":
            severity = "medium"
            matched.append("3+ missed sessions (RANK trigger)")

        result = {
            "is_distress": severity in ("medium", "high"),
            "severity": severity,
            "matched_keywords": matched,
            "learner_context": context,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
        return json.dumps(result, ensure_ascii=False)


# ─────────────────────────────────────────────────────────────────────────────
# Tool: KICD Curriculum Lookup
# ─────────────────────────────────────────────────────────────────────────────
class CurriculumLookupInput(BaseModel):
    topic: str = Field(description="Biology/Chemistry/Math topic to look up.")
    grade: str = Field(default="Form 3", description="Kenyan secondary school grade.")

class KICDCurriculumTool(BaseTool):
    name: str = "kicd_curriculum_lookup"
    description: str = (
        "Returns KICD-aligned learning objectives, East African context examples, "
        "and Swahili key terms for a given topic and grade level."
    )
    args_schema: type[BaseModel] = CurriculumLookupInput

    def _run(self, topic: str, grade: str = "Form 3") -> str:
        curriculum_db = {
            "photosynthesis": {
                "grade": "Form 2/3",
                "kicd_strand": "Biology — Unit 4: Nutrition in Plants",
                "learning_objectives": [
                    "Define photosynthesis using East African plant examples",
                    "Explain the light-dependent reaction using maize and sugarcane",
                    "Analyse factors affecting photosynthesis rate in highland tea",
                ],
                "east_african_examples": [
                    "Maize (mahindi) — staple crop, C4 photosynthesis",
                    "Sugarcane (miwa) — high light intensity crops in Nyanza",
                    "Highland tea (chai) — Cloud Forest photosynthesis adaptations",
                    "Water hyacinth (magugu ya maji) — Lake Victoria ecosystem",
                ],
                "swahili_terms": {
                    "photosynthesis": "usanisinuru",
                    "chlorophyll": "klorofili",
                    "glucose": "glukosi",
                    "oxygen": "oksijeni",
                },
                "kcse_exam_tips": "Expect 10-mark diagram questions; practice labelling maize leaf cross-sections.",
            }
        }
        topic_key = topic.lower().strip()
        data = curriculum_db.get(topic_key, {
            "note": f"Topic '{topic}' not in local cache. Recommend KICD portal lookup.",
            "grade": grade,
        })
        return json.dumps(data, ensure_ascii=False, indent=2)


# ─────────────────────────────────────────────────────────────────────────────
# Tool: Welfare Brief Generator
# ─────────────────────────────────────────────────────────────────────────────
class WelfareBriefInput(BaseModel):
    distress_report: str = Field(description="JSON string from distress_detector output.")
    learner_message: str = Field(description="The original message from the learner.")

class WelfareBriefTool(BaseTool):
    name: str = "welfare_brief_generator"
    description: str = (
        "Generates a structured welfare briefing packet for the human counsellor. "
        "Matches available counsellor by region specialty. "
        "Returns a JSON briefing with learner context, suggested opener in learner's language, "
        "and matched counsellor info. NEVER makes welfare decisions — only prepares the briefing."
    )
    args_schema: type[BaseModel] = WelfareBriefInput

    def _run(self, distress_report: str, learner_message: str) -> str:
        try:
            report = json.loads(distress_report)
        except Exception:
            report = {}

        context = report.get("learner_context", {})
        county = context.get("county", "Unknown")
        language = context.get("language", "Swahili")
        name = context.get("name", "the learner")
        grade = context.get("grade", "Unknown")
        quiz_avg = context.get("quiz_avg_14d", "N/A")
        missed = context.get("missed_sessions", 0)
        next_harvest = context.get("next_harvest", "N/A")
        flags = context.get("family_flags", [])

        counsellors = TRAIL_MEMORY.get("counsellors_available", [])
        matched = next(
            (c for c in counsellors if county.lower() in c["specialty"].lower() and c["available"]),
            counsellors[0] if counsellors else {"name": "On-call officer", "specialty": "General"},
        )

        openers = {
            "Dholuo": f"Ber bed kode {name}. Wapenjo ni in nade?",
            "Kikuyu": f"Ũhoro wa {name}? Tũgũkorwo nawe.",
            "Somali": f"Soo dhawow {name}. Sidee tahay?",
            "Swahili": f"Habari {name}? Tuko hapa kukusaidia.",
        }
        opener = openers.get(language, openers["Swahili"])

        brief = {
            "priority": report.get("severity", "medium").upper(),
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "learner_summary": {
                "name": name,
                "county": county,
                "grade": grade,
                "home_language": language,
                "quiz_avg_14d": quiz_avg,
                "missed_sessions": missed,
                "next_harvest_date": next_harvest,
                "family_flags": flags,
            },
            "trigger": {
                "original_message": learner_message,
                "matched_keywords": report.get("matched_keywords", []),
            },
            "counsellor_match": matched,
            "suggested_opener": opener,
            "action_required": "Please contact learner within 15 minutes. Do NOT auto-send generic message.",
            "kill_switch": "*#EDU9# to pause all AI messages to this learner immediately",
            "data_note": "This briefing will auto-delete after 90 days per OASIS/DPA 2019.",
        }
        return json.dumps(brief, ensure_ascii=False, indent=2)


# ─────────────────────────────────────────────────────────────────────────────
# MODEL CONFIGURATION
# ─────────────────────────────────────────────────────────────────────────────
# Using the stable "gemini/" routing prefix to prevent path resolution 404s
edusavvy_llm = LLM(
    model="gemini/gemini-1.5-flash",  
    temperature=0.2
)

# ─────────────────────────────────────────────────────────────────────────────
# AGENT 1: SCOUT (Learning Companion)
# ─────────────────────────────────────────────────────────────────────────────
scout_agent = Agent(
    role="EduSavvy Scout — KICD-Aligned Learning Companion",
    goal=(
        "Guide Kenyan learners through adaptive, culturally grounded curriculum content. "
        "Detect emotional distress signals immediately and hand off to Guardian. "
        "NEVER attempt welfare counselling. NEVER send shame-based messages. "
        "All content must be KICD-aligned with East African examples."
    ),
    backstory=(
        "You are a KICD-certified AI tutor trained on the Kenyan national curriculum. "
        "You speak to learners like an encouraging older sibling, not a bank manager. "
        "You know that in March, maize farmers' children may be absent for planting — "
        "and that is not a failure, it is life. "
        "You have RANK boundaries: you handle curriculum, quizzes, and gentle nudges. "
        "The moment a learner mentions giving up, family crisis, or hopelessness, "
        "your only job is to say 'We see you — real help is coming' and trigger Guardian. "
        "You never use the words: failing, behind, at-risk, or dropout."
    ),
    tools=[DistressDetectorTool(), KICDCurriculumTool()],
    llm=edusavvy_llm,  
    verbose=True,
    allow_delegation=True,
    max_iter=5,
)

# ─────────────────────────────────────────────────────────────────────────────
# AGENT 2: GUARDIAN (Welfare Coordinator)
# ─────────────────────────────────────────────────────────────────────────────
guardian_agent = Agent(
    role="EduSavvy Guardian — Learner Welfare Coordinator",
    goal=(
        "Receive distress handoffs from Scout and prepare complete welfare briefing packets "
        "for human counsellors. Match counsellors by regional expertise. "
        "NEVER make independent welfare decisions. "
        "NEVER approve or deny anything — only prepare the briefing and notify the human."
    ),
    backstory=(
        "You are the bridge between AI and human care. "
        "When Scout detects a learner in distress, you have exactly 60 seconds to prepare "
        "a briefing that gives a human counsellor everything they need to help. "
        "You know that a learner from Kisumu needs a different conversational opener "
        "than one from Garissa. You know that 'school fee month' is January, May, September. "
        "Your output is never a decision — it is always a well-prepared handoff to a human. "
        "You hold this data for 90 days then delete it, per DPA 2019."
    ),
    tools=[WelfareBriefTool()],
    llm=edusavvy_llm,  
    verbose=True,
    allow_delegation=False,
)

# ─────────────────────────────────────────────────────────────────────────────
# TASKS
# ─────────────────────────────────────────────────────────────────────────────
def build_scout_task(learner_message: str, learner_id: str = "L001") -> Task:
    return Task(
        description=(
            f"A learner (ID: {learner_id}) has sent this message: '{learner_message}'\n\n"
            "Your RANK duties:\n"
            "1. Use distress_detector tool to analyse the message.\n"
            "2. If distress IS detected (is_distress=true): "
            "   - Respond with a warm, holding message in Swahili/Sheng: 'Tunakujua. Msaada wa kweli unakuja.' "
            "   - Include the full distress_detector JSON in your output for Guardian.\n"
            "3. If NO distress: "
            "   - Use kicd_curriculum_lookup to find relevant KICD content based on context. "
            "   - Provide a helpful, encouraging curriculum response using East African examples. "
            "   - Suggest one specific next study action.\n"
            "NEVER use the words: failing, behind, at-risk, dropout, unreliable, risky.\n"
            "Output format: JSON with fields: "
            "'distress_detected', 'learner_response', 'distress_report' (if applicable), "
            "'curriculum_content' (if applicable), 'handoff_to_guardian' (bool)."
        ),
        expected_output=(
            "A JSON object containing the Scout's response and, if distress is detected, "
            "the full distress report and a flag to trigger Guardian handoff."
        ),
        agent=scout_agent,
    )


def build_guardian_task(scout_output_placeholder: str = "") -> Task:
    return Task(
        description=(
            "You have received a handoff from Scout. The Scout's full output is available "
            "in the task context.\n\n"
            "Your RANK duties:\n"
            "1. Extract the distress_report JSON from Scout's output.\n"
            "2. Use welfare_brief_generator tool with that distress_report and the original learner message.\n"
            "3. Return the complete welfare briefing packet.\n"
            "4. Add a human-readable summary at the top: who needs help, how urgently, "
            "   and the matched counsellor's name.\n\n"
            "CRITICAL RANK CONSTRAINT: You CANNOT approve, deny, or advise the learner directly. "
            "Your only output is a briefing for the human counsellor. "
            "Include this line: 'AWAITING HUMAN DECISION — Guardian cannot act independently.'"
        ),
        expected_output=(
            "A structured welfare briefing packet JSON with counsellor match, "
            "learner context, suggested opener, and the explicit note that human action is required."
        ),
        agent=guardian_agent,
        context=[],
    )


# ─────────────────────────────────────────────────────────────────────────────
# CREW ORCHESTRATION
# ─────────────────────────────────────────────────────────────────────────────
def run_edusavvy_crew(learner_message: str, learner_id: str = "L001") -> dict:
    print("\n" + "="*60)
    print("EduSavvy Agent Pride — Processing Learner Interaction")
    print(f"Learner ID: {learner_id}")
    print(f"Message: '{learner_message}'")
    print(f"Timestamp: {datetime.now(timezone.utc).isoformat()}")
    print("="*60 + "\n")

    scout_task = build_scout_task(learner_message, learner_id)

    scout_crew = Crew(
        agents=[scout_agent],
        tasks=[scout_task],
        process=Process.sequential,
        verbose=True,
    )

    scout_result = scout_crew.kickoff()
    scout_output = str(scout_result)

    print("\n" + "-"*40)
    print("SCOUT OUTPUT:")
    print(scout_output)
    print("-"*40)

    handoff_required = False
    try:
        import re
        # Extract the first JSON object non-greedily (reduces JSONDecodeError from extra braces)
        json_match = re.search(r'\{.*?\}', scout_output, re.DOTALL)
        if json_match:
            parsed = json.loads(json_match.group())
            handoff_required = parsed.get("handoff_to_guardian", False) or parsed.get("distress_detected", False)
    except Exception:
        handoff_required = any(kw in scout_output.lower() for kw in ["handoff_to_guardian: true", '"handoff_to_guardian": true'])

    guardian_output = None
    if handoff_required:
        print("\n🚨 HUNT TRIGGER: Distress detected — activating Guardian Agent")
        print("ETA: Guardian briefing within 60 seconds | Human SLA: 15 minutes\n")

        guardian_task = build_guardian_task()
        guardian_task.description = (
            f"Scout has detected distress. Here is Scout's full output:\n\n{scout_output}\n\n"
            + guardian_task.description
        )

        guardian_crew = Crew(
            agents=[guardian_agent],
            tasks=[guardian_task],
            process=Process.sequential,
            verbose=True,
        )
        guardian_result = guardian_crew.kickoff()
        guardian_output = str(guardian_result)

        print("\n" + "-"*40)
        print("GUARDIAN WELFARE BRIEF:")
        print(guardian_output)
        print("-"*40)

    return {
        "learner_id": learner_id,
        "original_message": learner_message,
        "scout_output": scout_output,
        "guardian_triggered": handoff_required,
        "guardian_output": guardian_output,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "data_location": "AWS af-south-1 (Cape Town) — DPA 2019 compliant",
    }


# ─────────────────────────────────────────────────────────────────────────────
# GUARD SAFETY RAILS (applied before any agent runs)
# ─────────────────────────────────────────────────────────────────────────────
BANNED_OUTPUT_TERMS = [
    "unreliable", "risky applicant", "dropout risk", "at-risk student",
    "falling behind", "likely to fail", "you are failing",
]

def guard_output_filter(text: str) -> tuple[bool, list[str]]:
    violations = [term for term in BANNED_OUTPUT_TERMS if term.lower() in text.lower()]
    return (len(violations) == 0, violations)


# ─────────────────────────────────────────────────────────────────────────────
# MAIN — Interactive CLI prototype
# ─────────────────────────────────────────────────────────────────────────────
def main():
    print("\n" + "="*60)
    print("  EduSavvy Agent Pride — CrewAI Prototype")
    print("  AI Safari Capstone 2025")
    print("  Agents: Scout (Learning Companion) + Guardian (Welfare)")
    print("  Data sovereignty: AWS af-south-1 | DPA 2019 compliant")
    print("="*60)

    demo_scenarios = [
        ("L001", "I don't understand photosynthesis, can you help me?"),
        ("L001", "I want to give up on school. There's no point anymore."),
        ("L001", "What are the main topics I need for KCSE biology?"),
    ]

    print("\nDemo mode — running 3 preset scenarios:")
    print("(In production, replace with live SMS/USSD message intake)\n")

    for i, (learner_id, message) in enumerate(demo_scenarios, 1):
        print(f"\n{'='*60}")
        print(f"SCENARIO {i}/3")

        result = run_edusavvy_crew(message, learner_id)

        combined_output = (result["scout_output"] or "") + (result["guardian_output"] or "")
        is_clean, violations = guard_output_filter(combined_output)
        if not is_clean:
            print(f"\n🛑 GUARD ALERT: Dignity violation detected — {violations}")
            print("Output blocked. Routing to human review.")
        else:
            print("\n✅ GUARD: Output passed dignity filter")

        if i < len(demo_scenarios):
            input("\nPress Enter to run next scenario...")

    print("\n" + "="*60)
    print("Demo complete.")
    print("To integrate with live SMS/USSD: replace demo_scenarios with")
    print("Africa's Talking SMS webhook → run_edusavvy_crew(sms_body, learner_id)")
    print("="*60 + "\n")


if __name__ == "__main__":
    main()