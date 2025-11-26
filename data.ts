
import { Question } from './types';

export const questions: Question[] = [
  // --- ESSAY / SHORT ANSWER QUESTIONS ---
  {
    id: 1001,
    type: 'essay',
    category: "Cardiology",
    question: "What is Beck's Triad?",
    answer: "Beck's Triad indicates Acute Cardiac Tamponade.\n1. Hypotension (decreased systolic blood pressure).\n2. JVD (Jugular Venous Distension) due to impaired venous return.\n3. Muffled (Distant) Heart Sounds due to fluid insulation.",
    explanation: "These signs result from the accumulation of fluid in the pericardial sac, compressing the heart and compromising cardiac output."
  },
  {
    id: 1002,
    type: 'essay',
    category: "Cardiology",
    question: "What is Acute Pericarditis? Describe its causes and diagnostic approach.",
    answer: "Definition: Inflammation of the pericardium.\n\nCauses: \n1. Infectious: Viral (Coxsackie, Echovirus) - most common, Bacterial (TB, Staph), Fungal.\n2. Non-infectious: Autoimmune (SLE, RA), Post-MI (Dressler's), Uremia, Trauma, Malignancy.\n\nDiagnostic Approach:\n1. ECG: Diffuse ST-segment elevation and PR depression.\n2. Auscultation: Pericardial friction rub.\n3. Chest X-ray: 'Water bottle' heart if large effusion.\n4. Echocardiogram: To detect effusion.",
    explanation: "Chest pain in pericarditis is typically sharp, pleuritic, and improved by sitting up and leaning forward."
  },
  {
    id: 1003,
    type: 'essay',
    category: "Cardiology",
    question: "List the treatment options for Pericarditis.",
    answer: "1. NSAIDs (High dose Ibuprofen/Aspirin) - First line.\n2. Colchicine - Adjunct to prevent recurrence.\n3. Corticosteroids - Second line (if NSAIDs fail or autoimmune cause).\n4. Treat underlying cause (e.g., dialysis for uremia).\n5. Pericardiocentesis/Pericardiotomy - Only if tamponade or purulent.",
    explanation: "Colchicine significantly reduces the rate of recurrent pericarditis."
  },
  {
    id: 1004,
    type: 'essay',
    category: "Cardiology",
    question: "What are the mechanical complications of Acute Myocardial Infarction?",
    answer: "1. Ventricular Septal Defect (VSD).\n2. Papillary Muscle Rupture (causing Acute Mitral Regurgitation).\n3. Left Ventricular Free Wall Rupture (causing Tamponade).\n4. Ventricular Aneurysm.",
    explanation: "These complications typically occur 3-7 days post-MI when the necrotic tissue is weakest."
  },
  {
    id: 1005,
    type: 'essay',
    category: "Cardiology",
    question: "Explain the difference between Mobitz I and Mobitz II AV block.",
    answer: "Mobitz I (Wenckebach): Progressive prolongation of the PR interval until a QRS is dropped. Usually benign, intranodal.\n\nMobitz II: Constant PR interval with intermittent dropped QRS complexes (e.g., 2:1 or 3:1 block). Usually pathologic (infra-nodal) and requires a pacemaker.",
    explanation: "Mobitz II has a high risk of progression to Complete Heart Block."
  },
  {
    id: 1006,
    type: 'essay',
    category: "Cardiology",
    question: "What is Tetralogy of Fallot?",
    answer: "A congenital cyanotic heart defect with 4 components (PROVe):\n1. Pulmonary Stenosis (RV outflow obstruction).\n2. Right Ventricular Hypertrophy.\n3. Overriding Aorta.\n4. Ventricular Septal Defect (VSD).",
    explanation: "The severity of cyanosis depends on the degree of Pulmonary Stenosis."
  },
  {
    id: 1007,
    type: 'essay',
    category: "Cardiology",
    question: "Explain Stanford Type B Aortic Dissection and its management.",
    answer: "Type B Dissection involves the descending aorta ONLY (distal to left subclavian). \nManagement is primarily MEDICAL: Strict BP control (Beta-blockers like Esmolol/Labetalol) and pain control.",
    explanation: "Surgery (TEVAR) is reserved for complications like rupture or malperfusion. Type A (Ascending) always requires surgery."
  },
  {
    id: 1008,
    type: 'essay',
    category: "Cardiology",
    question: "What is the classic triad of symptoms in Aortic Stenosis?",
    answer: "SAD:\n1. Syncope (exertional).\n2. Angina (chest pain).\n3. Dyspnea (heart failure).",
    explanation: "The appearance of symptoms marks a poor prognosis without valve replacement."
  },
  {
    id: 1009,
    type: 'essay',
    category: "Cardiology",
    question: "What are the signs of Infective Endocarditis?",
    answer: "FROM JANE:\n- Fever\n- Roth spots (retina)\n- Osler nodes (painful nodules on fingers)\n- Murmur (new)\n- Janeway lesions (painless spots on palms/soles)\n- Anemia\n- Nail-bed hemorrhage (splinter hemorrhages)\n- Emboli",
    explanation: "Duke Criteria are used for diagnosis."
  },
  {
    id: 1010,
    type: 'essay',
    category: "Cardiology",
    question: "How do you treat Acute Heart Failure?",
    answer: "LMNOP:\n- Lasix (IV Diuretics) to reduce preload.\n- Morphine (historically used, now less common).\n- Nitrates (venodilation).\n- Oxygen (if hypoxic).\n- Position (upright) / Positive Pressure Ventilation (BiPAP).",
    explanation: "Inotropes (Dobutamine) are used only if there is cardiogenic shock (hypotension)."
  },
  {
    id: 1011,
    type: 'essay',
    category: "Cardiology",
    question: "What causes decompensation of Cor Pulmonale?",
    answer: "Factors that increase Pulmonary Vascular Resistance or RV workload:\n1. Acute respiratory infection (COPD exacerbation).\n2. Pulmonary Embolism.\n3. Hypoxemia/Hypercapnia (worsens vasoconstriction).",
    explanation: "Cor Pulmonale is Right Heart Failure due to primary lung disease."
  },
  {
    id: 1012,
    type: 'essay',
    category: "Pulmonology",
    question: "Name clinical characteristics of Pleural Effusion.",
    answer: "Symptoms: Dyspnea, dry cough, pleuritic chest pain.\nSigns:\n- Inspection: Reduced chest expansion on affected side.\n- Palpation: Decreased tactile fremitus.\n- Percussion: Stony dullness.\n- Auscultation: Decreased/absent breath sounds.",
    explanation: "Tracheal deviation away from the lesion occurs only in massive effusions."
  },
  {
    id: 1013,
    type: 'essay',
    category: "Pulmonology",
    question: "What should Pleural Fluid be analyzed for (Thoracentesis)?",
    answer: "1. Biochemistry: Protein, LDH, Glucose, pH, ADA (for TB).\n2. Microbiology: Gram stain, Culture, AFB.\n3. Cytology: Malignant cells.\n4. Cell count and differential.",
    explanation: "This analysis differentiates Transudates (systemic cause) from Exudates (local cause) using Light's Criteria."
  },
  {
    id: 1014,
    type: 'essay',
    category: "Pulmonology",
    question: "Explain pathogens and risk factors of Ventilator Associated Pneumonia (VAP).",
    answer: "Pathogens: Pseudomonas aeruginosa, MRSA, Enterobacteriaceae (E. coli, Klebsiella).\nRisk Factors:\n- Intubation > 48 hours.\n- Supine position (aspiration).\n- Sedation (poor cough reflex).\n- Prior antibiotic use.",
    explanation: "VAP is a pneumonia occurring >48h after intubation."
  },
  {
    id: 1015,
    type: 'essay',
    category: "Pulmonology",
    question: "What are Acute Exacerbations of COPD and how do we treat them?",
    answer: "Definition: Acute worsening of symptoms (dyspnea, cough, sputum volume/purulence).\nTriggers: Infection (Viral/Bacterial), pollution.\nTreatment:\n1. Oxygen (target 88-92%).\n2. Bronchodilators (SABA + SAMA).\n3. Systemic Corticosteroids (Prednisone).\n4. Antibiotics (if sputum is purulent).",
    explanation: "NIV (BiPAP) is indicated for respiratory acidosis."
  },
  {
    id: 1016,
    type: 'essay',
    category: "Pulmonology",
    question: "List medications for long-term control of Asthma.",
    answer: "1. Inhaled Corticosteroids (ICS) - Mainstay (e.g., Fluticasone).\n2. Long-Acting Beta Agonists (LABA) - e.g., Salmeterol (never monotherapy).\n3. Leukotriene Receptor Antagonists (Montelukast).\n4. Long-Acting Muscarinic Antagonists (LAMA).\n5. Biologics (Omalizumab) for severe allergic asthma.",
    explanation: "Rescue therapy involves SABA (Albuterol) or ICS-Formoterol."
  },
  {
    id: 1017,
    type: 'essay',
    category: "Pulmonology",
    question: "What are the complications of Coal Worker's Pneumoconiosis?",
    answer: "1. Progressive Massive Fibrosis (PMF).\n2. Caplan Syndrome (with Rheumatoid Arthritis).\n3. Cor Pulmonale (Pulmonary Hypertension).\n4. Increased risk of COPD.",
    explanation: "Simple CWP can progress to complicated fibrosis even after exposure ceases."
  },
  {
    id: 1018,
    type: 'essay',
    category: "Case Study",
    question: "Case 1: 25yo female, sharp left-sided chest pain, shortness of breath. On OCPs, recent long flight. What is the diagnosis?",
    answer: "Diagnosis: Pulmonary Embolism (PE).\n\nReasoning:\n- Risk Factors: OCP use (estrogen), Immobility (long flight).\n- Symptoms: Pleuritic chest pain, Dyspnea, Acute onset.",
    explanation: "The triad of stasis, hypercoagulability, and endothelial injury (Virchow's triad) predisposes to DVT/PE."
  },
  {
    id: 1019,
    type: 'essay',
    category: "Case Study",
    question: "Case 2: 38yo male, cough, sputum, mild hemoptysis, night sweats, weight loss. CXR shows cavity in upper lobe. What is the diagnosis?",
    answer: "Diagnosis: Tuberculosis (TB).\n\nReasoning:\n- Symptoms: 'B symptoms' (fever, night sweats, weight loss), Hemoptysis.\n- Imaging: Cavitary lesion in the upper lobe (classic for reactivation TB).",
    explanation: "Isolation and sputum AFB testing are the immediate next steps."
  },

  // --- MCQs ---

  // CARDIOLOGY
  {
    id: 1,
    type: 'mcq',
    category: "Cardiology",
    question: "What is the definition of myocarditis?",
    options: [
      "Irritation of the heart muscle",
      "Hyperproliferation of the heart muscle",
      "Infection of the heart muscle",
      "Hyperactivity of the heart muscle",
      "Inflammation of the heart muscle"
    ],
    correctAnswerIndex: 4,
    explanation: "Myocarditis is defined as the inflammation of the myocardium (heart muscle), which can be caused by infections, autoimmune diseases, or toxins."
  },
  {
    id: 2,
    type: 'mcq',
    category: "Cardiology",
    question: "What is the most common viral etiology of myocarditis?",
    options: ["Influenza A", "HIV", "Coxsackie B", "Influenza B", "Echovirus"],
    correctAnswerIndex: 2,
    explanation: "Coxsackie B (an Enterovirus) is historically the most commonly identified viral cause of myocarditis."
  },
  {
    id: 3,
    type: 'mcq',
    category: "Cardiology",
    question: "Which of the following is a parasitic cause of myocarditis?",
    options: ["Influenza", "Streptococcus", "Trypanosoma cruzi", "Borrelia", "Staphylococcus"],
    correctAnswerIndex: 2,
    explanation: "Trypanosoma cruzi is the parasite responsible for Chagas disease, a major cause of myocarditis and cardiomyopathy in Latin America."
  },
  {
    id: 4,
    type: 'mcq',
    category: "Cardiology",
    question: "What defines dilated cardiomyopathy?",
    options: [
      "Chemical dysfunction, mechanical dysfunction, and impaired systolic function",
      "Electrical dysfunction, mechanical dysfunction, and impaired systolic function",
      "A disease of the heart muscle causing ventricular dilation and impaired systolic function",
      "Impaired diastolic function only"
    ],
    correctAnswerIndex: 2,
    explanation: "Dilated cardiomyopathy (DCM) is characterized by ventricular enlargement (dilation) and loss of contractility (systolic dysfunction)."
  },
  {
    id: 5,
    type: 'mcq',
    category: "Cardiology",
    question: "In which age group is dilated cardiomyopathy most common?",
    options: ["5–10 years", "50–65 years", "10–20 years", "Over 65 years", "20–50 years"],
    correctAnswerIndex: 4,
    explanation: "Idiopathic dilated cardiomyopathy typically manifests in young to middle-aged adults (ages 20-50)."
  },
  {
    id: 6,
    type: 'mcq',
    category: "Cardiology",
    question: "What is a non-genetic cause of dilated cardiomyopathy?",
    options: ["Magnesium overload", "Iron overload", "Potassium overload", "Potassium deficiency", "Iron deficiency"],
    correctAnswerIndex: 1,
    explanation: "Iron overload (Hemochromatosis) is a reversible cause of cardiomyopathy. Alcohol and viral infections are other common non-genetic causes."
  },
  {
    id: 7,
    type: 'mcq',
    category: "Cardiology",
    question: "Which molecule increases Na+ excretion and causes vasodilation?",
    options: ["Leukotrienes", "Endothelin", "Atrial Natriuretic Peptide (ANP)", "Thromboxane A2", "Bradykinin"],
    correctAnswerIndex: 2,
    explanation: "ANP is released by the atria in response to stretch. It promotes natriuresis (Na+ excretion) and vasodilation to lower blood pressure."
  },
  {
    id: 8,
    type: 'mcq',
    category: "Cardiology",
    question: "Which of the following molecules causes vasoconstriction?",
    options: ["Nitric oxide", "Kinins", "Histamine", "Thromboxane", "Prostaglandins"],
    correctAnswerIndex: 3,
    explanation: "Thromboxane A2 is a potent vasoconstrictor and platelet aggregator. Nitric Oxide is a vasodilator."
  },
  {
    id: 9,
    type: 'mcq',
    category: "Cardiology",
    question: "If ACE is blocked, the level of which molecule will be decreased?",
    options: ["Bradykinin", "Angiotensin II", "Renin", "Angiotensinogen", "Angiotensin I"],
    correctAnswerIndex: 1,
    explanation: "ACE (Angiotensin Converting Enzyme) converts Angiotensin I to Angiotensin II. Blocking it reduces Angiotensin II levels."
  },
  {
    id: 10,
    type: 'mcq',
    category: "Cardiology",
    question: "Which neuronal factor regulates peripheral resistance of blood vessels?",
    options: ["Prostaglandins", "Nitric oxide", "Angiotensin II", "Endothelin", "Alpha-adrenergic stimulation"],
    correctAnswerIndex: 4,
    explanation: "Sympathetic nervous system stimulation of alpha-adrenergic receptors on vascular smooth muscle causes vasoconstriction, increasing peripheral resistance."
  },
  {
    id: 11,
    type: 'mcq',
    category: "Cardiology",
    question: "Which valve is most likely to be damaged in acquired valvular disease (Rheumatic)?",
    options: [
      "Aortic valve",
      "Tricuspid valve",
      "Mitral valve",
      "Pulmonic valve"
    ],
    correctAnswerIndex: 2,
    explanation: "Rheumatic heart disease affects the Mitral valve most commonly (>70% of cases), often causing stenosis."
  },
  {
    id: 12,
    type: 'mcq',
    category: "Cardiology",
    question: "What are the mechanical complications of myocardial infarction?",
    options: [
      "Acute ventricular septal defect (VSD)",
      "Acute mitral regurgitation (MR)",
      "Left ventricular free wall rupture",
      "A and B",
      "All of the above"
    ],
    correctAnswerIndex: 4,
    explanation: "VSD, papillary muscle rupture (MR), and free wall rupture are all catastrophic mechanical complications of acute MI."
  },
  {
    id: 13,
    type: 'mcq',
    category: "Cardiology",
    question: "Acute pericarditis is a clinical state which:",
    options: [
      "Lasts less than 6 weeks",
      "Is often caused by viral infection",
      "Has good long term prognosis",
      "A and B",
      "All of the above"
    ],
    correctAnswerIndex: 4,
    explanation: "Acute pericarditis is usually idiopathic or viral, self-limiting, and resolves without long-term sequelae."
  },
  {
    id: 14,
    type: 'mcq',
    category: "Cardiology",
    question: "Systolic hypertension with wide pulse pressure is presented in all EXCEPT:",
    options: [
      "Decreased vascular compliance (Arteriosclerosis)",
      "Aortic regurgitation",
      "Thyrotoxicosis",
      "Mild Anemia"
    ],
    correctAnswerIndex: 3,
    explanation: "Arteriosclerosis, Aortic Regurgitation, and Thyrotoxicosis (High Output) cause wide pulse pressure. While severe anemia can, mild anemia typically does not."
  },
  {
    id: 15,
    type: 'mcq',
    category: "Cardiology",
    question: "Please choose the INCORRECT statement regarding myocarditis:",
    options: [
      "It is an inflammatory process",
      "Coxsackie B is a common cause",
      "It affects young adults",
      "Clinical feature of viral myocarditis is NOT complicated with atypical or anginal type chest pain"
    ],
    correctAnswerIndex: 3,
    explanation: "INCORRECT. Myocarditis frequently mimics MI with chest pain (anginal or pleuritic) and ECG changes."
  },
  {
    id: 16,
    type: 'mcq',
    category: "Cardiology",
    question: "Please choose the INCORRECT statement regarding AVNRT:",
    options: [
      "It is the most common paroxysmal SVT",
      "Neck pulsations are felt",
      "Manifests as narrow QRS tachycardia",
      "Vagal stimulation can terminate it",
      "The administration of adenosine is not recommended"
    ],
    correctAnswerIndex: 4,
    explanation: "INCORRECT. Adenosine is the first-line pharmacologic treatment for terminating AVNRT."
  },
  {
    id: 17,
    type: 'mcq',
    category: "Cardiology",
    question: "Atrial flutter is characterized by:",
    options: [
      "Appearance of saw-toothed P waves in ECG leads II, III, aVF",
      "Irregularly irregular rhythm",
      "Chaotic atrial activity",
      "Wide QRS complexes"
    ],
    correctAnswerIndex: 0,
    explanation: "The 'saw-tooth' pattern (F waves) in inferior leads is pathognomonic for Atrial Flutter."
  },
  {
    id: 18,
    type: 'mcq',
    category: "Cardiology",
    question: "Stage 1 hypertension is considered when:",
    options: [
      "Systolic 130-139 mmHg or Diastolic 80-89 mmHg",
      "Systolic 140-159 mmHg or Diastolic 90-99 mmHg",
      "Systolic > 160 mmHg"
    ],
    correctAnswerIndex: 0,
    explanation: "According to 2017 ACC/AHA guidelines, Stage 1 HTN is SBP 130-139 or DBP 80-89. (Note: Older JNC7 guidelines labeled 140-159 as Stage 1, but current practice uses the lower threshold)."
  },
  {
    id: 19,
    type: 'mcq',
    category: "Cardiology",
    question: "Treatment of aortic dissection includes:",
    options: ["Beta-blockers", "Nitroprusside", "Surgery (Type A)", "All of the above"],
    correctAnswerIndex: 3,
    explanation: "Management involves anti-impulse therapy (Beta-blockers) to lower shear stress, BP control (Nitroprusside), and surgery for ascending dissections."
  },
  {
    id: 20,
    type: 'mcq',
    category: "Cardiology",
    question: "What is the main cause of aortic dissection?",
    options: ["Hypertension", "Trauma", "Infection", "Bicuspid valve"],
    correctAnswerIndex: 0,
    explanation: "Chronic uncontrolled hypertension is the single most important risk factor for aortic dissection."
  },
  {
    id: 21,
    type: 'mcq',
    category: "Cardiology",
    question: "Which is a Cyanotic heart defect?",
    options: ["Tetralogy of Fallot", "ASD", "VSD", "PDA"],
    correctAnswerIndex: 0,
    explanation: "Tetralogy of Fallot causes a Right-to-Left shunt, leading to cyanosis. The others are acyanotic (Left-to-Right) initially."
  },
  {
    id: 22,
    type: 'mcq',
    category: "Cardiology",
    question: "Symptoms of pulmonary hypertension include:",
    options: ["Swelling of ankles/legs", "Tricuspid regurgitation", "Fatigue", "All of the above"],
    correctAnswerIndex: 3,
    explanation: "Pulmonary HTN leads to Right Heart Failure, causing peripheral edema, fatigue (low output), and TR."
  },
  {
    id: 23,
    type: 'mcq',
    category: "Cardiology",
    question: "Most common cause of aortic valve stenosis in patients under age 30?",
    options: ["Senile calcific stenosis", "Bicuspid aortic valve", "Traumatic", "Amyloidosis"],
    correctAnswerIndex: 1,
    explanation: "Bicuspid aortic valve is the most common congenital anomaly causing early-onset aortic stenosis."
  },
  {
    id: 24,
    type: 'mcq',
    category: "Cardiology",
    question: "Most common cause of Endocarditis (Subacute)?",
    options: ["Streptococcus viridans", "Pseudomonas", "Klebsiella", "Fungi"],
    correctAnswerIndex: 0,
    explanation: "Strep viridans (oral flora) is the classic cause of subacute endocarditis on damaged valves."
  },
  {
    id: 25,
    type: 'mcq',
    category: "Cardiology",
    question: "What is the most common congenital heart defect?",
    options: ["Atrial septal defect", "Ductus arteriosus", "Pulmonary stenosis", "Ventricular septal defect (VSD)"],
    correctAnswerIndex: 3,
    explanation: "VSD is the most common congenital heart defect overall."
  },
  {
    id: 26,
    type: 'mcq',
    category: "Cardiology",
    question: "Which of the following is a functional cause of mitral regurgitation?",
    options: ["Mitral valve endocarditis", "Dilated cardiomyopathy", "Mitral valve prolapse", "Rheumatic disease"],
    correctAnswerIndex: 1,
    explanation: "Dilated cardiomyopathy causes dilation of the mitral annulus, preventing proper leaflet coaptation (Functional MR), without primary valve damage."
  },
  {
    id: 27,
    type: 'mcq',
    category: "Cardiology",
    question: "How long does it take for cardiac troponins to appear in blood after MI?",
    options: ["10-30 mins", "1-2 hours", "3-6 hours", "12-24 hours"],
    correctAnswerIndex: 2,
    explanation: "Troponins are detectable 3-6 hours after injury, which is why serial testing is required."
  },
  {
    id: 28,
    type: 'mcq',
    category: "Cardiology",
    question: "Which statement about Myocardial Infarction is true?",
    options: [
      "Most MIs originate from plaques that do not cause significant stenosis (<50%)",
      "Vasospasm is the most common cause",
      "Critical stenosis is a prerequisite"
    ],
    correctAnswerIndex: 0,
    explanation: "Most acute coronary syndromes result from rupture of vulnerable, lipid-rich plaques that are not critically stenotic prior to the event."
  },
  {
    id: 29,
    type: 'mcq',
    category: "Cardiology",
    question: "What is the most common primary tumor of the heart?",
    options: ["Sarcoma", "Myxoma", "Lymphoma", "Lipoma"],
    correctAnswerIndex: 1,
    explanation: "Atrial Myxoma is the most common benign primary cardiac tumor."
  },
  {
    id: 30,
    type: 'mcq',
    category: "Cardiology",
    question: "Prinzmetal angina is treated with:",
    options: ["Beta blockers", "Calcium-channel blockers", "Nitrates", "B and C"],
    correctAnswerIndex: 3,
    explanation: "Vasospasm is treated with vasodilators (CCBs and Nitrates). Beta-blockers can worsen spasm."
  },
  {
    id: 31,
    type: 'mcq',
    category: "Cardiology",
    question: "Which of the following has a vasodilatory effect?",
    options: ["Nitric oxide", "Renin", "Angiotensin I", "Endothelin"],
    correctAnswerIndex: 0,
    explanation: "Nitric Oxide is a potent endothelial-derived vasodilator."
  },
  {
    id: 32,
    type: 'mcq',
    category: "Cardiology",
    question: "Atrial fibrillation is characterized by:",
    options: ["Saw-toothed P waves", "Regular rhythm", "Disorganized, rapid, irregular atrial activation", "Wide QRS"],
    correctAnswerIndex: 2,
    explanation: "AFib is defined by 'irregularly irregular' rhythm and chaotic atrial activity without distinct P waves."
  },
  {
    id: 33,
    type: 'mcq',
    category: "Cardiology",
    question: "ECG showing ST elevation in leads V1-V4 suggests infarction of:",
    options: ["Inferior wall", "Lateral wall", "Anterior/Septal wall", "Posterior wall"],
    correctAnswerIndex: 2,
    explanation: "V1-V4 correspond to the Anterior and Septal walls of the Left Ventricle (LAD territory)."
  },
  {
    id: 34,
    type: 'mcq',
    category: "Cardiology",
    question: "SAM phenomenon (Systolic Anterior Motion) is seen in:",
    options: ["Restrictive cardiomyopathy", "Aortic regurgitation", "Hypertrophic Cardiomyopathy (HOCM)", "Coarctation"],
    correctAnswerIndex: 2,
    explanation: "SAM of the mitral valve leaflet into the outflow tract contributes to obstruction in Hypertrophic Cardiomyopathy."
  },
  {
    id: 35,
    type: 'mcq',
    category: "Cardiology",
    question: "Appropriate thromboembolic prevention in atrial fibrillation includes:",
    options: ["Aspirin alone", "Aspirin + Clopidogrel", "NOAC or Warfarin", "Prasugrel"],
    correctAnswerIndex: 2,
    explanation: "Oral anticoagulation (Warfarin or DOACs) is indicated for stroke prevention in AFib based on CHADS-VASc score."
  },
  {
    id: 36,
    type: 'mcq',
    category: "Cardiology",
    question: "Treatment after PCI with stent requires:",
    options: ["Aspirin alone", "Dual Antiplatelet Therapy (Aspirin + P2Y12 inhibitor)", "Warfarin", "Dipyridamole"],
    correctAnswerIndex: 1,
    explanation: "DAPT is mandatory to prevent stent thrombosis."
  },
  {
    id: 37,
    type: 'mcq',
    category: "Cardiology",
    question: "What is NOT associated with severe aortic stenosis?",
    options: ["Chest pain", "Syncope", "Divergent blood pressure (Wide pulse pressure)", "Dyspnea"],
    correctAnswerIndex: 2,
    explanation: "Aortic Stenosis causes a NARROW pulse pressure (pulsus parvus et tardus). Wide pulse pressure is seen in Aortic Regurgitation."
  },

  // PULMONOLOGY
  {
    id: 38,
    type: 'mcq',
    category: "Pulmonology",
    question: "Which investigation is NOT useful for diagnosis of Pulmonary Embolism?",
    options: ["Pulmonary angiography", "CT scan", "Echocardiography", "Spirometry"],
    correctAnswerIndex: 3,
    explanation: "Spirometry measures airflow and volumes, which are typically normal or non-specifically changed in PE. It does not image the vasculature."
  },
  {
    id: 39,
    type: 'mcq',
    category: "Pulmonology",
    question: "Which is NOT a risk factor for Pulmonary Embolism?",
    options: ["Alcoholism", "Indwelling catheter", "Long flight", "Oral contraceptives"],
    correctAnswerIndex: 0,
    explanation: "While alcohol can lead to immobility, it is not a direct independent risk factor like stasis, catheters (endothelial injury), or estrogen (hypercoagulability)."
  },
  {
    id: 40,
    type: 'mcq',
    category: "Pulmonology",
    question: "Which is NOT a predisposing factor to pulmonary emboli?",
    options: ["Stasis", "Hypercoagulable state", "Decreased elasticity of vessel wall", "Endothelial damage"],
    correctAnswerIndex: 2,
    explanation: "Virchow's triad is Stasis, Hypercoagulability, and Endothelial Injury. Arteriosclerosis (decreased elasticity) is not a direct cause of VTE."
  },
  {
    id: 41,
    type: 'mcq',
    category: "Pulmonology",
    question: "What may cause a pulmonary fat embolism?",
    options: ["Postpartum hemorrhage", "IV drug abuse", "Fracture of a long bone", "Trauma"],
    correctAnswerIndex: 2,
    explanation: "Fractures of long bones (femur/tibia) release marrow fat into the circulation."
  },
  {
    id: 42,
    type: 'mcq',
    category: "Pulmonology",
    question: "Which neuronal factor regulates peripheral resistance?",
    options: ["Nitric oxide", "Endothelin", "Alpha-adrenergic stimulation", "Prostaglandins"],
    correctAnswerIndex: 2,
    explanation: "Sympathetic alpha-adrenergic stimulation is the primary neural mechanism for vasoconstriction and resistance control."
  },
  {
    id: 43,
    type: 'mcq',
    category: "Pulmonology",
    question: "Which statement is TRUE regarding lung cancer?",
    options: [
      "Small cell lung cancer grows rapidly and surgery is rarely curative",
      "Small cell cancer is rarely metastatic",
      "Squamous cell is the most common type",
      "Adenocarcinoma arises from pleura"
    ],
    correctAnswerIndex: 0,
    explanation: "SCLC is aggressive and systemic at diagnosis; Chemotherapy is the treatment of choice."
  },
  {
    id: 44,
    type: 'mcq',
    category: "Pulmonology",
    question: "Which presentation is common in lung cancer?",
    options: [
      "Cough and hemoptysis",
      "Incidental X-ray finding",
      "Mass causing collapse",
      "All of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "Lung cancer presents variably, from asymptomatic nodules to obstruction and hemoptysis."
  },
  {
    id: 45,
    type: 'mcq',
    category: "Pulmonology",
    question: "Most common histologic type of lung cancer?",
    options: ["Squamous cell", "Large cell", "Adenocarcinoma", "Small cell"],
    correctAnswerIndex: 2,
    explanation: "Adenocarcinoma is the most common type, particularly in non-smokers and women."
  },
  {
    id: 46,
    type: 'mcq',
    category: "Pulmonology",
    question: "Which presentation is associated with large airway obstruction?",
    options: ["Fixed monomorphic wheezing (Stridor)", "Fatigue", "Weight loss", "Hemoptysis"],
    correctAnswerIndex: 0,
    explanation: "Fixed wheezing (stridor) indicates narrowing of a large central airway."
  },
  {
    id: 47,
    type: 'mcq',
    category: "Pulmonology",
    question: "Known risk factor for lung cancer?",
    options: ["Hydrogen", "Helium", "Nitrous oxide", "Radon gas"],
    correctAnswerIndex: 3,
    explanation: "Radon is the second leading cause of lung cancer after smoking."
  },
  {
    id: 48,
    type: 'mcq',
    category: "Pulmonology",
    question: "Calculate risk: 200 people, 100 smoke. 10 cancers total, 9 were smokers. What is the absolute risk for a smoker?",
    options: ["1%", "5%", "9%", "11%"],
    correctAnswerIndex: 2,
    explanation: "Risk = (Smokers with cancer) / (Total smokers) = 9 / 100 = 9%."
  },
  {
    id: 49,
    type: 'mcq',
    category: "Pulmonology",
    question: "In a study of Lung Cancer vs Smoking, what is the Independent Variable?",
    options: ["Lung Cancer", "Skin cancer", "Smoking", "Age"],
    correctAnswerIndex: 2,
    explanation: "The Independent variable (Smoking) is manipulated/observed to see its effect on the Dependent variable (Lung Cancer)."
  },
  {
    id: 50,
    type: 'mcq',
    category: "Pulmonology",
    question: "Drastically increased calcitonin is associated with:",
    options: ["Colorectal cancer", "Melanoma", "Squamous cell ca", "Medullary thyroid cancer"],
    correctAnswerIndex: 3,
    explanation: "Medullary thyroid cancer arises from Calcitonin-secreting C-cells."
  },
  {
    id: 51,
    type: 'mcq',
    category: "Pulmonology",
    question: "Patient: 60yo, decreased Tidal Volume, increased RR, V/Q = 0. Most likely cause?",
    options: ["TB", "Emphysema", "Hypoxia", "Severe Asthma / Mucus Plugging"],
    correctAnswerIndex: 3,
    explanation: "V/Q = 0 represents a Shunt (perfusion without ventilation), occurring in complete airway obstruction like mucus plugging in severe asthma."
  },
  {
    id: 52,
    type: 'mcq',
    category: "Pulmonology",
    question: "Hypercalcemia, low PTH, cough, pleuritic chest pain. Diagnosis?",
    options: ["CHF", "Pneumonia", "Small cell lung cancer", "Squamous cell lung cancer"],
    correctAnswerIndex: 3,
    explanation: "Squamous cell carcinoma of the lung secretes PTHrP, causing hypercalcemia."
  },
  {
    id: 53,
    type: 'mcq',
    category: "Pulmonology",
    question: "Lab results in SIADH?",
    options: ["High serum osmolarity", "Hypernatremia", "High urine osmolarity", "Polyuria"],
    correctAnswerIndex: 2,
    explanation: "SIADH causes water retention, leading to dilute serum (hyponatremia) but inappropriately concentrated urine."
  },
  {
    id: 54,
    type: 'mcq',
    category: "Pulmonology",
    question: "Typical management for Small Cell Lung Cancer?",
    options: ["Pneumonectomy", "Radiation alone", "Chemotherapy (+/- Radiation)", "Lobectomy"],
    correctAnswerIndex: 2,
    explanation: "SCLC is systemic at presentation; surgery is rarely an option. Chemotherapy is the mainstay."
  },
  {
    id: 55,
    type: 'mcq',
    category: "Pulmonology",
    question: "Percussion finding in massive pleural effusion?",
    options: ["Resonant", "Hyperresonant", "Stony dullness", "Tympanic"],
    correctAnswerIndex: 2,
    explanation: "Fluid attenuates sound transmission, causing stony dullness."
  },
  {
    id: 56,
    type: 'mcq',
    category: "Pulmonology",
    question: "Indication for ventilatory support?",
    options: ["Hypertension", "PO2 < 80", "PCO2 < 50", "Refractory Hypoxemia (PO2 < 60 on high O2)"],
    correctAnswerIndex: 3,
    explanation: "Refractory hypoxemia despite supplemental oxygen is a clear indication for intubation."
  },
  {
    id: 57,
    type: 'mcq',
    category: "Pulmonology",
    question: "Effect of PEEP (Positive End-Expiratory Pressure)?",
    options: ["Increases Functional Residual Capacity (FRC)", "Decreases FRC", "Worsens oxygenation", "Not used in ventilation"],
    correctAnswerIndex: 0,
    explanation: "PEEP prevents alveolar collapse at end-expiration, recruiting alveoli and increasing FRC."
  },
  {
    id: 58,
    type: 'mcq',
    category: "Pulmonology",
    question: "NOT true regarding evaluation of respiratory distress?",
    options: [
      "Reassess after intervention",
      "Invasive procedure required for oxygenation",
      "Auscultation helps etiology",
      "Respiratory rate is elevated"
    ],
    correctAnswerIndex: 1,
    explanation: "Pulse oximetry is non-invasive and sufficient for initial oxygenation assessment."
  },
  {
    id: 59,
    type: 'mcq',
    category: "Pulmonology",
    question: "NOT a common indication for bronchoscopy?",
    options: ["Hemoptysis", "Community acquired pneumonia", "Lobar collapse", "Suspected sarcoidosis"],
    correctAnswerIndex: 1,
    explanation: "Uncomplicated CAP is treated empirically; bronchoscopy is reserved for non-resolving or complicated cases."
  },
  {
    id: 60,
    type: 'mcq',
    category: "Pulmonology",
    question: "Downside of CT scans EXCEPT?",
    options: ["Nephrotoxic contrast", "Claustrophobia", "Lower sensitivity than CXR", "Radiation dose"],
    correctAnswerIndex: 2,
    explanation: "CT has much HIGHER sensitivity than Chest X-ray."
  },
  {
    id: 61,
    type: 'mcq',
    category: "Pulmonology",
    question: "Unusual in asthma history?",
    options: ["Hemoptysis", "Worse with viral infection", "Night symptoms", "No childhood history"],
    correctAnswerIndex: 0,
    explanation: "Hemoptysis is atypical for asthma and warrants investigation for other causes (TB, Cancer, PE)."
  },
  {
    id: 62,
    type: 'mcq',
    category: "Pulmonology",
    question: "Most common chronic lung disease?",
    options: ["Tuberculosis", "Asthma", "Sarcoidosis", "COPD"],
    correctAnswerIndex: 3,
    explanation: "COPD is a leading cause of morbidity/mortality globally. (Asthma is also very common, but COPD is the standard answer for chronic progressive disease in adults in this context)."
  },
  {
    id: 63,
    type: 'mcq',
    category: "Pulmonology",
    question: "Lung function in lower airway obstruction?",
    options: [
      "Reduced FEV1, FEV1/FVC < 70%",
      "Reduced FEV1, FEV1/FVC > 80%",
      "Increased FEV1",
      "Normal FEV1"
    ],
    correctAnswerIndex: 0,
    explanation: "Obstruction is defined by a reduced FEV1/FVC ratio."
  },
  {
    id: 64,
    type: 'mcq',
    category: "Pulmonology",
    question: "Disease obstructing LARGE airways?",
    options: ["Allergic aspergillosis", "Asthma", "COPD", "Malignant lesions"],
    correctAnswerIndex: 3,
    explanation: "Tumors (malignant lesions) can physically obstruct the trachea or main bronchi."
  },
  {
    id: 65,
    type: 'mcq',
    category: "Pulmonology",
    question: "Lung volume increasing in air trapping?",
    options: ["Inspiratory reserve", "Expiratory reserve", "Tidal volume", "Residual volume"],
    correctAnswerIndex: 3,
    explanation: "Air trapping increases the volume of air left in lungs after exhalation (Residual Volume)."
  },
  {
    id: 66,
    type: 'mcq',
    category: "Pulmonology",
    question: "Leading cause of transudative pleural effusion?",
    options: ["Neoplasm", "Congestive Heart Failure", "Infection", "Nephrotic syndrome"],
    correctAnswerIndex: 1,
    explanation: "CHF increases hydrostatic pressure, pushing fluid into the pleural space."
  },
  {
    id: 67,
    type: 'mcq',
    category: "Pulmonology",
    question: "Primary complication of bronchiectasis is NOT:",
    options: ["Lung abscess", "Pneumonia", "Cor pulmonale", "Pulmonary carcinoma"],
    correctAnswerIndex: 3,
    explanation: "While chronic inflammation is a risk, carcinoma is not a direct complication of bronchiectasis like infection or heart failure."
  },
  {
    id: 68,
    type: 'mcq',
    category: "Pulmonology",
    question: "Clinical syndrome of severe dyspnea, hypoxemia, diffuse infiltrates?",
    options: ["HAP", "ARDS", "HCAP", "VAP"],
    correctAnswerIndex: 1,
    explanation: "Acute Respiratory Distress Syndrome (ARDS) is defined by this acute onset of non-cardiogenic edema."
  },
  {
    id: 69,
    type: 'mcq',
    category: "Pulmonology",
    question: "Spontaneous pneumothorax denotes:",
    options: ["Atelectasis", "Water in pericardium", "Air in pleural space", "Air in peritoneum"],
    correctAnswerIndex: 2,
    explanation: "Pneumothorax is air within the pleural cavity."
  },
  {
    id: 70,
    type: 'mcq',
    category: "Pulmonology",
    question: "Most common symptom of interstitial lung disease?",
    options: ["Hemoptysis", "Progressive Dyspnea", "Substernal discomfort", "Wheezing"],
    correctAnswerIndex: 1,
    explanation: "Progressive exertional dyspnea and dry cough are the hallmarks of ILD."
  },
  {
    id: 71,
    type: 'mcq',
    category: "Pulmonology",
    question: "Which is usually NOT seen in initial phase of ARDS?",
    options: ["Pulmonary edema", "Hypercapnia", "Hypoxemia", "Stiff lung"],
    correctAnswerIndex: 1,
    explanation: "Initial ARDS presents with Hypoxemia and Hyperventilation (Hypocapnia). Hypercapnia occurs later."
  }
];
