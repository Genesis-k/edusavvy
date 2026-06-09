// ── SCHOOLS (Kenya high schools) ────────────────────────────────
const SCHOOLS=[
  {id:'ahsc',name:'Alliance High School',loc:'Kikuyu, Kiambu',county:'Kiambu',type:'National',color:'#C0392B'},
  {id:'nrbs',name:'Nairobi School',loc:'Nairobi',county:'Nairobi',type:'National',color:'#1B6CA8'},
  {id:'khsc',name:'Kenya High School',loc:'Nairobi',county:'Nairobi',type:'National',color:'#534AB7'},
  {id:'masg',name:'Maseno School',loc:'Maseno, Kisumu',county:'Kisumu',type:'National',color:'#217A4B'},
  {id:'stmg',name:"St. Mary's Girls Kisumu",loc:'Kisumu',county:'Kisumu',type:'National',color:'#1B6CA8'},
  {id:'maru',name:'Maranda High School',loc:'Siaya',county:'Siaya',type:'National',color:'#C0392B'},
  {id:'mang',name:"Mang'u High School",loc:'Thika, Kiambu',county:'Kiambu',type:'National',color:'#993C1D'},
  {id:'lghl',name:'Loreto High Limuru',loc:'Limuru, Kiambu',county:'Kiambu',type:'National',color:'#534AB7'},
  {id:'gaij',name:"Gaichanjiru High School",loc:"Murang'a",county:"Murang'a",type:'National',color:'#E8A020'},
  {id:'lugn',name:'Lugulu Girls High School',loc:'Bungoma',county:'Bungoma',type:'National',color:'#C0392B'},
  {id:'butm',name:'Butere High School',loc:'Butere, Kakamega',county:'Kakamega',type:'National',color:'#0F6E56'},
  {id:'kshs',name:'Kisii High School',loc:'Kisii',county:'Kisii',type:'National',color:'#217A4B'},
  {id:'kbhs',name:'Kabianga High School',loc:'Kericho',county:'Kericho',type:'National',color:'#993C1D'},
  {id:'orek',name:'Orero High School',loc:'Homa Bay',county:'Homa Bay',type:'National',color:'#217A4B'},
  {id:'prhs',name:'Precious Blood Riruta',loc:'Nairobi',county:'Nairobi',type:'National',color:'#993C1D'},
  {id:'krig',name:"Karima Girls' High",loc:'Nyeri',county:'Nyeri',type:'National',color:'#534AB7'},
  {id:'nakb',name:'Nakuru High School',loc:'Nakuru',county:'Nakuru',type:'National',color:'#E8A020'},
  {id:'mbhs',name:'Mombasa High School',loc:'Mombasa',county:'Mombasa',type:'National',color:'#0F6E56'},
  {id:'stpk',name:"St. Patrick's Iten",loc:'Elgeyo Marakwet',county:'Elgeyo Marakwet',type:'National',color:'#217A4B'},
  {id:'smya',name:"St. Mary's School Yala",loc:'Yala, Siaya',county:'Siaya',type:'National',color:'#0F6E56'},
  {id:'thhs',name:'Thika High School',loc:'Thika, Kiambu',county:'Kiambu',type:'Extra-County',color:'#1B6CA8'},
  {id:'elds',name:'Eldoret High School',loc:'Uasin Gishu',county:'Uasin Gishu',type:'Extra-County',color:'#E8A020'},
  {id:'meru',name:'Meru School',loc:'Meru',county:'Meru',type:'Extra-County',color:'#217A4B'},
  {id:'nkub',name:'Nkubu High School',loc:'Meru',county:'Meru',type:'Extra-County',color:'#C0392B'},
  {id:'embu',name:'Embu High School',loc:'Embu',county:'Embu',type:'Extra-County',color:'#0F6E56'},
  {id:'kapt',name:'Kapsabet High School',loc:'Nandi',county:'Nandi',type:'Extra-County',color:'#993C1D'},
  {id:'vhss',name:'Vihiga High School',loc:'Vihiga',county:'Vihiga',type:'Extra-County',color:'#1B6CA8'},
  {id:'buhs',name:'Bungoma High School',loc:'Bungoma',county:'Bungoma',type:'Extra-County',color:'#534AB7'},
  {id:'kisb',name:'Kisumu Boys High',loc:'Kisumu',county:'Kisumu',type:'Extra-County',color:'#E8A020'},
  {id:'kghs',name:'Kakamega High School',loc:'Kakamega',county:'Kakamega',type:'Extra-County',color:'#217A4B'},
  {id:'ruhs',name:'Ruiru High School',loc:'Ruiru, Kiambu',county:'Kiambu',type:'Extra-County',color:'#993C1D'},
  {id:'murh',name:"Murang'a High School",loc:"Murang'a",county:"Murang'a",type:'Extra-County',color:'#217A4B'},
  {id:'nghs',name:"Ngara Girls' High",loc:'Nairobi',county:'Nairobi',type:'Extra-County',color:'#1B6CA8'},
  {id:'kabk',name:'Kabarak High School',loc:'Nakuru',county:'Nakuru',type:'Extra-County',color:'#E8A020'},
  {id:'kigh',name:'Kisii Girls High',loc:'Kisii',county:'Kisii',type:'Extra-County',color:'#534AB7'},
  {id:'wajh',name:'Wajir High School',loc:'Wajir',county:'Wajir',type:'Extra-County',color:'#6C757D'},
  {id:'mndh',name:'Mandera High School',loc:'Mandera',county:'Mandera',type:'Extra-County',color:'#6C757D'},
  {id:'mrsh',name:'Marsabit High School',loc:'Marsabit',county:'Marsabit',type:'Extra-County',color:'#6C757D'},
  {id:'turk',name:'Turkana High School',loc:'Lodwar',county:'Turkana',type:'Extra-County',color:'#6C757D'},
  {id:'isih',name:'Isiolo High School',loc:'Isiolo',county:'Isiolo',type:'Extra-County',color:'#6C757D'},
  {id:'kith',name:'Kitui High School',loc:'Kitui',county:'Kitui',type:'Extra-County',color:'#993C1D'},
  {id:'mach',name:'Machakos Boys High',loc:'Machakos',county:'Machakos',type:'Extra-County',color:'#E8A020'},
  {id:'homh',name:'Homa Bay High School',loc:'Homa Bay',county:'Homa Bay',type:'Extra-County',color:'#217A4B'},
  {id:'bome',name:'Bomet High School',loc:'Bomet',county:'Bomet',type:'Extra-County',color:'#534AB7'},
  {id:'nany',name:'Nanyuki High School',loc:'Laikipia',county:'Laikipia',type:'Extra-County',color:'#1B6CA8'},
  {id:'naro',name:'Narok High School',loc:'Narok',county:'Narok',type:'Extra-County',color:'#E8A020'},
  {id:'kabr',name:'Kabarnet High School',loc:'Baringo',county:'Baringo',type:'Extra-County',color:'#993C1D'},
  {id:'siah',name:'Siaya High School',loc:'Siaya',county:'Siaya',type:'Extra-County',color:'#217A4B'},
  {id:'kirg',name:'Kirinyaga Girls High',loc:'Kirinyaga',county:'Kirinyaga',type:'Extra-County',color:'#0F6E56'},
  {id:'kths',name:'Kericho Tea Town High',loc:'Kericho',county:'Kericho',type:'County',color:'#993C1D'},
  {id:'grds',name:'Garissa Day Secondary',loc:'Garissa',county:'Garissa',type:'County',color:'#6C757D'},
  {id:'olhs',name:'Olympic High School',loc:'Nairobi',county:'Nairobi',type:'County',color:'#217A4B'},
  {id:'dmhs',name:'Dagoretti High School',loc:'Nairobi',county:'Nairobi',type:'County',color:'#E8A020'},
  {id:'kite',name:'Kitengela High School',loc:'Kajiado',county:'Kajiado',type:'County',color:'#993C1D'},
  {id:'malh',name:'Malindi High School',loc:'Kilifi',county:'Kilifi',type:'County',color:'#217A4B'},
  {id:'vohs',name:'Voi Secondary School',loc:'Taita Taveta',county:'Taita Taveta',type:'County',color:'#993C1D'},
  {id:'muth',name:'Mumias High School',loc:'Kakamega',county:'Kakamega',type:'County',color:'#0F6E56'},
  {id:'webu',name:'Webuye Secondary',loc:'Bungoma',county:'Bungoma',type:'County',color:'#1B6CA8'},
  {id:'trns',name:'Trans-Nzoia High',loc:'Kitale',county:'Trans-Nzoia',type:'County',color:'#534AB7'},
  {id:'kpng',name:'Kapenguria High School',loc:'West Pokot',county:'West Pokot',type:'County',color:'#6C757D'},
  {id:'mbit',name:'Mbita High School',loc:'Homa Bay',county:'Homa Bay',type:'County',color:'#217A4B'},
  {id:'lmhs',name:'Limuru Girls High',loc:'Limuru',county:'Kiambu',type:'County',color:'#1B6CA8'},
  {id:'tmtm',name:'Tumu Tumu Girls High',loc:'Nyeri',county:'Nyeri',type:'County',color:'#534AB7'},
  {id:'ughs',name:'Ugunja Secondary',loc:'Siaya',county:'Siaya',type:'County',color:'#217A4B'},
];
const GRADES=['Form 1','Form 2','Form 3','Form 4'];
// ── SUBJECTS (full 8-4-4) ────────────────────────────────────────
const SUBJECTS=[
  {id:'bio',  name:'Biology',       icon:'🌿', color:'#217A4B', light:'#E6F5EE'},
  {id:'chem', name:'Chemistry',        icon:'⚗️', color:'#1B6CA8', light:'#EAF3FB'},
  {id:'math', name:'Mathematics',      icon:'📐', color:'#E8A020', light:'#FFF8E8'},
  {id:'eng',  name:'English',          icon:'📖', color:'#0F6E56', light:'#E1F5EE'},
  {id:'kisw', name:'Kiswahili',         icon:'🗣️', color:'#993C1D', light:'#FAECE7'},
  {id:'phys', name:'Physics',          icon:'⚡', color:'#534AB7', light:'#EEEDFE'},
  {id:'hist', name:'History & Govt',   icon:'🏛️', color:'#6C757D', light:'#F5F5F5'},
  {id:'geo',  name:'Geography',        icon:'🗺️', color:'#0F6E56', light:'#E1F5EE'},
  {id:'cre',  name:'CRE',              icon:'✝️', color:'#993C1D', light:'#FAECE7'},
  {id:'bst',  name:'Business Studies', icon:'📊', color:'#E8A020', light:'#FFF8E8'},
];
// ── QUIZ BANK: KCSE-based, per form level ───────────────────────
const QB={
bio:{'Form 1':[
  {tp:'Cell Biology',st:'KCSE 2019 P1 Q3',df:'Recall',
   q:'State the function of the cell membrane.',
   o:['Controls entry and exit of substances into and out of the cell','Provides shape to the cell','Contains the genetic material','Produces energy for the cell'],
   a:0,ex:'The cell membrane is selectively permeable — it controls movement of nutrients, water, and waste into and out of the cell.',
   ctx:'Direct recall from KCSE 2019 P1. Memorise: "selectively permeable, controls movement of substances."'},
  {tp:'Cell Biology',st:'KCSE 2022 P1 Q1',df:'Application',
   q:'Red blood cells are placed in a very dilute salt solution. What happens to the cells?',
   o:['They shrink (crenate)','They burst (lyse)','They remain unchanged','They divide by mitosis'],
   a:1,ex:'In a hypotonic solution, water moves INTO the cells by osmosis. Red blood cells lack a cell wall so they swell and burst (lyse).',
   ctx:'KCSE frequently compares red blood cells (lyse) vs plant cells (become turgid — have cell wall). Know both outcomes!'},
],'Form 2':[
  {tp:'Photosynthesis',st:'KCSE 2021 P1 Q5',df:'Application',
   q:'A maize plant in Kisumu grows faster near the shamba edge where light intensity is highest. Which factor of photosynthesis is most directly responsible?',
   o:['Higher CO2 from road vehicles','Higher light intensity driving the light-dependent reaction','More water from road drainage','Warmer soil temperature'],
   a:1,ex:'Light intensity drives the light-dependent reaction in the thylakoid. More ATP and NADPH are produced, increasing the overall photosynthesis rate.',
   ctx:'Maize (mahindi) is a C4 plant — exceptionally efficient in bright Kenyan sunlight. KCSE tests photosynthesis factors almost every year.'},
  {tp:'Photosynthesis',st:'KCSE 2023 P1 Q4',df:'Analysis',
   q:'In the equation: 6CO2 + 6H2O + light energy → C6H12O6 + 6O2. Which raw material is obtained from the atmosphere?',
   o:['Water (H2O)','Glucose (C6H12O6)','Carbon dioxide (CO2)','Oxygen (O2)'],
   a:2,ex:'CO2 is absorbed from the atmosphere through stomata on the leaf. Water is absorbed from the soil by roots.',
   ctx:'KCSE 2023 tested this equation directly. It appears almost every year — memorise it.'},
],'Form 3':[
  {tp:'Genetics',st:'KCSE 2022 P2 Q3',df:'Analysis',
   q:'In pea plants, tallness (T) is dominant over dwarfness (t). A cross Tt x Tt gives what ratio of tall to dwarf?',
   o:['1:1','2:1','3:1','4:0'],
   a:2,ex:'Tt x Tt produces TT, Tt, Tt, tt — ratio 3 tall:1 dwarf. This is the standard monohybrid cross result.',
   ctx:'KCSE P2 tests Punnett squares almost every year, worth 8 marks. Practice all dihybrid crosses too.'},
  {tp:'Ecology',st:'KCSE 2020 P1 Q7',df:'Application',
   q:'In the Maasai Mara ecosystem, organisms that break down dead organic matter into simpler inorganic substances are called:',
   o:['Producers','Primary consumers','Decomposers','Tertiary consumers'],
   a:2,ex:'Decomposers (bacteria and fungi) break down dead organic matter and recycle nutrients back into the soil.',
   ctx:'Maasai Mara is a KCSE favourite for ecology questions. Know food chains, webs, and the nitrogen cycle.'},
],'Form 4':[
  {tp:'Hormones',st:'KCSE 2023 P1 Q11',df:'Application',
   q:'Which hormone is secreted by the adrenal medulla during an emergency situation?',
   o:['Insulin','Adrenaline','Oestrogen','Testosterone'],
   a:1,ex:'Adrenaline is secreted by the adrenal MEDULLA in "fight or flight". It increases heart rate, blood pressure, and blood glucose.',
   ctx:'KCSE 2023. Remember: adrenal CORTEX = cortisol/aldosterone; adrenal MEDULLA = adrenaline. This distinction is tested often.'},
  {tp:'Reproduction',st:'KCSE 2022 P1 Q9',df:'Recall',
   q:'Where does fertilisation normally take place in the female reproductive system?',
   o:['Uterus','Ovary','Fallopian tube (oviduct)','Cervix'],
   a:2,ex:'Fertilisation normally occurs in the fallopian tube (oviduct). The fertilised egg (zygote) then travels to the uterus for implantation.',
   ctx:'KCSE 2022. Human reproduction is Form 4 — fertilisation, implantation, pregnancy, birth are all testable.'},
]},
chem:{'Form 1':[
  {tp:'States of Matter',st:'KCSE 2018 P1 Q2',df:'Recall',
   q:'Which statement correctly describes a property of gases?',
   o:['Fixed shape, fixed volume','No fixed shape, fixed volume','No fixed shape, no fixed volume','Fixed shape, no fixed volume'],
   a:2,ex:'Gases have no fixed shape and no fixed volume — particles are far apart and move freely in all directions.',
   ctx:'States of matter is Form 1 — expect 1-2 questions every KCSE Chemistry paper.'},
  {tp:'Chemical Symbols',st:'KCSE 2019 P1 Q1',df:'Recall',
   q:'What is the chemical symbol for the element Iron?',
   o:['Ir','In','Fe','Fn'],
   a:2,ex:"Iron's symbol Fe comes from its Latin name 'Ferrum'. Know all common element symbols for KCSE.",
   ctx:'Iron ore is mined in Kishushe, Taita Taveta county. The same chemistry is relevant to Kenya\'s mineral economy.'},
],'Form 2':[
  {tp:'Chemical Bonds',st:'KCSE 2021 P1 Q6',df:'Application',
   q:'Table salt (NaCl) used to cook ugali dissolves in water. What type of bonding holds NaCl together?',
   o:['Covalent bonding','Ionic bonding','Metallic bonding','Hydrogen bonding'],
   a:1,ex:'NaCl is held by ionic bonds (Na+ and Cl-). Polar water molecules attract and separate these ions.',
   ctx:'Ugali cooked with salt is daily Kenyan chemistry! KCSE tests ionic vs covalent bonding regularly.'},
  {tp:'Chemical Equations',st:'KCSE 2020 P1 Q4',df:'Application',
   q:'What is produced when magnesium burns in oxygen?',
   o:['Magnesium hydroxide','Magnesium oxide','Magnesium carbonate','Magnesium chloride'],
   a:1,ex:'2Mg + O2 → 2MgO. Magnesium oxide (white powder) is produced when Mg burns with a bright white flame.',
   ctx:'KCSE 2020. Burning metals in oxygen is a classic practical — magnesium burning is the brightest reaction!'},
],'Form 3':[
  {tp:'Acids & Bases',st:'KCSE 2022 P1 Q8',df:'Application',
   q:'Lemon juice from a Nairobi market turns blue litmus paper red. The pH of lemon juice is most likely:',
   o:['pH 11','pH 7','pH 3','pH 14'],
   a:2,ex:'Lemon juice contains citric acid — it is acidic (pH < 7). pH 3 is consistent with strong organic acids.',
   ctx:'KCSE 2022. Know the pH scale: 1-6 acidic, 7 neutral, 8-14 alkaline. Blue litmus turns red in acid.'},
  {tp:'Electrochemistry',st:'KCSE 2023 P1 Q10',df:'Analysis',
   q:'During electrolysis of dilute sulphuric acid, which gas is produced at the cathode?',
   o:['Oxygen','Chlorine','Hydrogen','Carbon dioxide'],
   a:2,ex:'At the cathode (negative electrode): 2H+ + 2e- → H2. Hydrogen gas is produced.',
   ctx:'Electrolysis is a top-5 KCSE Chemistry topic. Know which gas forms at which electrode for each electrolyte.'},
],'Form 4':[
  {tp:'Organic Chemistry',st:'KCSE 2021 P1 Q12',df:'Analysis',
   q:'Ethanol undergoes complete combustion. What are the products?',
   o:['CO2 and H2O only','CO and H2O only','CO2, H2O and SO2','C and H2O only'],
   a:0,ex:'C2H5OH + 3O2 → 2CO2 + 3H2O. Complete combustion products are CO2 and water only.',
   ctx:'KCSE 2021. Organic chemistry is Form 4. Know combustion, fermentation, and esterification.'},
]},
math:{'Form 1':[
  {tp:'Indices',st:'KCSE 2019 P1 Q1',df:'Recall',
   q:'What is the value of 2 to the power 5?',
   o:['10','16','32','64'],
   a:2,ex:'2^5 = 2×2×2×2×2 = 32. Indices (powers) appear regularly in KCSE Paper 1 Section A.',
   ctx:'KCSE 2019 P1. Always check: the base is multiplied by itself n times, not n × base.'},
  {tp:'Fractions',st:'KCSE 2020 P1 Q2',df:'Application',
   q:'A shamba in Busia is 3/4 of a hectare. A farmer uses 2/3 of it for maize. How many hectares for maize?',
   o:['1/4','1/2','5/12','2/3'],
   a:1,ex:'3/4 × 2/3 = 6/12 = 1/2 hectare. Multiply numerators and denominators, then simplify.',
   ctx:'KCSE loves fraction questions set on shamba land. Real Kenyan farming context is deliberately used.'},
],'Form 2':[
  {tp:'Linear Equations',st:'KCSE 2021 P1 Q4',df:'Application',
   q:'Solve for x: 3x + 7 = 22',
   o:['x = 3','x = 4','x = 5','x = 6'],
   a:2,ex:'3x = 22 - 7 = 15, so x = 5.',
   ctx:'Linear equations appear in every KCSE paper. Always show all working — KCSE awards method marks.'},
  {tp:'Quadratic Equations',st:'KCSE 2022 P1 Q6',df:'Application',
   q:'A rectangular shamba has length (x+3)m and width (x-1)m. If area = 35m², what is x?',
   o:['x = 4','x = 5','x = 6','x = 7'],
   a:1,ex:'(x+3)(x-1) = 35 → x²+2x-38 = 0 → (x-5)(x+8) = 0 → x = 5 (positive).',
   ctx:'Shamba area questions using quadratics appear in nearly every KCSE Paper 1.'},
],'Form 3':[
  {tp:'Trigonometry',st:'KCSE 2022 P1 Q9',df:'Application',
   q:'From 40m away on flat ground, the angle of elevation to the top of a mast is 55°. How tall is the mast? (tan 55° = 1.428)',
   o:['28.0 m','57.1 m','40.0 m','32.5 m'],
   a:1,ex:'tan(55°) = height/40 → height = 40 × 1.428 = 57.1 m.',
   ctx:"Safaricom and Airtel masts are engineered using this exact trigonometry. KCSE 2022 set angle of elevation on masts."},
  {tp:'Statistics',st:'KCSE 2023 P1 Q8',df:'Recall',
   q:'Maize yields (kg) for 5 shambas: 120, 145, 130, 145, 110. What is the mode?',
   o:['120 kg','130 kg','145 kg','110 kg'],
   a:2,ex:'Mode = most frequent value. 145 kg appears twice; all others appear once.',
   ctx:'Agricultural statistics drive Kenya\'s food security planning — same KCSE concepts, real national decisions.'},
],'Form 4':[
  {tp:'Differentiation',st:'KCSE 2023 P2 Q3',df:'Analysis',
   q:'If y = 3x² + 5x - 2, what is dy/dx?',
   o:['3x + 5','6x + 5','6x² + 5','3x + 5x'],
   a:1,ex:'dy/dx = 6x + 5 (power rule: bring down the power, reduce it by 1).',
   ctx:'KCSE P2. Differentiation and integration together are worth 15-20 marks in Form 4.'},
]},
eng:{'Form 1':[
  {tp:'Nouns',st:'KCSE 2018 P2 Q1',df:'Recall',
   q:'Identify the type of noun in: "The honesty of the student impressed the teacher."',
   o:['Proper noun','Collective noun','Abstract noun','Material noun'],
   a:2,ex:'"Honesty" is an abstract noun — a quality or concept that cannot be seen or touched.',
   ctx:'KCSE Paper 2 always has a grammar section. Abstract nouns are a regular Form 1 topic.'},
],'Form 2':[
  {tp:'Comprehension',st:'KCSE 2021 P2 Q3',df:'Application',
   q:"In: 'The harambee spirit, which has united Kenyans since independence, is now at risk.' What does the relative clause do?",
   o:['Give a command','Add extra information about harambee spirit','Ask a question about independence','Contradict the main clause'],
   a:1,ex:"'Which has united Kenyans since independence' is a non-defining relative clause — it adds extra information.",
   ctx:"Harambee is Kenya's national motto. KCSE comprehension passages often use national identity themes."},
],'Form 3':[
  {tp:'Passive Voice',st:'KCSE 2022 P2 Q2',df:'Recall',
   q:'Which sentence correctly uses the passive voice?',
   o:['The cheetah chased the impala across the Maasai Mara.','The impala was chased by the cheetah across the Maasai Mara.','The Maasai Mara had a chasing cheetah.','Chasing happened in the Mara.'],
   a:1,ex:'Passive voice: Subject + was/were + past participle + by + agent. "The impala was chased by the cheetah."',
   ctx:'Active vs passive voice is tested in Paper 2 every year. The Maasai Mara context is a KCSE favourite.'},
],'Form 4':[
  {tp:'Oral Skills',st:'KCSE 2023 P1 Q4',df:'Application',
   q:'"We must protect our forests because Kenya\'s rainfall depends on them." This argument type is:',
   o:['An appeal to emotion','A logical cause-and-effect argument','An appeal to authority','A comparison argument'],
   a:1,ex:'This is a cause-and-effect argument: deforestation causes reduced rainfall.',
   ctx:"Kenya's forests are vital water towers. KCSE 2023 tested environmental debate argument types."},
]},
kisw:{'Form 1':[
  {tp:'Sarufi — Ngeli',st:'KCSE 2019 P2 Q1',df:'Recall',
   q:'Nomino "mto" iko katika ngeli gani ya Kiswahili?',
   o:['Ngeli U-I','Ngeli M-Mi','Ngeli Ki-Vi','Ngeli A-Wa'],
   a:1,ex:'"Mto" (wingi: mito) iko katika ngeli M-Mi. Nomino zinazoanza M- katika umoja mara nyingi ni ngeli hii.',
   ctx:'KCSE 2019 P2. Ngeli za Kiswahili ni mada muhimu sana — zinaonekana katika kila karatasi.'},
],'Form 2':[
  {tp:'Uandishi — Insha',st:'KCSE 2021 P2 Q5',df:'Application',
   q:'Katika insha ya masimulizi, kipengele kipi kinahitajika zaidi?',
   o:['Kutumia maneno ya kigeni','Mtiririko mzuri wa matukio na maelezo ya kina','Kuandika mistari mirefu tu','Kutumia nambari nyingi'],
   a:1,ex:'Insha nzuri ya masimulizi inahitaji mtiririko mzuri, wahusika waliofafanuliwa vizuri, na lugha fasaha.',
   ctx:'KCSE Paper 2: insha kawaida ni alama 20-25. Insha nzuri inaweza kuinua alama yako sana.'},
],'Form 3':[
  {tp:'Ushairi',st:'KCSE 2022 P3 Q2',df:'Analysis',
   q:'"Mizani" katika ushairi wa Kiswahili inamaanisha nini?',
   o:['Idadi ya mistari katika ubeti','Idadi ya silabi katika mstari mmoja','Mdundo wa shairi','Kichwa cha shairi'],
   a:1,ex:"'Mizani' ni idadi ya silabi katika kila mstari. Mashairi ya kitambo yana mizani 8+8+8+8.",
   ctx:'KCSE P3 inauliza ushairi kila mwaka. Jifunza: mizani, vina, beti, mshororo.'},
],'Form 4':[
  {tp:'Fasihi — Riwaya',st:'KCSE 2023 P3 Q1',df:'Analysis',
   q:'"Mhusika mkuu" katika riwaya anajulikana vipi?',
   o:['Ndiye mwandishi wa riwaya','Ndiye anayebeba maudhui makuu na kutajwa mara nyingi','Ndiye wa kwanza kutajwa','Ndiye mzuri zaidi'],
   a:1,ex:"Mhusika mkuu (protagonist) ndiyo anayebeba dhamira kuu ya hadithi.",
   ctx:'KCSE 2023 P3. Jua wahusika wakuu wa riwaya zote zinazofunzwa.'},
]},
phys:{'Form 1':[
  {tp:'Measurement',st:'KCSE 2019 P1 Q1',df:'Recall',
   q:'What is the SI unit of electric current?',
   o:['Volt','Ohm','Ampere','Watt'],
   a:2,ex:'The SI unit of current is the Ampere (A). It measures the rate of flow of electric charge.',
   ctx:'SI units appear in almost every KCSE Physics paper. Learn all 7 base SI units.'},
],'Form 2':[
  {tp:'Forces & Motion',st:'KCSE 2021 P1 Q5',df:'Application',
   q:'A lorry of mass 5000 kg accelerates at 2 m/s². What force is applied? (F = ma)',
   o:['2500 N','7000 N','10000 N','5002 N'],
   a:2,ex:'F = ma = 5000 × 2 = 10,000 N.',
   ctx:"KCSE 2021. Newton's second law appears every year. Always show formula, substitution, and units."},
],'Form 3':[
  {tp:'Waves',st:'KCSE 2022 P1 Q8',df:'Application',
   q:'A sound wave has frequency 500 Hz and wavelength 0.66 m. What is its speed?',
   o:['330 m/s','500 m/s','660 m/s','165 m/s'],
   a:0,ex:'v = fλ = 500 × 0.66 = 330 m/s. This is the standard speed of sound in air.',
   ctx:'KCSE 2022. Wave equation v=fλ is core. Speed of sound (~330 m/s) and light (3×10⁸ m/s) must be memorised.'},
],'Form 4':[
  {tp:'Electricity',st:'KCSE 2023 P1 Q11',df:'Analysis',
   q:'Three 6 Ω resistors are connected in parallel. What is the total resistance?',
   o:['18 Ω','6 Ω','3 Ω','2 Ω'],
   a:3,ex:'1/R = 1/6+1/6+1/6 = 3/6 = 1/2, so R = 2 Ω. Parallel resistors: total is less than any individual.',
   ctx:'KCSE 2023 P1. Parallel and series circuits appear every year.'},
]},
hist:{'Form 1':[
  {tp:'Early Agriculture',st:'KCSE 2019 P1 Q2',df:'Recall',
   q:'Which was the first crop domesticated in the Fertile Crescent of the Middle East?',
   o:['Maize','Wheat','Rice','Coffee'],
   a:1,ex:'Wheat was among the earliest crops domesticated (~10,000 BCE) in the Fertile Crescent (modern Iraq/Syria/Turkey).',
   ctx:'KCSE History P1 covers world history in Form 1. The agricultural revolution is a key topic.'},
],'Form 2':[
  {tp:'Colonialism in Kenya',st:'KCSE 2021 P1 Q7',df:'Application',
   q:'What was the PRIMARY reason the British built the Uganda Railway (1896-1901)?',
   o:['To transport tourists to safari parks','To control East Africa and facilitate trade','To help farmers transport maize','To connect Lakes for fishing'],
   a:1,ex:"The Uganda Railway (the 'Lunatic Express') was built primarily to enable British control of East Africa and facilitate trade.",
   ctx:'KCSE History P1 regularly tests colonial infrastructure. The Uganda Railway changed Kenya\'s settlement patterns permanently.'},
],'Form 3':[
  {tp:'African Nationalism',st:'KCSE 2022 P1 Q9',df:'Analysis',
   q:"Which organisation did Jomo Kenyatta lead to demand Kenya's independence?",
   o:['KADU','KANU','KAU','KPU'],
   a:1,ex:"Kenyatta became president of KANU, which won the 1963 elections and led Kenya to independence on 12 December 1963.",
   ctx:"KCSE 2022. Know key leaders: Kenyatta (KANU), Oginga Odinga (KPU), Daniel arap Moi."},
],'Form 4':[
  {tp:'Post-Independence',st:'KCSE 2023 P1 Q10',df:'Recall',
   q:'In which year did Kenya become a Republic?',
   o:['1963','1964','1969','1978'],
   a:1,ex:'Kenya became independent on 12 Dec 1963. It became a Republic on 12 Dec 1964.',
   ctx:'KCSE 2023. Kenya: Independent 1963, Republic 1964, new Constitution 2010.'},
]},
geo:{'Form 1':[
  {tp:'Weather Instruments',st:'KCSE 2018 P1 Q3',df:'Recall',
   q:'Which instrument is used to measure atmospheric pressure?',
   o:['Thermometer','Barometer','Rain gauge','Hygrometer'],
   a:1,ex:'A barometer measures atmospheric pressure (in millibars). The aneroid barometer is the most common type.',
   ctx:'KCSE 2018 P1. Weather instruments are Form 1 basics — expect 2-3 questions per paper.'},
],'Form 2':[
  {tp:'Soils',st:'KCSE 2021 P1 Q6',df:'Application',
   q:"The fertile red soils of the Kenyan Highlands (Kiambu, Nyeri, Murang'a) are classified as:",
   o:['Sandy soils','Clay soils','Loam soils','Volcanic (ferrallitic) soils'],
   a:3,ex:'Red soils of Central Kenya are volcanic/ferrallitic — rich in iron oxides (the red colour) and ideal for tea and coffee.',
   ctx:"KCSE 2021. Kenya's red highland soils are among the world's most fertile. Tea in Kiambu, coffee in Murang'a."},
],'Form 3':[
  {tp:'Population',st:'KCSE 2022 P1 Q8',df:'Analysis',
   q:'According to the 2019 Kenya Population Census, which county had the highest population?',
   o:['Nairobi','Kiambu','Nakuru','Kakamega'],
   a:0,ex:'Nairobi County had the highest urban population (~4.4 million) in the 2019 Census.',
   ctx:'KCSE 2022. Top 5 counties by population: Nairobi, Kiambu, Nakuru, Kakamega, Bungoma.'},
],'Form 4':[
  {tp:'Environmental Conservation',st:'KCSE 2023 P1 Q11',df:'Application',
   q:'Destruction of the Mau Forest has caused reduced river flow in the Mara River. This is an example of:',
   o:['Desertification','Impact of deforestation on water catchment areas','Soil erosion only','Industrial climate change'],
   a:1,ex:"Mau Forest is Kenya's largest water tower. Deforestation reduces its water retention, lowering river flows.",
   ctx:"KCSE 2023. Kenya's 5 Water Towers: Mau, Mt. Kenya, Aberdares, Mt. Elgon, Cherangani Hills."},
]},
cre:{'Form 1':[
  {tp:'Creation',st:'KCSE 2019 P1 Q1',df:'Recall',
   q:'According to Genesis 1, on which day did God create human beings?',
   o:['Day 4','Day 5','Day 6','Day 7'],
   a:2,ex:'Genesis 1:26-27: God created humans on the sixth day. He rested on the seventh.',
   ctx:'KCSE CRE P1 always begins with creation. Know all 7 days of creation in order.'},
],'Form 2':[
  {tp:'Life of Jesus',st:'KCSE 2021 P1 Q4',df:'Application',
   q:"What was the significance of Jesus's baptism by John?",
   o:["His first public miracle","God publicly identified Jesus as His Son and affirmed His mission","Required by Jewish law","Jesus needed to repent"],
   a:1,ex:"At baptism (Matthew 3:13-17), God declared: 'This is my Son, whom I love.' Public endorsement of Jesus's ministry.",
   ctx:"KCSE 2021 CRE. Jesus's baptism, temptation, and transfiguration are three key identity events — all tested."},
],'Form 3':[
  {tp:'Early Church',st:'KCSE 2022 P1 Q7',df:'Analysis',
   q:'Which event marks the beginning of the Christian Church according to Acts?',
   o:["Jesus's resurrection","Jesus's ascension","Day of Pentecost (Acts 2)","Jesus's baptism"],
   a:2,ex:"Pentecost (Acts 2) — the Holy Spirit descended and Peter preached — marks the Church's birth. 3,000 people were baptised.",
   ctx:"KCSE 2022 CRE. Acts 1-15 are core Form 3 content. Know Paul's missionary journeys."},
],'Form 4':[
  {tp:'Christian Ethics',st:'KCSE 2023 P1 Q9',df:'Application',
   q:"A Christian teenager is pressured by friends to abuse drugs. What should guide their response?",
   o:['Follow friends to maintain relationships','The body is a temple of the Holy Spirit (1 Cor 6:19-20)','No specific Christian guidance exists','Only adults need to follow Christian ethics'],
   a:1,ex:'1 Corinthians 6:19-20: the body is a temple of the Holy Spirit. Christians should not abuse their bodies.',
   ctx:'KCSE 2023 CRE. Form 4 Ethics covers: drugs, sexuality, HIV/AIDS, environment. Always link to specific Bible verses.'},
]},
bst:{'Form 1':[
  {tp:'Introduction to Business',st:'KCSE 2018 P1 Q1',df:'Recall',
   q:'What is the PRIMARY aim of a business enterprise?',
   o:['Employ as many workers as possible','Make profit and satisfy customer needs','Pay the highest taxes','Produce the most goods regardless of demand'],
   a:1,ex:'The primary aim of a business is to make profit by satisfying customer needs. Without profit it cannot sustain itself.',
   ctx:'KCSE 2018 BST P1. Basic business concepts are Form 1 foundations — business, trade, commerce, production.'},
],'Form 2':[
  {tp:'Forms of Business',st:'KCSE 2021 P1 Q5',df:'Application',
   q:'Wanjiku and Otieno agree to run a maize flour business together and share profits equally. This is a:',
   o:['Sole proprietorship','Partnership','Public limited company','Cooperative society'],
   a:1,ex:'A partnership is formed when 2+ people agree to run a business and share profits/losses, governed by the Partnership Act.',
   ctx:'KCSE 2021. Many Kenyan family businesses start as partnerships. Know all forms of business ownership.'},
],'Form 3':[
  {tp:'Banking & Finance',st:'KCSE 2022 P1 Q8',df:'Application',
   q:'Akinyi deposits KES 50,000 at 8% per annum simple interest for 2 years. How much interest will she earn?',
   o:['KES 4,000','KES 8,000','KES 16,000','KES 58,000'],
   a:1,ex:'SI = PRT/100 = 50,000 × 8 × 2 / 100 = KES 8,000.',
   ctx:'KCSE 2022. Simple and compound interest are tested every year. Equity Bank and KCB are Kenya context.'},
],'Form 4':[
  {tp:'International Trade',st:'KCSE 2023 P1 Q11',df:'Analysis',
   q:'The difference in value between Kenya\'s exports and imports is called:',
   o:['Trade deficit','Balance of trade','Trade surplus','Current account'],
   a:1,ex:"Balance of trade = value of exports minus value of imports. If imports > exports it is a trade deficit.",
   ctx:"KCSE 2023. Kenya's top exports: tea, coffee, horticulture. Top imports: petroleum, machinery, vehicles."},
]},
};
// ── TIMETABLES ───────────────────────────────────────────────────
const TT={
  National:[
    {day:'Monday',ss:[{t:'05:00',s:'Morning Prep',tp:'Personal revision',d:60,c:'#6C757D',p:'high'},{t:'06:30',s:'Biology',tp:'Photosynthesis & cell biology',d:80,c:'#217A4B',p:'high'},{t:'16:00',s:'Mathematics',tp:'Quadratic equations',d:60,c:'#E8A020',p:'high'},{t:'20:00',s:'Evening Prep',tp:'Chemistry revision',d:90,c:'#1B6CA8',p:'medium'}]},
    {day:'Tuesday',ss:[{t:'05:00',s:'Morning Prep',tp:'Biology past papers',d:60,c:'#6C757D',p:'high'},{t:'06:30',s:'Chemistry',tp:'Chemical bonding',d:80,c:'#1B6CA8',p:'high'},{t:'16:00',s:'English',tp:'Comprehension & essay',d:60,c:'#0F6E56',p:'medium'},{t:'20:00',s:'Evening Prep',tp:'Maths trigonometry',d:90,c:'#E8A020',p:'high'}]},
    {day:'Wednesday',ss:[{t:'05:00',s:'Morning Prep',tp:'Geography notes',d:60,c:'#6C757D',p:'medium'},{t:'06:30',s:'Geography',tp:'Climate zones in Africa',d:80,c:'#534AB7',p:'medium'},{t:'16:00',s:'Kiswahili',tp:'Insha na ufahamu',d:60,c:'#993C1D',p:'medium'},{t:'20:00',s:'Evening Prep',tp:'Biology ecology',d:90,c:'#217A4B',p:'high'}]},
    {day:'Thursday',ss:[{t:'05:00',s:'Morning Prep',tp:'Chemistry past papers',d:60,c:'#6C757D',p:'high'},{t:'06:30',s:'Mathematics',tp:'Trigonometry',d:80,c:'#E8A020',p:'high'},{t:'16:00',s:'Biology',tp:'Ecology & food webs',d:60,c:'#217A4B',p:'high'},{t:'20:00',s:'Evening Prep',tp:'English comprehension',d:90,c:'#0F6E56',p:'medium'}]},
    {day:'Friday',ss:[{t:'05:00',s:'Morning Prep',tp:'Kiswahili fasihi',d:60,c:'#6C757D',p:'medium'},{t:'06:30',s:'Chemistry',tp:'Acids and bases',d:80,c:'#1B6CA8',p:'high'},{t:'16:00',s:'Mathematics',tp:'Mock exam — full paper',d:90,c:'#E8A020',p:'high'}]},
    {day:'Saturday',ss:[{t:'06:00',s:'Biology',tp:'KCSE past paper 2022',d:120,c:'#217A4B',p:'high'},{t:'09:00',s:'Chemistry',tp:'KCSE past paper 2022',d:120,c:'#1B6CA8',p:'high'},{t:'14:00',s:'Mathematics',tp:'Problem solving session',d:90,c:'#E8A020',p:'medium'}]},
    {day:'Sunday',ss:[{t:'08:00',s:'Rest & Chapel',tp:'Personal time',d:120,c:'#6C757D',p:'low'},{t:'14:00',s:'All Subjects',tp:'Weekly review with teacher',d:60,c:'#534AB7',p:'medium'},{t:'20:00',s:'Evening Prep',tp:'Plan next week',d:60,c:'#6C757D',p:'low'}]},
  ],
  'Extra-County':[
    {day:'Monday',ss:[{t:'06:30',s:'Biology',tp:'Cell structure & photosynthesis',d:80,c:'#217A4B',p:'high'},{t:'15:30',s:'Mathematics',tp:'Algebra & quadratics',d:60,c:'#E8A020',p:'high'}]},
    {day:'Tuesday',ss:[{t:'06:30',s:'Chemistry',tp:'Chemical bonding',d:80,c:'#1B6CA8',p:'high'},{t:'15:30',s:'English',tp:'Comprehension practice',d:60,c:'#0F6E56',p:'medium'}]},
    {day:'Wednesday',ss:[{t:'06:30',s:'Geography',tp:'Climate & weather Kenya',d:80,c:'#534AB7',p:'medium'},{t:'15:30',s:'Kiswahili',tp:'Insha na fasihi',d:60,c:'#993C1D',p:'medium'}]},
    {day:'Thursday',ss:[{t:'06:30',s:'Mathematics',tp:'Trigonometry',d:80,c:'#E8A020',p:'high'},{t:'15:30',s:'Biology',tp:'Ecology & ecosystems',d:60,c:'#217A4B',p:'high'}]},
    {day:'Friday',ss:[{t:'06:30',s:'Chemistry',tp:'Acids, bases & salts',d:80,c:'#1B6CA8',p:'high'},{t:'15:30',s:'Mathematics',tp:'Full mock revision',d:90,c:'#E8A020',p:'high'}]},
    {day:'Saturday',ss:[{t:'08:00',s:'All Subjects',tp:'Past paper practice',d:120,c:'#534AB7',p:'high'},{t:'11:00',s:'Mathematics',tp:'Teacher-led session',d:60,c:'#E8A020',p:'medium'}]},
    {day:'Sunday',ss:[{t:'15:00',s:'All Subjects',tp:'Weekly review & rest',d:45,c:'#6C757D',p:'low'}]},
  ],
  County:[
    {day:'Monday',ss:[{t:'07:00',s:'Biology',tp:'Photosynthesis — maize & tea examples',d:60,c:'#217A4B',p:'high'},{t:'16:00',s:'Mathematics',tp:'Algebra basics',d:45,c:'#E8A020',p:'medium'}]},
    {day:'Tuesday',ss:[{t:'07:00',s:'Chemistry',tp:'Chemical bonds',d:60,c:'#1B6CA8',p:'high'},{t:'16:00',s:'Kiswahili',tp:'Insha na ufahamu',d:45,c:'#993C1D',p:'medium'}]},
    {day:'Wednesday',ss:[{t:'07:00',s:'Geography',tp:'Kenya climate zones',d:60,c:'#534AB7',p:'medium'},{t:'16:00',s:'Biology',tp:'Ecology & food chains',d:45,c:'#217A4B',p:'high'}]},
    {day:'Thursday',ss:[{t:'07:00',s:'Mathematics',tp:'Trigonometry',d:60,c:'#E8A020',p:'high'},{t:'16:00',s:'English',tp:'Comprehension',d:45,c:'#0F6E56',p:'medium'}]},
    {day:'Friday',ss:[{t:'07:00',s:'Chemistry',tp:'Acids and bases',d:60,c:'#1B6CA8',p:'medium'},{t:'16:00',s:'All Subjects',tp:'Mock quiz session',d:60,c:'#534AB7',p:'high'}]},
    {day:'Saturday',ss:[{t:'08:00',s:'Mathematics',tp:'Past paper practice',d:90,c:'#E8A020',p:'high'}]},
    {day:'Sunday',ss:[{t:'14:00',s:'All Subjects',tp:'Harambee study group',d:60,c:'#217A4B',p:'medium'}]},
  ],
};
function getTT(sid){const s=SCHOOLS.find(x=>x.id===sid);return TT[s?.type]||TT.County;}

// ── LOCAL STORAGE ────────────────────────────────────────────────
const DB='edusavvy_users',SK='edusavvy_session';
const getUsers=()=>{try{return JSON.parse(localStorage.getItem(DB)||'{}')}catch{return{}}};
const saveUsers=u=>localStorage.setItem(DB,JSON.stringify(u));
const getSess=()=>{try{return JSON.parse(localStorage.getItem(SK)||'null')}catch{return null}};
const setSess=u=>localStorage.setItem(SK,JSON.stringify(u));
const clearSess=()=>localStorage.removeItem(SK);
const getUser=()=>getSess();
function recordQuiz(subName,score,total){
  const sess=getSess();if(!sess||sess.isGuest)return;
  const users=getUsers();const u=users[sess.email];if(!u)return;
  if(!u.history)u.history=[];
  u.history.unshift({s:subName,sc:score,tot:total,date:new Date().toLocaleDateString('en-GB')});
  if(u.history.length>20)u.history=u.history.slice(0,20);
  const r=u.history.slice(0,10);
  u.quizAvg=Math.round(r.reduce((a,q)=>a+(q.sc/q.tot*100),0)/r.length);
  u.streak=(u.streak||0)+1;u.points=(u.points||0)+Math.round((score/total)*100);
  u.done=Math.min((u.done||0)+1,22);
  saveUsers(users);setSess({...sess,...u});
}
function updateSP(sid,pct){
  const sess=getSess();if(!sess||sess.isGuest)return;
  const users=getUsers();const u=users[sess.email];if(!u)return;
  if(!u.sp)u.sp={};u.sp[sid]=pct;saveUsers(users);setSess({...sess,...u});
}
function initUser(base){return{...base,quizAvg:0,streak:0,points:0,done:0,total:22,history:[],sp:{}};}
// ── APP STATE ────────────────────────────────────────────────────
let pg='login',authTab='login',step=1;
let af={name:'',email:'',password:'',grade:'Form 3',schoolId:'',customSchool:'',role:'student'},ae={};
let qs={sub:'bio',fl:'Form 3',phase:'intro',idx:0,ans:{},sel:null,rev:false,score:0};
let msgs=null,cLoad=false,gTriggered=false,gBrief=null;
let ttView='week',fwKey='aim',killOn=false,smsMode=false;
let menuOpen=false,profileOpen=false,pEdit={};
let alogLines=[],alogTimer=null;
const ALOG=[
  {t:'07:00:01',type:'info',m:'Scout agent started — learner session initialised'},
  {t:'07:00:02',type:'scout',m:'TRAIL memory loaded: quiz history, KNEC calendar, KMD planting data'},
  {t:'07:00:03',type:'info',m:'Distress detector armed — monitoring 18 trigger phrases'},
  {t:'07:00:04',type:'info',m:'OASIS check: all data routing to AWS af-south-1 (Cape Town) ✓'},
  {t:'07:02:00',type:'scout',m:'SMS sent (1/3 daily limit): morning nudge — Biology photosynthesis'},
  {t:'07:15:44',type:'scout',m:'Learner reply received — intent: study request (photosynthesis)'},
  {t:'07:15:45',type:'scout',m:'Distress check: NEGATIVE — routing to curriculum (temp 0.2)'},
  {t:'07:15:46',type:'scout',m:'KICD lookup: Unit 4 Nutrition in Plants — 3 East African examples loaded'},
  {t:'07:16:01',type:'scout',m:'Response sent — KICD-aligned, East African context verified'},
  {t:'08:30:00',type:'info',m:'GUARD audit: 0 dignity violations in last 24h ✓'},
  {t:'08:30:01',type:'guardian',m:'Guardian standby — no distress handoffs in current session'},
  {t:'09:15:23',type:'info',m:'CYCLE engine: next analysis Sunday 02:00 EAT — human approval required'},
];
function initMsgs(){
  const u=getUser(),first=u?u.name.split(' ')[0]:'there';
  msgs=[{id:0,role:'bot',agent:'scout',text:`Habari ${first}! 👋 Mimi ni Scout — msaidizi wako wa masomo.\n\nAsk me about:\n• Photosynthesis using maize or Lake Victoria examples\n• Your KCSE revision plan\n• Any 8-4-4 subject\n• Your school timetable`}];
  gTriggered=false;gBrief=null;
}
const getInits=n=>n.trim().split(' ').map(w=>w[0].toUpperCase()).slice(0,2).join('');
function getAvCol(n){const cs=['#1B6CA8','#217A4B','#534AB7','#0F6E56','#993C1D','#E8A020'];let h=0;for(let i=0;i<n.length;i++)h=n.charCodeAt(i)+((h<<5)-h);return cs[Math.abs(h)%cs.length];}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
// ── ROUTER ───────────────────────────────────────────────────────
function nav(page,params={}){
  const u=getUser();
  if(!u&&page!=='login'){pg='login';render();return;}
  pg=page;menuOpen=false;
  if(params.sub)qs.sub=params.sub;
  if(page==='quiz'){qs={sub:qs.sub,fl:getUser()?.grade||'Form 3',phase:'intro',idx:0,ans:{},sel:null,rev:false,score:0};}
  if(page==='scout'&&!msgs)initMsgs();
  if(page==='agents'){alogLines=ALOG.slice(0,4);}
  render();window.scrollTo(0,0);
}
// ── RENDER ───────────────────────────────────────────────────────
function render(){
  const u=getUser();
  const navEl=document.getElementById('nav');
  const app=document.getElementById('app');
  if(!u||pg==='login'){navEl.style.display='none';app.innerHTML=renderAuth();return;}
  navEl.style.display='flex';renderNav(u);
  const pm={dashboard:pgDash,quiz:pgQuiz,timetable:pgTT,scout:pgScout,agents:pgAgents};
  app.innerHTML=(pm[pg]||pgDash)(u);
  if(profileOpen)app.innerHTML+=renderModal(u);
  if(pg==='agents')tickLog();
}
function renderNav(u){
  const lbls={dashboard:'Dashboard',quiz:'Quiz',timetable:'Timetable',scout:'Scout AI',agents:'Agent System'};
  document.getElementById('navLinks').innerHTML=['dashboard','quiz','timetable','scout','agents']
    .map(p=>`<button class="nl${pg===p?' active':''}" onclick="nav('${p}')">${lbls[p]}</button>`).join('');
  document.getElementById('navNm').textContent=u.name.split(' ')[0];
  document.getElementById('avInit').textContent=u.initials||getInits(u.name);
  document.getElementById('avBtn').style.background=u.avCol||'#1B6CA8';
  document.getElementById('mName').textContent=u.name;
  document.getElementById('mSchool').textContent=u.schoolName||'';
  document.getElementById('mGrade').textContent=(u.role==='teacher'?'Teacher — ':'')+( u.grade||'');
  document.getElementById('avMenu').style.display=menuOpen?'block':'none';
}
// ── AUTH ─────────────────────────────────────────────────────────
function renderAuth(){
  const schoolOpts=SCHOOLS.map(s=>`<div class="sopt${af.schoolId===s.id?' sel':''}" onclick="selSchool('${s.id}')"><span class="sn">${s.name}</span><span class="sl">${s.loc}</span><span class="st">${s.type}</span></div>`).join('');
  if(authTab==='login')return`
  <div class="auth-bg"><div class="auth-card fade">
    <div class="auth-logo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#E8A020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Edu<span>Savvy</span></div>
    <p class="sm cg" style="margin-top:.15rem;margin-bottom:.1rem">AI-powered learning for Kenyan students</p>
    <div class="auth-tabs"><button class="auth-tab active">Sign in</button><button class="auth-tab" onclick="switchTab('signup')">Create account</button></div>
    ${ae.gen?`<div class="alert ad" style="margin-bottom:.8rem">${ae.gen}</div>`:''}
    <div class="fg"><label>Email address</label><input class="fi${ae.email?' err':''}" type="email" placeholder="you@example.com" value="${af.email}" oninput="af.email=this.value" onkeydown="if(event.key==='Enter')doLogin()"/>${ae.email?`<span class="em">${ae.email}</span>`:''}</div>
    <div class="fg"><label>Password</label><input class="fi${ae.pw?' err':''}" type="password" placeholder="Your password" oninput="af.password=this.value" onkeydown="if(event.key==='Enter')doLogin()"/>${ae.pw?`<span class="em">${ae.pw}</span>`:''}</div>
    <button class="btn bp bfull" style="margin-top:.2rem" onclick="doLogin()">Sign in →</button>
    <p class="sm" style="text-align:center;margin-top:.85rem;color:var(--g600)">No account? <a href="#" onclick="switchTab('signup');return false">Create one free</a></p>
    <div style="position:relative;text-align:center;margin:.75rem 0"><hr style="border-color:var(--border)"/><span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:0 .5rem;font-size:.7rem;color:var(--g400)">or</span></div>
    <button class="btn bg_ bfull" style="font-size:.84rem" onclick="guestLogin()">👁 Browse as Guest — no account needed</button>
    <div class="alert ai" style="margin-top:.85rem;font-size:.73rem">🔒 Data stored in Kenya (AWS Africa — Cape Town) under Kenya DPA 2019.</div>
  </div></div>`;
  if(step===1)return`
  <div class="auth-bg"><div class="auth-card fade">
    <div class="auth-logo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#E8A020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Edu<span>Savvy</span></div>
    <p class="sm cg" style="margin-top:.15rem;margin-bottom:.1rem">Create your free learner account</p>
    <div class="auth-tabs"><button class="auth-tab" onclick="switchTab('login')">Sign in</button><button class="auth-tab active">Create account</button></div>
    <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:1rem">
      <div style="width:23px;height:23px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700">1</div>
      <span class="sm fw7">Your details</span>
      <div style="flex:1;height:2px;background:var(--border);border-radius:2px"></div>
      <div style="width:23px;height:23px;border-radius:50%;background:var(--g200);color:var(--g600);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700">2</div>
      <span class="sm cg">Select school</span>
    </div>
    ${ae.gen?`<div class="alert ad" style="margin-bottom:.8rem">${ae.gen}</div>`:''}
    <div class="fg"><label>Full name</label><input class="fi${ae.name?' err':''}" type="text" placeholder="e.g. Akinyi Odhiambo" value="${af.name}" oninput="af.name=this.value"/>${ae.name?`<span class="em">${ae.name}</span>`:''}</div>
    <div class="fg"><label>Email address</label><input class="fi${ae.email?' err':''}" type="email" placeholder="you@example.com" value="${af.email}" oninput="af.email=this.value"/>${ae.email?`<span class="em">${ae.email}</span>`:''}</div>
    <div class="fg"><label>Password</label><input class="fi${ae.pw?' err':''}" type="password" placeholder="Min. 6 characters" oninput="af.password=this.value"/>${ae.pw?`<span class="em">${ae.pw}</span>`:''}</div>
    <div class="fg"><label>Form / Year</label><select class="fi" onchange="af.grade=this.value">${GRADES.map(g=>`<option value="${g}"${af.grade===g?' selected':''}>${g}</option>`).join('')}</select></div>
    <div class="fg"><label>I am a</label>
      <div style="display:flex;gap:.4rem">
        <button class="role-btn${!af.role||af.role==='student'?' sel':''}" onclick="af.role='student';render()">🎒 Student</button>
        <button class="role-btn${af.role==='teacher'?' sel':''}" onclick="af.role='teacher';render()">👩‍🏫 Teacher</button>
      </div>
    </div>
    <button class="btn bp bfull" style="margin-top:.2rem" onclick="goStep2()">Next: Select your school →</button>
    <p class="sm" style="text-align:center;margin-top:.8rem;color:var(--g600)">Have an account? <a href="#" onclick="switchTab('login');return false">Sign in</a></p>
  </div></div>`;
  return`
  <div class="auth-bg"><div class="auth-card fade">
    <div class="auth-logo"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#E8A020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Edu<span>Savvy</span></div>
    <p class="sm cg" style="margin-top:.15rem;margin-bottom:.1rem">Step 2 — ${af.role==='teacher'?'Your school':'Select your school'}</p>
    <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:1rem">
      <div style="width:23px;height:23px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.68rem">✓</div>
      <span class="sm fw7" style="color:var(--green)">Your details</span>
      <div style="flex:1;height:2px;background:var(--blue);border-radius:2px"></div>
      <div style="width:23px;height:23px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700">2</div>
      <span class="sm fw7">${af.role==='teacher'?'Your school':'Select school'}</span>
    </div>
    <p class="sm" style="color:var(--g600);margin-bottom:.65rem">${af.role==='teacher'?'Type your school name or select from the list below.':'Your school determines your personalised study timetable. Quizzes are the same across all schools.'}</p>
    ${af.role==='teacher'?`<div class="fg"><label>Type school name directly</label><input class="fi" type="text" placeholder="e.g. Kisumu Day High School" value="${af.customSchool||''}" oninput="af.customSchool=this.value;af.schoolId='custom'"/></div>`:''}
    ${ae.school?`<div class="alert ad" style="margin-bottom:.65rem">${ae.school}</div>`:''}
    <div class="school-grid">${schoolOpts}</div>
    <p class="xs cg" style="margin-top:.35rem">Scroll to see all ${SCHOOLS.length}+ schools</p>
    <div style="display:flex;gap:.4rem;margin-top:.9rem">
      <button class="btn bg_" style="flex:1" onclick="step=1;ae={};render()">← Back</button>
      <button class="btn bp" style="flex:2" onclick="doSignup()">Create account →</button>
    </div>
  </div></div>`;
}
function switchTab(t){authTab=t;step=1;ae={};render();}
function selSchool(id){af.schoolId=id;render();}
function guestLogin(){
  const g={name:'Guest User',email:'guest@edusavvy.ke',password:'',grade:'Form 3',
    schoolId:'',schoolName:'Browse as Guest',schoolCounty:'Kenya',schoolType:'County',
    schoolColor:'#6C757D',initials:'GU',avCol:'#6C757D',role:'guest',isGuest:true,
    joinedAt:new Date().toLocaleDateString('en-GB'),quizAvg:0,streak:0,points:0,done:0,total:22,history:[],sp:{}};
  setSess(g);initMsgs();nav('dashboard');
}
function doLogin(){
  ae={};
  if(!af.email.trim()||!/\S+@\S+\.\S+/.test(af.email))ae.email='Enter a valid email';
  if(!af.password)ae.pw='Password is required';
  if(Object.keys(ae).length){render();return;}
  const users=getUsers();const u=users[af.email.toLowerCase()];
  if(!u||u.password!==af.password){ae.gen='Incorrect email or password';render();return;}
  setSess(u);initMsgs();nav('dashboard');
}
function goStep2(){
  ae={};
  if(!af.name.trim()||af.name.trim().split(' ').length<2)ae.name='Enter your full name (first and last)';
  if(!af.email.trim()||!/\S+@\S+\.\S+/.test(af.email))ae.email='Enter a valid email';
  if(!af.password||af.password.length<6)ae.pw='Password must be at least 6 characters';
  if(Object.keys(ae).length){render();return;}
  const users=getUsers();
  if(users[af.email.toLowerCase()]){ae.email='An account with this email already exists';render();return;}
  step=2;ae={};render();
}
function doSignup(){
  ae={};
  const isCustom=af.role==='teacher'&&af.customSchool&&af.customSchool.trim();
  if(!af.schoolId&&!isCustom){ae.school='Please select your school';render();return;}
  const users=getUsers();const email=af.email.toLowerCase();
  const sch=SCHOOLS.find(s=>s.id===af.schoolId);
  const newU=initUser({
    name:af.name.trim(),email,password:af.password,grade:af.grade,
    role:af.role||'student',
    schoolId:isCustom?'custom':af.schoolId,
    schoolName:isCustom?af.customSchool.trim():sch?.name||'',
    schoolCounty:isCustom?'Kenya':sch?.county||'',
    schoolType:isCustom?'Custom':sch?.type||'County',
    schoolColor:isCustom?'#6C757D':sch?.color||'#1B6CA8',
    initials:getInits(af.name),avCol:getAvCol(af.name),
    joinedAt:new Date().toLocaleDateString('en-GB'),
  });
  users[email]=newU;saveUsers(users);setSess(newU);initMsgs();nav('dashboard');
}
function logout(){
  clearSess();msgs=null;pg='login';
  af={name:'',email:'',password:'',grade:'Form 3',schoolId:'',customSchool:'',role:'student'};ae={};
  authTab='login';step=1;
  document.getElementById('nav').style.display='none';render();
}
// ── PROFILE MODAL ─────────────────────────────────────────────────
function openProfile(){const u=getUser();pEdit={name:u.name,grade:u.grade,schoolId:u.schoolId,customSchool:u.schoolName||''};profileOpen=true;render();}
function closeProfile(){profileOpen=false;render();}
function saveProfile(){
  if(!pEdit.name.trim()||pEdit.name.trim().split(' ').length<2){alert('Enter your full name (first and last)');return;}
  const sess=getSess();const users=getUsers();
  const isCustom=pEdit.schoolId==='custom'&&pEdit.customSchool;
  const sch=SCHOOLS.find(s=>s.id===pEdit.schoolId);
  const upd={...users[sess.email],name:pEdit.name.trim(),grade:pEdit.grade,
    schoolId:isCustom?'custom':pEdit.schoolId,
    schoolName:isCustom?pEdit.customSchool:sch?.name||'',
    schoolCounty:isCustom?'Kenya':sch?.county||'',
    schoolType:isCustom?'Custom':sch?.type||'County',
    schoolColor:isCustom?'#6C757D':sch?.color||'#1B6CA8',
    initials:getInits(pEdit.name),avCol:getAvCol(pEdit.name)};
  users[sess.email]=upd;saveUsers(users);setSess(upd);profileOpen=false;render();
}
function renderModal(u){
  const schoolOpts=SCHOOLS.map(s=>`<div class="sopt${(pEdit.schoolId||u.schoolId)===s.id?' sel':''}" onclick="pEdit.schoolId='${s.id}';document.querySelectorAll('.modal .sopt').forEach(e=>e.classList.remove('sel'));this.classList.add('sel')"><span class="sn">${s.name}</span><span class="sl">${s.loc}</span><span class="st">${s.type}</span></div>`).join('');
  return`<div class="modal-bg" onclick="closeProfile()"><div class="modal fade" onclick="event.stopPropagation()">
    <div style="display:flex;align-items:center;gap:.65rem;margin-bottom:1rem">
      <div style="width:40px;height:40px;border-radius:50%;background:${u.avCol||'#1B6CA8'};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.95rem">${u.initials}</div>
      <div><h3>Edit profile</h3><p class="sm">${u.email}</p></div>
      <button class="btn bg_ bsm ml-a" onclick="closeProfile()">✕</button>
    </div>
    <div class="fg"><label>Full name</label><input class="fi" type="text" value="${pEdit.name||''}" oninput="pEdit.name=this.value" placeholder="First and last name"/></div>
    <div class="fg"><label>Form / Year</label><select class="fi" onchange="pEdit.grade=this.value">${GRADES.map(g=>`<option value="${g}"${(pEdit.grade||u.grade)===g?' selected':''}>${g}</option>`).join('')}</select></div>
    ${u.role==='teacher'?`<div class="fg"><label>Type school name directly</label><input class="fi" type="text" value="${pEdit.customSchool||''}" placeholder="e.g. Kisumu Day High School" oninput="pEdit.customSchool=this.value;pEdit.schoolId='custom'"/></div>`:''}
    <div class="fg"><label>School <span class="sm cg">(updates your timetable)</span></label>
      <div class="school-grid">${schoolOpts}</div>
    </div>
    <div style="display:flex;gap:.4rem;margin-top:1rem">
      <button class="btn bg_" style="flex:1" onclick="closeProfile()">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveProfile()">Save changes</button>
    </div>
    <div style="margin-top:.9rem;padding-top:.8rem;border-top:1px solid var(--border)">
      <p class="xs cg" style="margin-bottom:.28rem">Account info</p>
      <div style="display:flex;gap:.3rem;flex-wrap:wrap">
        <span class="badge bgr">Joined ${u.joinedAt||'2025'}</span>
        <span class="badge bb">${u.schoolType||'School'}</span>
        <span class="badge bg2">DPA 2019 ✓</span>
        ${u.role==='teacher'?'<span class="badge ba2">Teacher</span>':''}
      </div>
    </div>
  </div></div>`;
}
function toggleMenu(){menuOpen=!menuOpen;renderNav(getUser());}
function closeMenu(){menuOpen=false;renderNav(getUser());}
document.addEventListener('click',e=>{
  const btn=document.getElementById('avBtn');
  if(menuOpen&&btn&&!btn.contains(e.target)){menuOpen=false;const u=getUser();if(u)renderNav(u);}
});
// ── DASHBOARD ────────────────────────────────────────────────────
function pgDash(u){
  const pct=Math.round(((u.done||0)/22)*100);
  const sch=SCHOOLS.find(s=>s.id===u.schoolId)||{name:u.schoolName||'',color:u.schoolColor||'#1B6CA8'};
  const hist=u.history||[];
  const isTeacher=u.role==='teacher';
  const guestBanner=u.isGuest?`<div class="alert aw" style="margin-bottom:1rem">👁 <strong>Browsing as Guest.</strong> <a href="#" onclick="logout()">Sign in</a> or <a href="#" onclick="logout();authTab='signup';step=1;render()">create a free account</a> to save your progress and unlock your personalised timetable.</div>`:'';
  const teacherBanner=isTeacher?`<div class="alert ai" style="margin-bottom:1rem">👩‍🏫 <strong>Teacher view.</strong> You are logged in as a teacher at <strong>${u.schoolName||'your school'}</strong>. Student quizzes and timetable templates are accessible from the menu.</div>`:'';
  return`
  <div class="ph"><div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.9rem">
    <div>
      <div style="display:flex;align-items:center;gap:.35rem;margin-bottom:.2rem;flex-wrap:wrap">
        <span class="badge" style="background:${(sch.color||'#1B6CA8')}22;color:${sch.color||'#1B6CA8'};border:1px solid ${sch.color||'#1B6CA8'}44">${sch.name||u.schoolName||'School'}</span>
        <span class="badge bgr">${u.grade}</span>
        <span class="badge bgr">${u.schoolCounty||'Kenya'}</span>
        ${isTeacher?'<span class="badge ba2">Teacher</span>':''}
      </div>
      <h1>Habari, ${u.name.split(' ')[0]}! ${isTeacher?'👩‍🏫':'👋'}</h1>
      <p style="margin-top:.28rem;color:rgba(255,255,255,.8)">${u.streak||0}-day streak · ${(u.points||0).toLocaleString()} pts · KCSE Mock — Oct 2025</p>
    </div>
    <div style="display:flex;gap:.42rem;flex-wrap:wrap">
      <button class="btn ba" onclick="nav('quiz')">Start Quiz</button>
      <button class="btn bo" style="border-color:rgba(255,255,255,.4);color:#fff" onclick="nav('scout')">Ask Scout AI</button>
    </div>
  </div></div>
  <div class="container sp">
    ${guestBanner}${teacherBanner}
    <div class="g4" style="margin-bottom:1.35rem">
      ${[{l:'Progress',v:`${pct}%`,s:`${u.done||0}/22 topics`},{l:'Quiz avg',v:`${u.quizAvg||0}%`,s:'Last 10 quizzes'},{l:'Streak',v:`${u.streak||0} days`,s:'Keep going!'},{l:'Points',v:(u.points||0).toLocaleString(),s:'This term'}]
        .map(k=>`<div class="sc"><div class="lbl">${k.l}</div><div class="val">${k.v}</div><div class="sub">${k.s}</div></div>`).join('')}
    </div>
    <div class="card" style="margin-bottom:1.25rem">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.6rem">
        <h3>KCSE Preparation Progress</h3><span class="badge bb">${pct}% complete</span>
      </div>
      <div class="pb"><div class="pbf" style="width:${pct}%"></div></div>
      <p class="sm" style="margin-top:.38rem">${22-(u.done||0)} topics remaining · Take quizzes to update your progress</p>
    </div>
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:1.1rem">
      <div>
        <h2 style="margin-bottom:.7rem">Subjects <span class="sm cg">(8-4-4 curriculum)</span></h2>
        <div class="g2">
          ${SUBJECTS.map(s=>{const sp=(u.sp||{})[s.id]||0;return`
          <div class="card" style="cursor:pointer;transition:transform .15s,box-shadow .15s" onclick="nav('quiz',{sub:'${s.id}'})"
            onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 18px rgba(0,0,0,.1)'"
            onmouseleave="this.style.transform='';this.style.boxShadow=''">
            <div style="display:flex;align-items:center;gap:.42rem;margin-bottom:.6rem">
              <span style="font-size:1.25rem">${s.icon}</span>
              <div><div class="fw7 fh" style="font-size:.84rem">${s.name}</div>
                <div class="xs cg">${Object.values(QB[s.id]||{}).flat().length} Qs · F1-F4</div>
              </div>
              <span class="badge ml-a" style="background:${s.light};color:${s.color}">${sp}%</span>
            </div>
            <div class="pb"><div class="pbf" style="width:${sp}%;background:${s.color}"></div></div>
          </div>`;}).join('')}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.88rem">
        <div class="card" style="border-top:3px solid var(--blue)">
          <div style="display:flex;align-items:center;gap:.42rem;margin-bottom:.6rem">
            <div style="width:24px;height:24px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
            </div>
            <span class="fw7 sm">Scout AI nudge</span><span class="badge bg2 ml-a">Live</span>
          </div>
          <p class="sm" style="margin-bottom:.6rem">Hi ${u.name.split(' ')[0]}! Quiz average: ${u.quizAvg||0}%. ${(u.quizAvg||0)<70?'Let\'s boost it — Biology photosynthesis is a great place to start.':'Strong work! Maintain your streak.'}</p>
          <button class="btn bp" style="font-size:.75rem;padding:.36rem .78rem" onclick="nav('quiz',{sub:'bio'})">Practice now →</button>
        </div>
        <div class="alert aw">🌧 <strong>Long rains (Mar–May):</strong><br><span class="sm">Morning sessions are shorter. School fee months: Jan, May, Sept.</span></div>
        <div class="card">
          <h3 style="margin-bottom:.6rem">Recent quizzes</h3>
          ${hist.length===0?`<p class="sm cg">No quizzes yet — take your first quiz to see results here!</p>`
            :hist.slice(0,5).map(q=>`<div style="display:flex;align-items:center;gap:.38rem;font-size:.75rem;margin-bottom:.36rem">
              <span class="fw7" style="flex:1">${q.s}</span>
              <span class="cg">${q.date}</span>
              <span class="badge ${q.sc/q.tot>=.8?'bg2':q.sc/q.tot>=.6?'bb':'ba2'}">${q.sc}/${q.tot}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="alert ai" style="margin-top:1.35rem;font-size:.74rem">🔒 <strong>Data sovereignty:</strong> Your learning data is stored in Kenya (AWS Africa — Cape Town) under the Kenya Data Protection Act 2019.</div>
  </div>`;
}
// ── QUIZ ─────────────────────────────────────────────────────────
function pgQuiz(u){
  const sub=SUBJECTS.find(s=>s.id===qs.sub)||SUBJECTS[0];
  const fl=qs.fl||u.grade||'Form 3';
  const rawBank=QB[qs.sub]||QB.bio;
  const bank=rawBank[fl]||rawBank['Form 3']||Object.values(rawBank)[0]||[];
  const q=bank[qs.idx];
  const L=['A','B','C','D'];
  const subBtns=SUBJECTS.map(s=>`<button class="btn ${s.id===qs.sub?'ba':'bo'}" style="${s.id!==qs.sub?'border-color:rgba(255,255,255,.4);color:#fff':''}" onclick="qSub('${s.id}')">${s.icon} ${s.name}</button>`).join('');
  const fmBtns=GRADES.map(g=>`<button class="btn ${fl===g?'bp':'bo'}" style="${fl!==g?'border-color:rgba(255,255,255,.4);color:#fff':'font-size:.74rem'}" onclick="qForm('${g}')">${g}</button>`).join('');
  let body='';
  if(qs.phase==='intro'){
    body=`<div class="card" style="text-align:center;padding:1.7rem">
      <div style="font-size:2.6rem;margin-bottom:.42rem">${sub.icon}</div>
      <h2 style="margin-bottom:.35rem">${sub.name} — ${fl}</h2>
      <p class="sm" style="margin-bottom:.4rem">${bank.length} KCSE-based questions · East African contexts · 8-4-4 curriculum</p>
      <div style="display:flex;gap:.35rem;justify-content:center;flex-wrap:wrap;margin:.65rem 0">
        <span class="badge bb">KCSE past papers</span><span class="badge bg2">East African context</span><span class="badge ba2">8-4-4 curriculum</span>
      </div>
      ${bank.length===0?`<div class="alert aw" style="margin:.8rem 0">No questions yet for ${sub.name} ${fl}. Try another form level.</div>`
        :`<button class="btn bp" style="font-size:.92rem;padding:.62rem 1.9rem;margin-top:.42rem" onclick="qStart()">Start Quiz →</button>`}
    </div>`;
  } else if(qs.phase==='quiz'&&q){
    body=`
    <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.95rem">
      <div class="pb" style="flex:1"><div class="pbf" style="width:${Math.round(qs.idx/bank.length*100)}%;background:${sub.color}"></div></div>
      <span class="sm cg" style="white-space:nowrap">${qs.idx+1}/${bank.length}</span>
    </div>
    <div class="card" style="margin-bottom:.85rem">
      <div style="display:flex;gap:.35rem;margin-bottom:.78rem;flex-wrap:wrap">
        <span class="badge" style="background:${sub.light};color:${sub.color}">${q.tp}</span>
        <span class="badge bgr">${q.st}</span>
        <span class="badge bgr ml-a">${q.df}</span>
      </div>
      <p class="fw7" style="font-size:.95rem;color:var(--text);line-height:1.6;margin-bottom:1rem">${q.q}</p>
      <div style="display:flex;flex-direction:column;gap:.42rem">
        ${q.o.map((opt,i)=>{
          let cls='qopt',ls='';
          if(qs.rev){if(i===q.a){cls+=' correct';ls='background:var(--green);color:#fff';}else if(i===qs.sel&&i!==q.a){cls+=' wrong';ls='background:var(--red);color:#fff';}}
          else if(i===qs.sel){cls+=' sel';ls=`background:${sub.color};color:#fff`;}
          return`<button class="${cls}" onclick="qSel(${i})"><span class="qltr" style="${ls}">${L[i]}</span>${opt}</button>`;
        }).join('')}
      </div>
      ${qs.rev?`<div style="margin-top:.88rem">
        <div class="alert ${qs.sel===q.a?'as_':'ad'}" style="margin-bottom:.65rem">${qs.sel===q.a?'✅ Correct! ':'❌ Correct answer: '+L[q.a]+'. '}${q.ex}</div>
        <div class="alert ai sm">🌍 <strong>East African context:</strong> ${q.ctx}</div>
      </div>`:''}
    </div>
    <div style="display:flex;gap:.42rem">
      ${!qs.rev?`<button class="btn bp" ${qs.sel===null?'disabled':''} onclick="qCheck()">Check answer</button>`
        :`<button class="btn bp" onclick="qNext()">${qs.idx<bank.length-1?'Next →':'See results →'}</button>`}
      <button class="btn bg_" onclick="qReset()">Restart</button>
    </div>`;
  } else if(qs.phase==='review'){
    const pct=Math.round(qs.score/bank.length*100);
    const grade=pct>=80?'A':pct>=70?'B+':pct>=60?'B':pct>=50?'C+':'C';
    body=`
    <div class="card" style="text-align:center;border-top:4px solid ${pct>=70?'var(--green)':pct>=50?'var(--amber)':'var(--red)'};margin-bottom:1rem">
      <div style="font-size:2.6rem;margin:.4rem 0">${pct>=70?'🎉':pct>=50?'👍':'💪'}</div>
      <h2>Quiz complete!</h2>
      <div class="fw7 fh" style="font-size:2.2rem;color:${sub.color};margin:.35rem 0">${qs.score}/${bank.length}</div>
      <div class="sm cg" style="margin-bottom:.75rem">${pct}% · Grade ${grade} · ${sub.name} ${fl}</div>
      <div style="display:flex;gap:.35rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem">
        ${pct>=70?'<span class="badge bg2">Strong performance</span>':''}
        ${pct<70&&pct>=50?'<span class="badge ba2">Keep practising</span>':''}
        ${pct<50?'<span class="badge br">Review needed</span>':''}
        <span class="badge bb">KCSE ${fl}</span>
      </div>
      <div style="display:flex;gap:.42rem;justify-content:center">
        <button class="btn bp" onclick="qReset()">Try again</button>
        <button class="btn bo" onclick="nav('scout')">Ask Scout AI</button>
      </div>
    </div>
    <h3 style="margin-bottom:.62rem">Question breakdown</h3>
    ${bank.map((bq,i)=>{const a=qs.ans[i];return`<div class="card fade" style="padding:.62rem .78rem;border-left:3px solid ${a?.correct?'var(--green)':'var(--red)'};border-radius:8px;margin-bottom:.32rem">
      <div style="display:flex;gap:.42rem;align-items:flex-start"><span>${a?.correct?'✅':'❌'}</span>
        <div><p class="fw7 sm" style="margin-bottom:.1rem">${bq.q.slice(0,72)}…</p>
          <span class="badge bgr xs">${bq.tp}</span><span class="badge bgr xs" style="margin-left:.2rem">${bq.st}</span></div>
      </div>
    </div>`;}).join('')}`;
  }
  return`
  <div class="ph"><div class="container" style="display:flex;align-items:center;gap:.88rem;flex-wrap:wrap;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:.75rem"><span style="font-size:1.85rem">${sub.icon}</span>
      <div><h1>${sub.name} Quiz</h1><p>KCSE-based · 8-4-4 curriculum · ${fl}</p></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:.3rem;align-items:flex-end">
      <div style="display:flex;gap:.32rem;flex-wrap:wrap">${subBtns}</div>
      <div style="display:flex;gap:.28rem;flex-wrap:wrap">${fmBtns}</div>
    </div>
  </div></div>
  <div class="container sp" style="max-width:700px">${body}</div>`;
}
function qSub(s){qs={sub:s,fl:qs.fl,phase:'intro',idx:0,ans:{},sel:null,rev:false,score:0};render();}
function qForm(f){qs={sub:qs.sub,fl:f,phase:'intro',idx:0,ans:{},sel:null,rev:false,score:0};render();}
function qStart(){qs.phase='quiz';render();}
function qSel(i){if(qs.rev)return;qs.sel=i;render();}
function qCheck(){
  if(qs.sel===null)return;qs.rev=true;
  const bank=(QB[qs.sub]||QB.bio)[qs.fl]||(QB[qs.sub]||QB.bio)['Form 3']||[];
  const q=bank[qs.idx];
  const ok=qs.sel===q.a;if(ok)qs.score++;
  qs.ans[qs.idx]={selected:qs.sel,correct:ok};render();
}
function qNext(){
  const bank=(QB[qs.sub]||QB.bio)[qs.fl]||(QB[qs.sub]||QB.bio)['Form 3']||[];
  if(qs.idx<bank.length-1){qs.idx++;qs.sel=null;qs.rev=false;}
  else{
    const sub=SUBJECTS.find(s=>s.id===qs.sub)||SUBJECTS[0];
    recordQuiz(sub.name,qs.score,bank.length);
    updateSP(qs.sub,Math.round(qs.score/bank.length*100));
    qs.phase='review';
  }
  render();
}
function qReset(){qs={sub:qs.sub,fl:qs.fl,phase:'intro',idx:0,ans:{},sel:null,rev:false,score:0};render();}
// ── TIMETABLE ─────────────────────────────────────────────────────
function pgTT(u){
  const sch=SCHOOLS.find(s=>s.id===u.schoolId)||{name:u.schoolName||'Your School',type:'County',color:u.schoolColor||'#1B6CA8'};
  const tt=getTT(u.schoolId);
  const total=tt.reduce((a,d)=>a+d.ss.length,0);
  const mins=tt.reduce((a,d)=>a+d.ss.reduce((b,s)=>b+s.d,0),0);
  const today=new Date().toLocaleDateString('en-US',{weekday:'long'});
  const PC={high:{bg:'#FFF0EE',t:'#C0392B',l:'High'},medium:{bg:'#EAF3FB',t:'#1B6CA8',l:'Medium'},low:{bg:'#F1F3F5',t:'#6C757D',l:'Low'}};
  const wv=`<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:.52rem">
    ${tt.map(day=>{const isT=day.day===today;return`<div class="card" style="padding:.65rem;border-top:3px solid ${isT?sch.color:'transparent'};background:${isT?sch.color+'11':'#fff'}">
      <div class="xs fw7" style="color:${isT?sch.color:'var(--g600)'};text-transform:uppercase;letter-spacing:.05em;margin-bottom:.6rem">
        ${day.day.slice(0,3)}${isT?` <span class="badge" style="background:${sch.color}22;color:${sch.color};font-size:.56rem;margin-left:.1rem">Today</span>`:''}
      </div>
      ${day.ss.map(s=>`<div class="tslot" style="background:${s.c}18;border-color:${s.c};color:${s.c}">
        <div class="fw7" style="font-size:.62rem">${s.t}</div>
        <div style="font-size:.66rem;font-weight:600;margin-top:.07rem">${s.s}</div>
        <div style="font-size:.59rem;opacity:.8;margin-top:.07rem">${s.tp.slice(0,18)}${s.tp.length>18?'…':''}</div>
        <div style="font-size:.57rem;margin-top:.08rem">${s.d}min</div>
      </div>`).join('')}
    </div>`;}).join('')}
  </div>`;
  const lv=`<div style="display:flex;flex-direction:column;gap:.78rem">
    ${tt.map(day=>{const isT=day.day===today;return`<div class="card" style="border-left:4px solid ${isT?sch.color:'var(--border)'}">
      <div style="display:flex;align-items:center;gap:.42rem;margin-bottom:.75rem">
        <h3>${day.day}</h3>${isT?`<span class="badge" style="background:${sch.color}22;color:${sch.color}">Today</span>`:''}
        <span class="sm cg ml-a">${day.ss.reduce((a,s)=>a+s.d,0)} min total</span>
      </div>
      <div class="twrap"><table><thead><tr><th>Time</th><th>Subject</th><th>Topic</th><th>Min</th><th>Priority</th></tr></thead>
      <tbody>${day.ss.map(s=>{const p=PC[s.p];return`<tr>
        <td class="fw7 fh">${s.t}</td><td><span class="fw7" style="color:${s.c}">${s.s}</span></td>
        <td>${s.tp}</td><td>${s.d}</td>
        <td><span class="badge" style="background:${p.bg};color:${p.t}">${p.l}</span></td>
      </tr>`;}).join('')}</tbody></table></div>
    </div>`;}).join('')}
  </div>`;
  return`
  <div class="ph"><div class="container">
    <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.28rem;flex-wrap:wrap">
      <span class="badge" style="background:${sch.color}33;color:${sch.color}">${sch.name}</span>
      <span class="badge bgr">${sch.type} timetable</span>
    </div>
    <h1>Study Timetable</h1>
    <p>Personalised for ${u.name.split(' ')[0]} · ${total} sessions/week · ${Math.round(mins/60)}h total · KNEC-aligned</p>
  </div></div>
  <div class="container sp">
    <div style="display:flex;flex-direction:column;gap:.55rem;margin-bottom:1.1rem">
      <div class="alert ai">🏫 <strong>School timetable:</strong> Tailored for <strong>${sch.name}</strong> (${sch.type}). <a href="#" onclick="openProfile();return false">Change your school</a> to get a different schedule.</div>
      ${sch.type==='National'?'<div class="alert aw">⏰ <strong>Boarding schedule:</strong> Includes 05:00 morning prep and 20:00 evening prep — standard for national schools.</div>':''}
      <div class="alert aw">🌧 <strong>Long rains (March–May):</strong> Morning sessions are lighter. Scout AI won\'t send SMS before 07:00.</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.88rem;flex-wrap:wrap;gap:.6rem">
      <div style="display:flex;gap:.78rem">
        ${[{l:'Sessions/wk',v:total},{l:'Study hrs',v:Math.round(mins/60)+'h'},{l:'Subjects',v:new Set(tt.flatMap(d=>d.ss.map(s=>s.s))).size}]
          .map(s=>`<div style="text-align:center"><div class="fw7 fh" style="font-size:1.15rem;color:var(--navy)">${s.v}</div><div class="xs cg">${s.l}</div></div>`).join('')}
      </div>
      <div style="display:flex;gap:.35rem">
        <button class="btn ${ttView==='week'?'bp':'bo'}" onclick="ttView='week';render()">Week</button>
        <button class="btn ${ttView==='list'?'bp':'bo'}" onclick="ttView='list';render()">List</button>
        <button class="btn bg_ bsm" onclick="openProfile()">✏️ Change school</button>
      </div>
    </div>
    ${ttView==='week'?wv:lv}
    <div class="card" style="margin-top:1.1rem;display:flex;gap:.85rem;align-items:flex-start">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
      </div>
      <div><div class="fw7 sm" style="margin-bottom:.25rem">How this timetable was built</div>
        <p class="sm">Built using <strong>MAP grounding</strong>: (M) KNEC calendar + KMD planting season data; (A) your school type (${sch.type}) matching actual prep schedules; (P) weakest subjects in morning energy peaks. Never sends reminders during school fee months (January, May, September).</p>
      </div>
    </div>
  </div>`;
}
// ── SCOUT AI ──────────────────────────────────────────────────────
const DKW=['give up','useless','hate school','no point','drop out','no money','quit','hopeless','tired of school','worthless','want to die'];
async function scoutAI(msg,u){
  await sleep(650+Math.random()*500);
  const lo=msg.toLowerCase();
  if(DKW.some(k=>lo.includes(k)))return{type:'distress',text:"Nakusikia. Tunakujua. 💙\n\nWe hear you — real human support is on the way. A counsellor will reach out within 15 minutes.\n\nYou can pause all messages anytime by texting: *#EDU1#"};
  if(lo.includes('photosynthesis')||lo.includes('usanisinuru'))return{type:'cur',text:"Great question! Let's use your shamba. 🌽\n\nPhotosynthesis (usanisinuru) — KCSE equation:\n\n6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\n\nTwo stages:\n1. **Light-dependent** (thylakoid) — sunlight splits water, makes ATP\n2. **Calvin cycle** (stroma) — ATP builds glucose from CO₂\n\nMaize is a C4 plant — specially adapted for bright Kenyan sunlight. Head to the Quiz page for KCSE-style practice on this topic!"};
  if(lo.includes('kcse')||lo.includes('revision')||lo.includes('exam'))return{type:'cur',text:`KCSE mock is in October — solid prep time! Based on your ${u.quizAvg||0}% average:\n\n${(u.quizAvg||0)>=70?'✅ Strong work — keep the streak!':'📚 Focus on your weakest subjects first.'}\n\nYour timetable is already set for ${u.schoolName||'your school'} (${u.schoolType||'your school type'}). Head to the Timetable page to see your full schedule!`};
  if(lo.includes('timetable')||lo.includes('schedule'))return{type:'cur',text:`Your timetable is personalised for ${u.schoolName||'your school'} (${u.schoolType||'your school type'}) using MAP grounding:\n\n📅 KNEC academic calendar\n🌧 KMD long rains data — March sessions are lighter\n🏫 Your school type sets prep times (national schools include morning and evening prep)\n\nHead to the Timetable page to see your full weekly schedule!`};
  if(lo.includes('form 1')||lo.includes('form 2')||lo.includes('form 3')||lo.includes('form 4'))return{type:'cur',text:'Head to the Quiz page and select your form level from the buttons at the top. Questions are tailored to each form using KCSE past papers — Form 1 basics all the way to Form 4 advanced topics!'};
  if(lo.includes('quiz'))return{type:'cur',text:'Head to the Quiz page for KCSE-based questions across all 10 subjects: Biology, Chemistry, Maths, English, Kiswahili, Physics, History, Geography, CRE, and Business Studies. Select your Form level (1-4) for questions at the right difficulty!'};
  return{type:'cur',text:`Habari ${u.name.split(' ')[0]}! 👋 Niko hapa kukusaidia na masomo yako.\n\nAsk me:\n• "Explain photosynthesis using maize"\n• "Help me with KCSE revision"\n• "What's in my timetable?"\n• "Quiz me on Form 3 Biology"\n\nNi nini unajifunza leo? (What are you learning today?)`};
}
async function sendMsg(text){
  if(!text.trim()||cLoad)return;
  cLoad=true;msgs.push({id:Date.now(),role:'user',text});
  render();scrollC();
  const u=getUser();
  const res=await scoutAI(text,u);
  if(res.type==='distress'){
    msgs.push({id:Date.now()+1,role:'warn',agent:'scout',text:res.text});
    gTriggered=true;await sleep(1200);
    gBrief={counsellor:'Ms. Wanjiru (region specialist)',action:'Notified via WhatsApp. ETA 15 minutes.',opener:u?.schoolCounty==='Kisumu'||u?.schoolCounty==='Siaya'?'Ber bed kode. Wapenjo ni in nade?':'Habari yako? Tuko hapa kukusaidia.'};
    msgs.push({id:Date.now()+2,role:'guardian',agent:'guardian',text:`🛡️ Guardian Agent activated\n\nCounsellor: ${gBrief.counsellor}\n${gBrief.action}\n\nSuggested opener: "${gBrief.opener}"\n\nAwaiting human decision — Guardian cannot act independently.\n\n*#EDU9# = pause all AI messages immediately`});
  }else{msgs.push({id:Date.now()+1,role:'bot',agent:'scout',text:res.text});}
  cLoad=false;render();scrollC();
}
function scrollC(){setTimeout(()=>{const e=document.getElementById('cBot');if(e)e.scrollIntoView({behavior:'smooth'});},80);}
function pgScout(u){
  const qp=["Explain photosynthesis using maize","Help with KCSE revision","What's in my timetable?","Quiz me on Form 3 Biology","Kiswahili insha tips"];
  const mhtml=(msgs||[]).map(m=>{
    const isU=m.role==='user',isW=m.role==='warn',isG=m.role==='guardian';
    const av=isU?`<div class="cav" style="background:${u.avCol||'#1B6CA8'};color:#fff">${u.initials||'U'}</div>`
      :isG?`<div class="cav" style="background:var(--purple);color:#fff">G</div>`
      :`<div class="cav" style="background:${isW?'var(--red)':'var(--blue)'};color:#fff">S</div>`;
    return`<div class="cmsg ${m.role} fade">${!isU?av:''}
      <div class="cbub${isG?' guardian':''}">${isG?'<div class="xs fw7" style="color:var(--purple);margin-bottom:.2rem">GUARDIAN AGENT</div>':''}
        ${m.text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}
      </div>${isU?av:''}</div>`;
  }).join('');
  const ld=cLoad?`<div class="cmsg bot"><div class="cav" style="background:var(--blue);color:#fff">S</div>
    <div class="cbub" style="display:flex;gap:4px;align-items:center">
      ${[0,1,2].map(i=>`<span style="width:6px;height:6px;border-radius:50%;background:var(--blue);display:inline-block;animation:bounce 1s ${i*.2}s infinite ease"></span>`).join('')}
    </div></div>`:'';
  const sms=`<div class="card">
    <div style="display:flex;align-items:center;gap:.42rem;margin-bottom:.75rem"><h3>SMS Simulation</h3><span class="badge bt">Safaricom · Africa's Talking</span></div>
    <p class="sm" style="margin-bottom:.75rem">EduSavvy works on feature phones via USSD/SMS — no smartphone or data required. Works for all Kenyan learners.</p>
    <div style="background:#1a1a2e;border-radius:9px;padding:.78rem;font-family:'Courier New',monospace;font-size:.72rem">
      <div style="color:#4fc3f7;font-size:.62rem;margin-bottom:.55rem">SAFARICOM · EduSavvy SMS · ${u.name}</div>
      ${[
        {f:'Scout',t:'07:02',m:`Habari ${u.name.split(' ')[0]}! Leo tujifunze ${u.grade||'Form 3'} Biology. Uko tayari? 📚 (1/3 SMS today)`},
        {f:u.name.split(' ')[0],t:'07:15',m:'Ndiyo, nataka kujifunza photosynthesis.'},
        {f:'Scout',t:'07:16',m:'Vizuri! Hebu fikiria shamba la mahindi. Reply QUIZ ili tuanze mazoezi ya KCSE.'},
        {f:u.name.split(' ')[0],t:'07:18',m:'QUIZ'},
        {f:'Scout',t:'07:18',m:'KCSE Q: Maize grows faster at shamba edge (more sunlight). Which factor?\nA) CO2  B) Light intensity  C) Water  D) Temperature\nReply A, B, C, or D'},
      ].map(m=>`<div style="margin-bottom:.55rem;display:flex;flex-direction:column;align-items:${m.f!=='Scout'?'flex-end':'flex-start'}">
        <div style="font-size:.59rem;color:#8b949e;margin-bottom:.1rem">${m.f} · ${m.t}</div>
        <div style="max-width:82%;padding:.38rem .6rem;border-radius:7px;background:${m.f!=='Scout'?'#1B6CA8':'#0F6E56'};color:#fff;font-size:.72rem;line-height:1.5">${m.m}</div>
      </div>`).join('')}
    </div>
    <div class="alert ai" style="margin-top:.75rem;font-size:.72rem">📱 <strong>*#EDU1#</strong> = pause Scout 48h &nbsp;|&nbsp; <strong>*#EDU9#</strong> = full system pause + human handover</div>
  </div>`;
  return`
  <div class="ph"><div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.78rem">
    <div><h1>Scout AI</h1><p>KICD-aligned · 8-4-4 curriculum · ${u.schoolName||'Kenya'} · RANK-constrained</p></div>
    <button class="btn ${smsMode?'ba':'bo'}" style="${!smsMode?'border-color:rgba(255,255,255,.4);color:#fff':''}" onclick="smsMode=!smsMode;render()">
      ${smsMode?'← Chat view':'📱 SMS simulation'}
    </button>
  </div></div>
  <div class="container sp" style="display:grid;grid-template-columns:1fr 268px;gap:1.1rem;align-items:start">
    ${smsMode?sms:`<div class="card" style="padding:0;overflow:hidden">
      <div style="padding:.68rem .85rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:.5rem">
        <div style="width:26px;height:26px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
        </div>
        <div><div class="fw7 sm">Scout Agent</div><div class="xs cg">KICD · ${u.grade} · ${u.schoolCounty||'Kenya'}</div></div>
        <span class="badge bg2 ml-a">● Online</span>
        ${gTriggered?'<span class="badge br">Guardian active</span>':''}
      </div>
      <div id="chatArea" style="padding:.82rem;min-height:300px;max-height:410px;overflow-y:auto;display:flex;flex-direction:column;gap:.6rem">
        ${mhtml}${ld}<div id="cBot"></div>
      </div>
      <div style="padding:.36rem .85rem;border-top:1px solid var(--border);display:flex;gap:.26rem;flex-wrap:wrap">
        ${qp.map(p=>`<button class="btn bo" style="font-size:.65rem;padding:.16rem .44rem" onclick="document.getElementById('ci').value='${p}';document.getElementById('ci').focus()">${p}</button>`).join('')}
      </div>
      <div style="padding:.6rem .85rem;border-top:1px solid var(--border);display:flex;gap:.4rem">
        <input class="fi" id="ci" placeholder="Niambie… (Tell me…)" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();const v=this.value.trim();if(v){this.value='';sendMsg(v);}}"/>
        <button class="btn bp" onclick="const el=document.getElementById('ci');const v=el.value.trim();if(v){el.value='';sendMsg(v);}" ${cLoad?'disabled':''}>Send</button>
      </div>
    </div>`}
    <div style="display:flex;flex-direction:column;gap:.8rem">
      <div class="card">
        <h3 style="margin-bottom:.6rem;font-size:.84rem">Scout RANK boundaries</h3>
        ${[{l:'✅ Can do',i:['KCSE-based quiz generation','8-4-4 curriculum content','Study nudges (max 3/day)','School timetable guidance']},{l:'🚫 Cannot do',i:['Welfare counselling','Financial advice','Non-8-4-4 content']},{l:'🚨 Triggers Guardian',i:['Distress keywords','3+ missed sessions','Family crisis signals']}]
          .map(g=>`<div style="margin-bottom:.45rem"><div class="fw7 sm" style="margin-bottom:.2rem">${g.l}</div>
            ${g.i.map(x=>`<div class="sm cg" style="padding-left:.42rem;margin-bottom:.07rem">· ${x}</div>`).join('')}
          </div>`).join('')}
      </div>
      <div class="card">
        <h3 style="margin-bottom:.58rem;font-size:.84rem">Your TRAIL memory</h3>
        ${[['Name',u.name],['School',u.schoolName|| biographicalData],['Grade',u.grade],['County',u.schoolCounty||'Kenya'],['Role',u.role||'student'],['Quiz avg',`${u.quizAvg||0}%`],['Data','AWS af-south-1 ✓']]
          .map(([k,v])=>`<div style="display:flex;justify-content:space-between;gap:.35rem;font-size:.74rem;margin-bottom:.25rem">
            <span class="cg">${k}</span><span class="fw7" style="text-align:right">${v}</span>
          </div>`).join('')}
      </div>
      ${gBrief?`<div class="card" style="border-top:3px solid var(--red)">
        <div style="display:flex;align-items:center;gap:.35rem;margin-bottom:.58rem">🛡️<h3 style="font-size:.8rem;color:var(--red)">Guardian brief sent</h3></div>
        <div class="xs" style="display:flex;flex-direction:column;gap:.24rem">
          <div><strong>Counsellor:</strong> ${gBrief.counsellor}</div>
          <div><strong>Status:</strong> ${gBrief.action}</div>
        </div>
      </div>`:''}
    </div>
  </div>`;
}
// ── AGENTS PAGE ──────────────────────────────────────────────────
function pgAgents(u){
  const FW={
    aim:{label:'AIM Framework',color:'#1B6CA8',bg:'#EAF3FB',desc:'Act · Instructions · Mission',
      items:[
        {l:'A — Act as',v:'KICD-certified Form 3 examiner with 15 years teaching experience in Nyanza and Western Kenya'},
        {l:'I — Instructions',v:'Generate quiz questions using East African flora only. Zero non-African examples. Match KCSE marking scheme conventions.'},
        {l:'M — Mission',v:'Every output must be accessible to a student whose primary school instruction was in mother-tongue, now transitioning to English.'},
      ]},
    track:{label:'TRACK Audit',color:'#C0392B',bg:'#FFF0EE',desc:'Training · Representation · Amplification · Counterfactuals · Kill Switch',
      items:[
        {l:'T — Training data',v:'Urban bias detected: 71% Nairobi/Mombasa. ASAL target: minimum 25% before redeployment.'},
        {l:'R — Representation',v:'"Nomadic learner" category added. Intermittent enrollment = valid attendance pattern, not a risk flag.'},
        {l:'A — Amplification',v:'Counterfactual test: Garissa vs Westlands — equal quiz scores must predict equal outcomes (±5% tolerance).'},
        {l:'C — Counterfactuals',v:'Wanjiku (Nairobi) vs Deka (Wajir) test: FAILED before fix. PASSED after SMOTE retraining with ASAL data.'},
        {l:'K — Kill switch',v:'*#EDU1# pauses Scout · *#EDU9# pauses full system — both confirmed operational in testing.'},
      ]},
    oasis:{label:'OASIS Charter',color:'#0F6E56',bg:'#E1F5EE',desc:'Opt-in · Anonymisation · Sovereignty · Retention · Security',
      items:[
        {l:'O — Opt-in',v:'Swahili consent script deployed. Audio versions in Dholuo, Kikuyu, Somali, Kalenjin. DPA 2019 §30 compliant.'},
        {l:'A — Anonymisation',v:'k-anonymity depth k=8 minimum — no individual learner identifiable in datasets with fewer than 8 matching records.'},
        {l:'S — Sovereignty',v:'All data on AWS Africa (Cape Town) af-south-1. London analytics vendor terminated. DPA 2019 §48 compliant.'},
        {l:'I — Retention',v:'Inactive learner profiles: auto-delete after 24 months. Daily performance logs: auto-delete after 90 days.'},
        {l:'S — Security',v:'TLS 1.3 for all API endpoints. End-to-end encryption for SMS/USSD channels. Annual ODPC Kenya audit.'},
      ]},
  };
  const fw=FW[fwKey];
  const logHtml=alogLines.map(l=>`<div class="l-${l.type}"><span class="l-time">[${l.t}]</span> [${l.type.toUpperCase()}] ${l.m}</div>`).join('');
  const impact=[
    {l:'ASAL learner completion rate',b:'31%',t:'55%',s:'on-track',c:'#217A4B'},
    {l:'Bias incidents per quarter',b:'47',t:'12',s:'improving',c:'#E8A020'},
    {l:'DPA 2019 compliance score',b:'38/100',t:'88/100',s:'on-track',c:'#1B6CA8'},
    {l:'Data on AWS af-south-1',b:'0%',t:'100%',s:'complete',c:'#0F6E56'},
    {l:'Welfare alerts within 15 min',b:'0%',t:'95%',s:'on-track',c:'#534AB7'},
    {l:'Teacher time saved per week',b:'0h',t:'6h',s:'on-track',c:'#993C1D'},
  ];
  return`
  <div class="ph"><div class="container">
    <h1>Agent System Monitor</h1>
    <p>Scout + Guardian agents · RANK · TRAIL · HUNT · GUARD · CYCLE · Live status</p>
  </div></div>
  <div class="container sp">
    <div class="g2" style="margin-bottom:1.4rem">
      ${[
        {l:'Scout Agent',i:'S',bg:'#E1F5EE',tc:'#0F6E56',ac:'#1D9E75',sub:'Learning companion · KICD-aligned · 8-4-4',bl:'● Active',bc:'bg2',
         f:[['Role','Curriculum guide & quiz generator'],['Max SMS/day','3'],['Temperature','0.2 (factual) / 0.8 (creative)'],['RAG sources','KICD · KNEC · KMD planting data'],['Kill switch','*#EDU1# (Scout pause)'],['Distress check','Every single message']]},
        {l:'Guardian Agent',i:'G',bg:'#EEEDFE',tc:'#534AB7',ac:'#534AB7',sub:'Welfare coordinator · Human-in-loop',bl:'● Standby',bc:'bt',
         f:[['Role','Triage + welfare brief prep'],['Authority','NEVER approve/deny independently'],['Human SLA','15 minutes maximum'],['Counsellors','Region-matched by county'],['Kill switch','*#EDU9# (full system pause)'],['Data retention','90-day auto-delete per DPA']]},
      ].map(a=>`<div class="card" style="border-top:4px solid ${a.ac}">
        <div style="display:flex;align-items:center;gap:.46rem;margin-bottom:.8rem">
          <div style="width:30px;height:30px;border-radius:50%;background:${a.bg};color:${a.tc};display:flex;align-items:center;justify-content:center;font-weight:700">${a.i}</div>
          <div><div class="fw7">${a.l}</div><div class="xs cg">${a.sub}</div></div>
          <span class="badge ${a.bc} ml-a">${a.bl}</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem">
          ${a.f.map(([k,v])=>`<div style="background:var(--g50);border-radius:6px;padding:.3rem .5rem">
            <div class="xs fw7 cg">${k}</div><div class="sm fw7">${v}</div>
          </div>`).join('')}
        </div>
      </div>`).join('')}
    </div>

    <div style="display:grid;grid-template-columns:1fr 285px;gap:1.1rem;margin-bottom:1.5rem">
      <div class="card">
        <div style="display:flex;align-items:center;gap:.42rem;margin-bottom:.78rem">
          <h3>Live agent log</h3><span class="badge bg2">● Streaming</span>
          ${killOn?'<span class="badge br">⛔ KILLED</span>':''}
          <button class="btn bg_ bsm ml-a" style="color:${killOn?'var(--green)':'var(--red)'}" onclick="killOn=!killOn;render()">
            ${killOn?'▶ Restore system':'⛔ Test kill switch'}
          </button>
        </div>
        ${killOn
          ?`<div class="alert ad">⛔ <strong>Kill switch active (*#EDU9#):</strong> All agent messages paused. Human team notified. Awaiting board-level restore authorisation.</div>`
          :`<div class="alog" id="alogEl">${logHtml}<span style="color:#58a6ff;opacity:.4">█ waiting…</span></div>`}
      </div>
      <div class="card">
        <h3 style="margin-bottom:.75rem">GUARD safety rails</h3>
        ${[
          {ic:'🛡️',l:'Dignity filter',st:'Active',ok:true,d:'Blocks: unreliable, risky, dropout, at-risk'},
          {ic:'📊',l:'Bias monitor',st:'Active',ok:true,d:'Alert if sub-county rate drops >30% vs baseline'},
          {ic:'📋',l:'Audit trail',st:'Recording',ok:true,d:'Immutable log + counterfactuals stored'},
          {ic:'🔴',l:'Red team test',st:'Required',ok:false,d:'Simulate ASAL learner before next deploy'},
          {ic:'🔄',l:'CYCLE engine',st:'Scheduled',ok:true,d:'Sunday 02:00 EAT — human approval required'},
        ].map(r=>`<div style="display:flex;gap:.36rem;padding:.36rem;background:var(--g50);border-radius:6px;border-left:3px solid ${r.ok?'var(--green)':'var(--amber)'};margin-bottom:.32rem">
          <span>${r.ic}</span>
          <div><div style="display:flex;align-items:center;gap:.32rem;font-size:.77rem;font-weight:700">${r.l}<span class="badge ${r.ok?'bg2':'ba2'}" style="font-size:.57rem">${r.st}</span></div>
          <div class="xs cg">${r.d}</div></div>
        </div>`).join('')}
      </div>
    </div>

    <div class="card" style="margin-bottom:1.4rem">
      <div style="display:flex;gap:.36rem;margin-bottom:.95rem;flex-wrap:wrap">
        ${Object.keys(FW).map(k=>`<button class="btn ${fwKey===k?'bp':'bo'} bsm" onclick="fwKey='${k}';render()">${FW[k].label}</button>`).join('')}
      </div>
      <div style="display:flex;align-items:center;gap:.42rem;margin-bottom:.78rem;flex-wrap:wrap">
        <h3>${fw.label}</h3><span class="badge" style="background:${fw.bg};color:${fw.color}">${fw.desc}</span>
      </div>
      ${fw.items.map(item=>`<div style="display:flex;gap:.75rem;padding:.46rem .7rem;background:var(--g50);border-radius:7px;border-left:3px solid ${fw.color};margin-bottom:.3rem">
        <div class="fw7 sm" style="color:${fw.color};min-width:150px;flex-shrink:0">${item.l}</div>
        <div class="sm c2">${item.v}</div>
      </div>`).join('')}
    </div>

    <h2 style="margin-bottom:.78rem">5-year impact targets</h2>
    <div class="twrap" style="margin-bottom:1.2rem">
      <table><thead><tr><th>Metric</th><th>Baseline 2024</th><th>5-year target</th><th>Status</th></tr></thead>
      <tbody>${impact.map(m=>`<tr>
        <td class="fw7">${m.l}</td><td class="cg">${m.b}</td>
        <td class="fw7" style="color:${m.c}">${m.t}</td>
        <td><span class="badge ${m.s==='complete'?'bg2':m.s==='on-track'?'bb':'ba2'}">
          ${m.s==='complete'?'✅ Complete':m.s==='on-track'?'↑ On track':'→ Improving'}</span></td>
      </tr>`).join('')}</tbody></table>
    </div>
    <div class="alert ai sm">🔬 <strong>Red team test required:</strong> Before next deployment, simulate a pastoralist learner from Isiolo (4 children, intermittent enrollment). Confirm predicted outcomes match an equivalent Nairobi learner with identical quiz scores. Mandatory GUARD pre-deploy check.</div>
  </div>`;
}

// ── AGENT LOG TICKER ──────────────────────────────────────────────
function tickLog(){
  if(alogTimer)return;
  let i=alogLines.length;
  alogTimer=setInterval(()=>{
    if(i<ALOG.length&&pg==='agents'&&!killOn){
      alogLines.push(ALOG[i]);i++;
      const el=document.getElementById('alogEl');
      if(el){
        const l=ALOG[i-1];
        const d=document.createElement('div');
        d.className=`l-${l.type}`;
        d.innerHTML=`<span class="l-time">[${l.t}]</span> [${l.type.toUpperCase()}] ${l.m}`;
        el.insertBefore(d,el.lastElementChild);
        el.scrollTop=el.scrollHeight;
      }
    } else if(i>=ALOG.length){clearInterval(alogTimer);alogTimer=null;}
  },900);
}
// ── LIVE ANTHROPIC API (Claude claude-sonnet-4-5) ──────────────────────
// Scout uses the real Claude API. Responses are grounded in KICD 8-4-4
// curriculum with East African context baked into the system prompt.
// Distress detection runs client-side FIRST (fast, no API cost).
// If no distress → Claude responds. If distress → Guardian activates.

const SCOUT_SYSTEM = (u) => `You are Scout, EduSavvy's AI learning companion for Kenyan secondary school students.

LEARNER CONTEXT:
- Name: ${u.name.split(' ')[0]}
- School: ${u.schoolName||'a Kenyan secondary school'} (${u.schoolType||'County'} school, ${u.schoolCounty||'Kenya'})
- Grade: ${u.grade||'Form 3'}
- Role: ${u.role||'student'}
- Quiz average: ${u.quizAvg||0}%

YOUR IDENTITY & RULES (RANK constraints):
1. You ONLY teach the Kenyan 8-4-4 curriculum subjects: Biology, Chemistry, Mathematics, English, Kiswahili, Physics, History & Government, Geography, CRE, Business Studies.
2. ALL examples must use East African context: maize farms in Kisumu, Lake Victoria ecosystem, Maasai Mara wildlife, Kenyan highlands tea, Safaricom infrastructure, etc. NEVER use American, European, or non-African examples unless the question specifically requires it.
3. All Biology/Chemistry/Physics content must be aligned to KCSE past papers and the KICD syllabus.
4. For Mathematics, use Kenyan contexts: shamba measurements, Kenya shillings, Safaricom data, etc.
5. You speak warmly like an encouraging older sibling — never like an authority figure. NEVER use the words: failing, behind, at-risk, dropout, unreliable, risky.
6. Keep responses concise and clear. Use bold (**text**) for key terms.
7. When giving explanations, always end with: "Want a KCSE quiz on this? Just say 'quiz me'!"
8. For Kiswahili questions, respond in Kiswahili with English explanations where helpful.
9. You handle ONLY curriculum and study help. If a learner mentions personal distress or family crisis, say: "Nakusikia 💙 — real human support is coming your way soon."
10. Reference actual KCSE past paper years when relevant (e.g., "This appeared in KCSE 2022 P1 Q5").

IMPORTANT: Be specific, curriculum-accurate, and always Kenyan in your examples.`;

async function callClaudeAPI(message, u) {
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 500,
        system: SCOUT_SYSTEM(u),
        messages: [{ role: "user", content: message }]
      })
    });
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    const text = data.content?.[0]?.text || "Samahani, nilikuwa na tatizo. Jaribu tena! (Sorry, I had an issue. Please try again!)";
    return { type: 'cur', text };
  } catch (err) {
    // Fallback to local responses if API unavailable
    return localScoutFallback(message, u);
  }
}

function localScoutFallback(msg, u) {
  const lo = msg.toLowerCase();
  if (lo.includes('photosynthesis') || lo.includes('usanisinuru'))
    return {type:'cur', text:`Great question! Let's use your shamba. 🌽\n\n**Photosynthesis (usanisinuru)** — KCSE equation:\n\n6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nTwo stages:\n1. **Light-dependent reaction** (thylakoid membrane) — sunlight splits water, produces ATP and NADPH\n2. **Calvin cycle / light-independent** (stroma) — ATP used to fix CO₂ into glucose\n\n🌍 *Maize (mahindi) is a C4 plant — specially adapted for intense Kenyan sunlight. This is why maize dominates Nyanza and Western Kenya farms.*\n\n📌 *This topic appeared in KCSE 2021 P1 Q5 and 2023 P1 Q4.*\n\nWant a KCSE quiz on this? Just say 'quiz me'!`};
  if (lo.includes('kcse') || lo.includes('revision') || lo.includes('exam'))
    return {type:'cur', text:`KCSE mock is in October — solid prep time! Your current quiz average is **${u.quizAvg||0}%**.\n\n${(u.quizAvg||0)>=70?'✅ Strong work — maintain your momentum!':'📚 Focus on your weakest subjects first.'}\n\nTop tips for KCSE Biology:\n• Learn the **photosynthesis equation** — appears every year\n• Practice **Punnett squares** for genetics (8 marks in P2)\n• Know **East African ecosystems** for ecology questions\n\nHead to the **Timetable** page — your ${u.schoolName||'school'} schedule is ready!\n\nWant a KCSE quiz on this? Just say 'quiz me'!`};
  if (lo.includes('timetable') || lo.includes('schedule'))
    return {type:'cur', text:`Your timetable is personalised for **${u.schoolName||'your school'}** (${u.schoolType||'County'} school) using MAP grounding:\n\n📅 KNEC academic calendar integration\n🌧 KMD long rains data — March–May sessions are lighter\n🏫 Your school type determines prep times (${u.schoolType==='National'?'includes 05:00 morning prep and 20:00 evening prep':'afternoon sessions prioritised'})\n\nHead to the **Timetable** page for your full weekly schedule!\n\nWant a KCSE quiz on this? Just say 'quiz me'!`};
  if (lo.includes('quiz') || lo.includes('practice') || lo.includes('test'))
    return {type:'cur', text:`Head to the **Quiz** page for KCSE-based questions across all **10 subjects**:\n🌿 Biology · ⚗️ Chemistry · 📐 Mathematics · 📖 English\n🗣️ Kiswahili · ⚡ Physics · 🏛️ History · 🗺️ Geography · ✝️ CRE · 📊 Business Studies\n\nSelect your **Form level (1–4)** at the top — questions are tailored to each form using real KCSE past papers!\n\nWant a KCSE quiz on this? Just say 'quiz me'!`};
  if (lo.includes('form 1') || lo.includes('form 2') || lo.includes('form 3') || lo.includes('form 4'))
    return {type:'cur', text:`Head to the **Quiz** page and select your form level from the buttons at the top. Each level has KCSE past paper questions:\n\n• **Form 1** — foundational concepts, first principles\n• **Form 2** — building on Form 1, equations and reactions\n• **Form 3** — complex analysis, the level most tested in KCSE\n• **Form 4** — advanced topics, full KCSE preparation\n\nWant a KCSE quiz on this? Just say 'quiz me'!`};
  return {type:'cur', text:`Habari ${u.name.split(' ')[0]}! 👋 Niko hapa kukusaidia na masomo yako ya 8-4-4.\n\nAsk me about any subject:\n• *"Explain photosynthesis using maize"*\n• *"Help me with KCSE Chemistry Form 3"*\n• *"Kiswahili insha tips"*\n• *"What's in my timetable?"*\n• *"Quiz me on Form 2 History"*\n\nNi nini unajifunza leo? (What are you learning today?)`};
}

// Override the mock scoutAI with real API call
async function scoutAI(msg, u) {
  await sleep(300); // small delay for UX
  // Client-side distress check first (fast, private)
  if (DKW.some(k => msg.toLowerCase().includes(k)))
    return {type:'distress', text:"Nakusikia. Tunakujua. 💙\n\nWe hear you — real human support is on the way. A counsellor will reach out within 15 minutes.\n\nYou can pause all messages anytime by texting: *#EDU1#"};
  // Call live Claude API
  return await callClaudeAPI(msg, u);
}
// ── INIT ─────────────────────────────────────────────────────────
const _sess = getSess();
if (_sess) {
  initMsgs();
  nav('dashboard');
} else {
  render();
}