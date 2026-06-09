# EduSavvy — Complete Capstone Portfolio
## AI Safari 2025 | Chief AI Officer Submission

---

## YOUR COMPLETE FILE LIST

| # | File | What it is | Where it goes |
|---|------|-----------|---------------|
| 1 | `edusavvy_app.html` | The full live web app | Deploy to Vercel (see below) |
| 2 | `edusavvy_vercel.json` | Vercel config (must upload with the app) | Upload alongside index.html |
| 3 | `EduSavvy_Strategic_AI_Blueprint.docx` | 4-section strategic document | Upload to Google Docs → share link |
| 4 | `EduSavvy_Safari_Reflection.docx` | 500-word reflection | Upload to Google Docs → share link |
| 5 | `EduSavvy_Ethical_Architecture_Dossier.docx` | ETHOS/TRACK/OASIS/PRIDE/HORIZON | Upload to Google Docs → share link |
| 6 | `EduSavvy_Executive_Brief.docx` | 1-page board summary | Upload to Google Docs → share link |
| 7 | `EduSavvy_Impact_Assessment.xlsx` | 5-sheet impact tracker | Upload to Google Sheets → share link |
| 8 | `edusavvy_crewai_prototype.py` | Live agent prototype (Option B) | GitHub repo → share link |
| 9 | `FINAL_README.md` | This file | Keep for your reference |

---

## WHERE CREWAI FITS IN YOUR PROJECT

This is the question most people get confused about. Here is the simple answer:

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR CAPSTONE SYSTEM                      │
│                                                             │
│  edusavvy_app.html          edusavvy_crewai_prototype.py    │
│  ─────────────────          ──────────────────────────────  │
│  The INTERFACE              The AGENT ENGINE                │
│                                                             │
│  What learners SEE          What runs BEHIND THE SCENES     │
│  and interact with          when agents actually work       │
│                                                             │
│  Scout chat UI    ──────►  Scout Agent (CrewAI)             │
│  Guardian UI      ──────►  Guardian Agent (CrewAI)          │
│  Agent monitor    ◄──────  RANK/TRAIL/HUNT/GUARD logs       │
│                                                             │
│  Deployed on Vercel         Runs locally on your computer   │
│  (FREE, public URL)         OR on a server as a backend API │
└─────────────────────────────────────────────────────────────┘
```

### The Three Layers Explained

**Layer 1 — The Web App (edusavvy_app.html)**
- This is what you show your evaluators
- Deployed live on Vercel at your public URL
- Uses the real Claude API (claude-sonnet-4-5) for Scout AI chat
- Has all 5 pages: Dashboard, Quiz, Timetable, Scout AI, Agent System
- Guest browsing, student login, teacher login all work in the browser

**Layer 2 — The Claude API (already in the app)**
- The `callClaudeAPI()` function in edusavvy_app.html calls Anthropic directly
- Scout AI chat gives REAL intelligent responses powered by Claude
- System prompt enforces KICD 8-4-4 curriculum + East African context
- Falls back to local responses if no API key configured
- This IS the AI in your app — it works right now without CrewAI

**Layer 3 — CrewAI (edusavvy_crewai_prototype.py)**
- This is your Option B "Live Prototype" from the capstone brief
- Demonstrates the FULL agent orchestration logic: Scout → Guardian handoff
- Shows RANK, TRAIL, HUNT, GUARD, and CYCLE all working together
- Runs locally on your laptop (not deployed)
- Submit the GitHub link to this file as your live prototype

### In Simple Terms
- **Without CrewAI**: Your app still works perfectly. Claude API = the AI brain.
- **With CrewAI**: You demonstrate the agent architecture from your capstone documents running as actual code.
- **Both together**: Complete capstone. Web app shows the product. CrewAI shows the engineering.

---

## DEPLOY THE WEB APP TO VERCEL (5 minutes)

### Step 1 — Put files on GitHub
1. Go to github.com → New repository → name it `edusavvy`
2. Upload TWO files: `edusavvy_app.html` (rename to `index.html`) and `edusavvy_vercel.json`

### Step 2 — Deploy on Vercel
1. Go to vercel.com → Sign up with GitHub (free)
2. Click **Add New Project** → Import your `edusavvy` repo
3. Framework: select **Other**
4. Click **Deploy** — done in ~30 seconds
5. Your URL: `https://edusavvy-xyz.vercel.app`

### Step 3 — Add your Claude API key (optional but recommended)
1. In Vercel dashboard → your project → Settings → Environment Variables
2. Add: `ANTHROPIC_API_KEY` = `sk-ant-...your key...`
3. The app already calls the API — it will work automatically

**Without the API key:** Scout AI uses intelligent fallback responses — still demonstrates all features.

---

## RUN CREWAI PROTOTYPE LOCALLY

```bash
# Install dependencies
pip install crewai python-dotenv

# Create .env file
echo "OPENAI_API_KEY=sk-your-key-here" > .env

# Run the 3 demo scenarios
python edusavvy_crewai_prototype.py
```

**What you will see:**
- Scenario 1: Normal curriculum question → Scout responds with KICD-aligned Biology help
- Scenario 2: Distress message → Scout detects it → Guardian activated → welfare brief generated
- Scenario 3: KCSE revision request → Scout responds with East African exam tips

---

## WHAT GOES WHERE IN YOUR SUBMISSION

| Submission requirement | Your file | Platform |
|------------------------|-----------|----------|
| Executive Brief | `EduSavvy_Executive_Brief.docx` | Google Docs |
| Ethical Architecture Dossier | `EduSavvy_Ethical_Architecture_Dossier.docx` | Google Docs |  
| Strategic AI Blueprint | `EduSavvy_Strategic_AI_Blueprint.docx` | Google Docs |
| Impact Assessment Report | `EduSavvy_Impact_Assessment.xlsx` | Google Sheets |
| Safari Reflection | `EduSavvy_Safari_Reflection.docx` | Google Docs |
| Agent Pride Blueprint (visual) | Screenshot the Agent System page in your live app | Canva (paste screenshot) |
| Live Prototype (Option B) | `edusavvy_crewai_prototype.py` | GitHub repo link |
| Live Web App | Your Vercel URL | Share the live URL |

---

## CANVA — AGENT PRIDE BLUEPRINT

You asked how to put the diagram in Canva. Here are two options:

**Option A (easiest):**
1. Open your live Vercel app → go to **Agent System** page
2. Take a screenshot of the full page
3. In Canva: New Design → Presentation → Paste screenshot
4. Add a title text box: "EduSavvy Agent Pride Blueprint"
5. Add text labels pointing to key parts: RANK, TRAIL, HUNT, GUARD

**Option B (more polished):**
1. Open Canva → search templates for "System Architecture" or "Process Flow"
2. Build the diagram manually using the structure from your Agent System page:
   - Box 1: Scout Agent (green) — RANK boundaries listed inside
   - Arrow down: "HUNT trigger — distress detected"
   - Box 2: Guardian Agent (purple) — RANK boundaries listed inside
   - Arrow down: "Human counsellor (15-min SLA)"
   - Box at bottom: GUARD safety rails (red border)
3. Add your school/program branding

---

## WHAT THE APP CONTAINS

### Features built
- ✅ Login / Signup with email + password (persists in localStorage)
- ✅ Guest browsing (no account needed — "Browse as Guest" button)
- ✅ Teacher role with custom school name input
- ✅ Student role with school selection from 65+ Kenyan high schools
- ✅ Profile editor (change name, grade, school — updates timetable immediately)
- ✅ Avatar with initials + colour generated from user's name
- ✅ Dashboard with live progress, subject cards, quiz history
- ✅ Quiz engine — 10 subjects × 4 form levels = 40 question sets
- ✅ All questions KCSE past-paper based (2018–2023) with East African context
- ✅ Form level selector (Form 1, 2, 3, 4) on every quiz
- ✅ Scores saved to localStorage and displayed in dashboard
- ✅ School-specific timetables (National/Extra-County/County boarding schedules)
- ✅ Timetable week view + list view, highlights today's sessions
- ✅ Scout AI chat powered by Claude claude-sonnet-4-5 (real API + fallback)
- ✅ KICD 8-4-4 system prompt — East African examples enforced
- ✅ Distress detection (client-side, private, instant)
- ✅ Guardian agent activated on distress with 15-min human SLA simulation
- ✅ SMS simulation view showing Safaricom/Africa's Talking interface
- ✅ Agent System monitor with live log, kill switch test, TRACK/OASIS/AIM frameworks
- ✅ 5-year impact targets table
- ✅ DPA 2019 compliance notices throughout

### Schools covered (65+)
National, Extra-County, and County schools across all 47 counties including:
ASAL counties (Garissa, Wajir, Mandera, Turkana, Marsabit, Isiolo),
Coast (Mombasa, Kilifi, Kwale, Taita Taveta),
Nairobi, Central, Rift Valley, Nyanza, Western, Eastern

---

*EduSavvy · AI Safari Capstone 2026 · Kenya DPA 2019 Compliant · AWS af-south-1*