const healthcareDataset = [
  // Cardiovascular conditions
  { namasteCode: "N001", namasteTerm: "Hridaya Roga", tm2Code: "TM2-001", tm2Term: "Heart Disease", icd11Code: "BA00", icd11Term: "Ischaemic heart diseases" },
  { namasteCode: "N002", namasteTerm: "Rakta Chapa Vriddhi", tm2Code: "TM2-002", tm2Term: "Hypertension", icd11Code: "BA00.Z", icd11Term: "Hypertensive diseases" },
  { namasteCode: "N003", namasteTerm: "Hridaya Gati Vaikrita", tm2Code: "TM2-003", tm2Term: "Cardiac Arrhythmia", icd11Code: "BC9Z", icd11Term: "Cardiac arrhythmias" },
  
  // Respiratory conditions
  { namasteCode: "N004", namasteTerm: "Shwas Roga", tm2Code: "TM2-004", tm2Term: "Respiratory Disorder", icd11Code: "CA20", icd11Term: "Asthma" },
  { namasteCode: "N005", namasteTerm: "Kasa", tm2Code: "TM2-005", tm2Term: "Cough", icd11Code: "MD12", icd11Term: "Cough" },
  { namasteCode: "N006", namasteTerm: "Pratishyaya", tm2Code: "TM2-006", tm2Term: "Common Cold", icd11Code: "CA07", icd11Term: "Acute upper respiratory infections" },
  
  // Digestive conditions
  { namasteCode: "N007", namasteTerm: "Ajirna", tm2Code: "TM2-007", tm2Term: "Indigestion", icd11Code: "DA90", icd11Term: "Functional dyspepsia" },
  { namasteCode: "N008", namasteTerm: "Amlapitta", tm2Code: "TM2-008", tm2Term: "Acidity", icd11Code: "DA82", icd11Term: "Gastro-oesophageal reflux disease" },
  { namasteCode: "N009", namasteTerm: "Vibandha", tm2Code: "TM2-009", tm2Term: "Constipation", icd11Code: "ME05", icd11Term: "Constipation" },
  { namasteCode: "N010", namasteTerm: "Atisara", tm2Code: "TM2-010", tm2Term: "Diarrhea", icd11Code: "ME05", icd11Term: "Diarrhoea" },
  
  // Neurological conditions
  { namasteCode: "N011", namasteTerm: "Shirashoola", tm2Code: "TM2-011", tm2Term: "Headache", icd11Code: "MB23", icd11Term: "Primary headache disorders" },
  { namasteCode: "N012", namasteTerm: "Ardita", tm2Code: "TM2-012", tm2Term: "Facial Paralysis", icd11Code: "8B82", icd11Term: "Facial nerve disorders" },
  { namasteCode: "N013", namasteTerm: "Apatanaka", tm2Code: "TM2-013", tm2Term: "Epilepsy", icd11Code: "8A61", icd11Term: "Epilepsy" },
  
  // Musculoskeletal conditions
  { namasteCode: "N014", namasteTerm: "Sandhivata", tm2Code: "TM2-014", tm2Term: "Joint Pain", icd11Code: "FB56", icd11Term: "Joint pain" },
  { namasteCode: "N015", namasteTerm: "Amavata", tm2Code: "TM2-015", tm2Term: "Rheumatoid Arthritis", icd11Code: "FA20", icd11Term: "Rheumatoid arthritis" },
  { namasteCode: "N016", namasteTerm: "Grudhrasi", tm2Code: "TM2-016", tm2Term: "Sciatica", icd11Code: "8B94", icd11Term: "Sciatica" },
  
  // Skin conditions
  { namasteCode: "N017", namasteTerm: "Kushtha", tm2Code: "TM2-017", tm2Term: "Skin Disorder", icd11Code: "EA90", icd11Term: "Other specified skin disorders" },
  { namasteCode: "N018", namasteTerm: "Dadru", tm2Code: "TM2-018", tm2Term: "Ringworm", icd11Code: "1F28", icd11Term: "Dermatophytosis" },
  { namasteCode: "N019", namasteTerm: "Kitibha", tm2Code: "TM2-019", tm2Term: "Psoriasis", icd11Code: "EA90.0", icd11Term: "Psoriasis" },
  
  // Mental health conditions
  { namasteCode: "N020", namasteTerm: "Unmada", tm2Code: "TM2-020", tm2Term: "Mental Disorder", icd11Code: "6A73", icd11Term: "Schizophrenia" },
  { namasteCode: "N021", namasteTerm: "Apasmara", tm2Code: "TM2-021", tm2Term: "Memory Loss", icd11Code: "MB21.1", icd11Term: "Mild cognitive disorder" },
  { namasteCode: "N022", namasteTerm: "Vishada", tm2Code: "TM2-022", tm2Term: "Depression", icd11Code: "6A70", icd11Term: "Single episode depressive disorder" },
  
  // Endocrine conditions
  { namasteCode: "N023", namasteTerm: "Madhumeha", tm2Code: "TM2-023", tm2Term: "Diabetes Mellitus", icd11Code: "5A11", icd11Term: "Type 2 diabetes mellitus" },
  { namasteCode: "N024", namasteTerm: "Sthaulya", tm2Code: "TM2-024", tm2Term: "Obesity", icd11Code: "5B81", icd11Term: "Obesity" },
  { namasteCode: "N025", namasteTerm: "Karshya", tm2Code: "TM2-025", tm2Term: "Underweight", icd11Code: "5B51", icd11Term: "Underweight" },
  
  // Gynecological conditions
  { namasteCode: "N026", namasteTerm: "Rajodosha", tm2Code: "TM2-026", tm2Term: "Menstrual Disorder", icd11Code: "GA34", icd11Term: "Menstrual irregularities" },
  { namasteCode: "N027", namasteTerm: "Shwetapradara", tm2Code: "TM2-027", tm2Term: "Leucorrhea", icd11Code: "GA15", icd11Term: "Vaginal discharge" },
  { namasteCode: "N028", namasteTerm: "Vandhyatva", tm2Code: "TM2-028", tm2Term: "Infertility", icd11Code: "GA00", icd11Term: "Female infertility" },
  
  // Eye conditions
  { namasteCode: "N029", namasteTerm: "Netra Roga", tm2Code: "TM2-029", tm2Term: "Eye Disease", icd11Code: "9A00", icd11Term: "Diseases of the eye" },
  { namasteCode: "N030", namasteTerm: "Timira", tm2Code: "TM2-030", tm2Term: "Cataract", icd11Code: "9B10", icd11Term: "Cataract" },
  { namasteCode: "N031", namasteTerm: "Abhishyanda", tm2Code: "TM2-031", tm2Term: "Conjunctivitis", icd11Code: "9A60", icd11Term: "Conjunctivitis" },
  
  // ENT conditions
  { namasteCode: "N032", namasteTerm: "Karna Roga", tm2Code: "TM2-032", tm2Term: "Ear Disease", icd11Code: "AA00", icd11Term: "Diseases of the ear" },
  { namasteCode: "N033", namasteTerm: "Nasaroga", tm2Code: "TM2-033", tm2Term: "Nasal Disorder", icd11Code: "CA08", icd11Term: "Acute sinusitis" },
  { namasteCode: "N034", namasteTerm: "Kantha Roga", tm2Code: "TM2-034", tm2Term: "Throat Disease", icd11Code: "CA03", icd11Term: "Acute pharyngitis" },
  
  // Fever and infections
  { namasteCode: "N035", namasteTerm: "Jwara", tm2Code: "TM2-035", tm2Term: "Fever", icd11Code: "MG50", icd11Term: "Fever, unspecified" },
  { namasteCode: "N036", namasteTerm: "Vishama Jwara", tm2Code: "TM2-036", tm2Term: "Intermittent Fever", icd11Code: "1C62", icd11Term: "Malaria" },
  { namasteCode: "N037", namasteTerm: "Sannipataja Jwara", tm2Code: "TM2-037", tm2Term: "Typhoid", icd11Code: "1A07", icd11Term: "Typhoid fever" },
  
  // Additional conditions
  { namasteCode: "N038", namasteTerm: "Pandu", tm2Code: "TM2-038", tm2Term: "Anemia", icd11Code: "3A00", icd11Term: "Iron deficiency anaemia" },
  { namasteCode: "N039", namasteTerm: "Shotha", tm2Code: "TM2-039", tm2Term: "Edema", icd11Code: "MG29", icd11Term: "Oedema, not elsewhere classified" },
  { namasteCode: "N040", namasteTerm: "Aruchi", tm2Code: "TM2-040", tm2Term: "Loss of Appetite", icd11Code: "MD90", icd11Term: "Loss of appetite" },
  
  // Urological conditions
  { namasteCode: "N041", namasteTerm: "Mutraghata", tm2Code: "TM2-041", tm2Term: "Urinary Retention", icd11Code: "GC90", icd11Term: "Urinary retention" },
  { namasteCode: "N042", namasteTerm: "Mutrakrichra", tm2Code: "TM2-042", tm2Term: "Dysuria", icd11Code: "GC08", icd11Term: "Dysuria" },
  { namasteCode: "N043", namasteTerm: "Ashmari", tm2Code: "TM2-043", tm2Term: "Kidney Stones", icd11Code: "GC80", icd11Term: "Urinary calculus" },
  
  // Pain conditions
  { namasteCode: "N044", namasteTerm: "Vedana", tm2Code: "TM2-044", tm2Term: "Pain", icd11Code: "MG30", icd11Term: "Chronic pain" },
  { namasteCode: "N045", namasteTerm: "Parshva Shoola", tm2Code: "TM2-045", tm2Term: "Side Pain", icd11Code: "ME84", icd11Term: "Abdominal pain" },
  { namasteCode: "N046", namasteTerm: "Kati Shoola", tm2Code: "TM2-046", tm2Term: "Lower Back Pain", icd11Code: "FB56.2", icd11Term: "Low back pain" },
  
  // Sleep disorders
  { namasteCode: "N047", namasteTerm: "Anidra", tm2Code: "TM2-047", tm2Term: "Insomnia", icd11Code: "7A00", icd11Term: "Insomnia disorders" },
  { namasteCode: "N048", namasteTerm: "Atinidra", tm2Code: "TM2-048", tm2Term: "Hypersomnia", icd11Code: "7A20", icd11Term: "Hypersomnia disorders" },
  
  // Additional 100+ terms for comprehensive dataset
  { namasteCode: "N049", namasteTerm: "Raktapitta", tm2Code: "TM2-049", tm2Term: "Bleeding Disorder", icd11Code: "3B64", icd11Term: "Coagulation defects" },
  { namasteCode: "N050", namasteTerm: "Kamala", tm2Code: "TM2-050", tm2Term: "Jaundice", icd11Code: "DB95", icd11Term: "Jaundice" },
  { namasteCode: "N051", namasteTerm: "Gulma", tm2Code: "TM2-051", tm2Term: "Abdominal Mass", icd11Code: "ME05.1", icd11Term: "Abdominal mass" },
  { namasteCode: "N052", namasteTerm: "Udara Roga", tm2Code: "TM2-052", tm2Term: "Ascites", icd11Code: "ME05.2", icd11Term: "Ascites" },
  { namasteCode: "N053", namasteTerm: "Hikka", tm2Code: "TM2-053", tm2Term: "Hiccups", icd11Code: "MD80", icd11Term: "Hiccups" },
  { namasteCode: "N054", namasteTerm: "Chardi", tm2Code: "TM2-054", tm2Term: "Vomiting", icd11Code: "MD90.0", icd11Term: "Nausea and vomiting" },
  { namasteCode: "N055", namasteTerm: "Trishna", tm2Code: "TM2-055", tm2Term: "Excessive Thirst", icd11Code: "5A20", icd11Term: "Polydipsia" },
  { namasteCode: "N056", namasteTerm: "Prameha", tm2Code: "TM2-056", tm2Term: "Urinary Disorder", icd11Code: "GC70", icd11Term: "Polyuria" },
  { namasteCode: "N057", namasteTerm: "Shosha", tm2Code: "TM2-057", tm2Term: "Wasting", icd11Code: "5B51.0", icd11Term: "Severe protein-energy malnutrition" },
  { namasteCode: "N058", namasteTerm: "Daha", tm2Code: "TM2-058", tm2Term: "Burning Sensation", icd11Code: "MB40.2", icd11Term: "Burning sensation" },
  { namasteCode: "N059", namasteTerm: "Klama", tm2Code: "TM2-059", tm2Term: "Fatigue", icd11Code: "MG22", icd11Term: "Fatigue" },
  { namasteCode: "N060", namasteTerm: "Bhrama", tm2Code: "TM2-060", tm2Term: "Vertigo", icd11Code: "AB32", icd11Term: "Vertigo" },
  { namasteCode: "N061", namasteTerm: "Tamaka Shwasa", tm2Code: "TM2-061", tm2Term: "Bronchial Asthma", icd11Code: "CA23", icd11Term: "Allergic asthma" },
  { namasteCode: "N062", namasteTerm: "Kshaya", tm2Code: "TM2-062", tm2Term: "Tuberculosis", icd11Code: "1B10", icd11Term: "Tuberculosis of respiratory system" },
  { namasteCode: "N063", namasteTerm: "Vatarakta", tm2Code: "TM2-063", tm2Term: "Gout", icd11Code: "FA25", icd11Term: "Gout" },
  { namasteCode: "N064", namasteTerm: "Vicharchika", tm2Code: "TM2-064", tm2Term: "Eczema", icd11Code: "EA80", icd11Term: "Atopic dermatitis" },
  { namasteCode: "N065", namasteTerm: "Kandu", tm2Code: "TM2-065", tm2Term: "Itching", icd11Code: "EB01", icd11Term: "Pruritus" },
  { namasteCode: "N066", namasteTerm: "Mukha Roga", tm2Code: "TM2-066", tm2Term: "Oral Disease", icd11Code: "DA08", icd11Term: "Diseases of oral cavity" },
  { namasteCode: "N067", namasteTerm: "Danta Roga", tm2Code: "TM2-067", tm2Term: "Dental Caries", icd11Code: "DA08.0", icd11Term: "Dental caries" },
  { namasteCode: "N068", namasteTerm: "Dantaharsha", tm2Code: "TM2-068", tm2Term: "Tooth Sensitivity", icd11Code: "DA08.1", icd11Term: "Dentine hypersensitivity" },
  { namasteCode: "N069", namasteTerm: "Oshtha Roga", tm2Code: "TM2-069", tm2Term: "Lip Disorder", icd11Code: "DA05", icd11Term: "Diseases of lips" },
  { namasteCode: "N070", namasteTerm: "Jihva Roga", tm2Code: "TM2-070", tm2Term: "Tongue Disease", icd11Code: "DA06", icd11Term: "Diseases of tongue" },
  { namasteCode: "N071", namasteTerm: "Gala Roga", tm2Code: "TM2-071", tm2Term: "Goiter", icd11Code: "5A02", icd11Term: "Nontoxic goitre" },
  { namasteCode: "N072", namasteTerm: "Granthi", tm2Code: "TM2-072", tm2Term: "Lymphadenopathy", icd11Code: "4B20", icd11Term: "Lymphadenopathy" },
  { namasteCode: "N073", namasteTerm: "Arbuda", tm2Code: "TM2-073", tm2Term: "Tumor", icd11Code: "2A00", icd11Term: "Malignant neoplasms" },
  { namasteCode: "N074", namasteTerm: "Vrana", tm2Code: "TM2-074", tm2Term: "Wound", icd11Code: "NE10", icd11Term: "Open wound" },
  { namasteCode: "N075", namasteTerm: "Bhagandara", tm2Code: "TM2-075", tm2Term: "Fistula", icd11Code: "DB97", icd11Term: "Fistula" },
  { namasteCode: "N076", namasteTerm: "Arsha", tm2Code: "TM2-076", tm2Term: "Hemorrhoids", icd11Code: "DB97.0", icd11Term: "Haemorrhoids" },
  { namasteCode: "N077", namasteTerm: "Bhasmaka", tm2Code: "TM2-077", tm2Term: "Hyperacidity", icd11Code: "DA82.0", icd11Term: "Gastric hyperacidity" },
  { namasteCode: "N078", namasteTerm: "Grahani", tm2Code: "TM2-078", tm2Term: "IBS", icd11Code: "DD91", icd11Term: "Irritable bowel syndrome" },
  { namasteCode: "N079", namasteTerm: "Krimi", tm2Code: "TM2-079", tm2Term: "Parasitic Infection", icd11Code: "1F90", icd11Term: "Intestinal parasitic diseases" },
  { namasteCode: "N080", namasteTerm: "Visa", tm2Code: "TM2-080", tm2Term: "Poisoning", icd11Code: "NE60", icd11Term: "Poisoning" },
  { namasteCode: "N081", namasteTerm: "Jirna Jwara", tm2Code: "TM2-081", tm2Term: "Chronic Fever", icd11Code: "MG50.1", icd11Term: "Persistent fever" },
  { namasteCode: "N082", namasteTerm: "Santata Jwara", tm2Code: "TM2-082", tm2Term: "Continuous Fever", icd11Code: "MG50.2", icd11Term: "Continuous fever" },
  { namasteCode: "N083", namasteTerm: "Anyedyushka", tm2Code: "TM2-083", tm2Term: "Alternate Day Fever", icd11Code: "1C62.0", icd11Term: "Tertian malaria" },
  { namasteCode: "N084", namasteTerm: "Tritiyaka", tm2Code: "TM2-084", tm2Term: "Tertian Fever", icd11Code: "1C62.1", icd11Term: "Quartan malaria" },
  { namasteCode: "N085", namasteTerm: "Nadi Vrana", tm2Code: "TM2-085", tm2Term: "Sinus", icd11Code: "CA08.0", icd11Term: "Acute maxillary sinusitis" },
  { namasteCode: "N086", namasteTerm: "Karna Nada", tm2Code: "TM2-086", tm2Term: "Tinnitus", icd11Code: "AB53", icd11Term: "Tinnitus" },
  { namasteCode: "N087", namasteTerm: "Badhirya", tm2Code: "TM2-087", tm2Term: "Hearing Loss", icd11Code: "AB50", icd11Term: "Hearing loss" },
  { namasteCode: "N088", namasteTerm: "Akshi Pakshma Kosha", tm2Code: "TM2-088", tm2Term: "Stye", icd11Code: "9A61", icd11Term: "Hordeolum" },
  { namasteCode: "N089", namasteTerm: "Netra Srava", tm2Code: "TM2-089", tm2Term: "Excessive Lacrimation", icd11Code: "9A71", icd11Term: "Epiphora" },
  { namasteCode: "N090", namasteTerm: "Drishti Dosha", tm2Code: "TM2-090", tm2Term: "Vision Defect", icd11Code: "9D90", icd11Term: "Visual disturbances" },
  { namasteCode: "N091", namasteTerm: "Vatavyadhi", tm2Code: "TM2-091", tm2Term: "Neurological Disorder", icd11Code: "8E4Z", icd11Term: "Disorders of the nervous system" },
  { namasteCode: "N092", namasteTerm: "Pittavikara", tm2Code: "TM2-092", tm2Term: "Metabolic Disorder", icd11Code: "5C80", icd11Term: "Other specified metabolic disorders" },
  { namasteCode: "N093", namasteTerm: "Kaphaja Roga", tm2Code: "TM2-093", tm2Term: "Respiratory Congestion", icd11Code: "CA25", icd11Term: "Other asthma" },
  { namasteCode: "N094", namasteTerm: "Sannipata", tm2Code: "TM2-094", tm2Term: "Multi-system Disorder", icd11Code: "MG2Y", icd11Term: "Other specified symptoms" },
  { namasteCode: "N095", namasteTerm: "Dhatu Kshaya", tm2Code: "TM2-095", tm2Term: "Tissue Depletion", icd11Code: "5B50", icd11Term: "Malnutrition" },
  { namasteCode: "N096", namasteTerm: "Oja Kshaya", tm2Code: "TM2-096", tm2Term: "Immunity Loss", icd11Code: "4A00", icd11Term: "Immunodeficiency" },
  { namasteCode: "N097", namasteTerm: "Bala Kshaya", tm2Code: "TM2-097", tm2Term: "Strength Loss", icd11Code: "MG22.0", icd11Term: "Asthenia" },
  { namasteCode: "N098", namasteTerm: "Vriddhi", tm2Code: "TM2-098", tm2Term: "Abnormal Growth", icd11Code: "LD27", icd11Term: "Developmental anomalies" },
  { namasteCode: "N099", namasteTerm: "Vikruti", tm2Code: "TM2-099", tm2Term: "Deformity", icd11Code: "LD20", icd11Term: "Congenital malformations" },
  { namasteCode: "N100", namasteTerm: "Marma Abhighata", tm2Code: "TM2-100", tm2Term: "Vital Point Injury", icd11Code: "NE00", icd11Term: "Injury to vital organs" },
  { namasteCode: "N101", namasteTerm: "Mamsa Gata Vata", tm2Code: "TM2-101", tm2Term: "Muscle Spasm", icd11Code: "8B80", icd11Term: "Muscle spasm" },
  { namasteCode: "N102", namasteTerm: "Asthi Gata Vata", tm2Code: "TM2-102", tm2Term: "Bone Disease", icd11Code: "FB80", icd11Term: "Other specified bone disorders" },
  { namasteCode: "N103", namasteTerm: "Majja Gata Vata", tm2Code: "TM2-103", tm2Term: "Bone Marrow Disorder", icd11Code: "3B90", icd11Term: "Bone marrow disorders" },
  { namasteCode: "N104", namasteTerm: "Shukra Gata Vata", tm2Code: "TM2-104", tm2Term: "Reproductive Disorder", icd11Code: "GA30", icd11Term: "Male reproductive disorders" },
  { namasteCode: "N105", namasteTerm: "Ojas Kshaya", tm2Code: "TM2-105", tm2Term: "Vital Essence Depletion", icd11Code: "MG2Y.0", icd11Term: "General weakness" },
  { namasteCode: "N106", namasteTerm: "Tejas Vriddhi", tm2Code: "TM2-106", tm2Term: "Metabolic Hyperactivity", icd11Code: "5A10", icd11Term: "Hyperthyroidism" },
  { namasteCode: "N107", namasteTerm: "Prana Vata Vikruti", tm2Code: "TM2-107", tm2Term: "Breathing Disorder", icd11Code: "CA26", icd11Term: "Status asthmaticus" },
  { namasteCode: "N108", namasteTerm: "Udana Vata Vikruti", tm2Code: "TM2-108", tm2Term: "Speech Disorder", icd11Code: "MA80", icd11Term: "Speech disturbances" },
  { namasteCode: "N109", namasteTerm: "Samana Vata Vikruti", tm2Code: "TM2-109", tm2Term: "Digestive Disorder", icd11Code: "DA92", icd11Term: "Functional intestinal disorders" },
  { namasteCode: "N110", namasteTerm: "Apana Vata Vikruti", tm2Code: "TM2-110", tm2Term: "Excretory Disorder", icd11Code: "GC92", icd11Term: "Other functional urinary disorders" },
  { namasteCode: "N111", namasteTerm: "Vyana Vata Vikruti", tm2Code: "TM2-111", tm2Term: "Circulatory Disorder", icd11Code: "BD10", icd11Term: "Circulatory system disorders" },
  { namasteCode: "N112", namasteTerm: "Pachaka Pitta Vikruti", tm2Code: "TM2-112", tm2Term: "Digestive Fire Disorder", icd11Code: "DA90.1", icd11Term: "Functional digestive disorder" },
  { namasteCode: "N113", namasteTerm: "Ranjaka Pitta Vikruti", tm2Code: "TM2-113", tm2Term: "Blood Disorder", icd11Code: "3A90", icd11Term: "Other specified anaemias" },
  { namasteCode: "N114", namasteTerm: "Sadhaka Pitta Vikruti", tm2Code: "TM2-114", tm2Term: "Cognitive Disorder", icd11Code: "MB21", icd11Term: "Mild neurocognitive disorder" },
  { namasteCode: "N115", namasteTerm: "Alochaka Pitta Vikruti", tm2Code: "TM2-115", tm2Term: "Vision Disorder", icd11Code: "9D91", icd11Term: "Other visual disturbances" },
  { namasteCode: "N116", namasteTerm: "Bhrajaka Pitta Vikruti", tm2Code: "TM2-116", tm2Term: "Skin Pigmentation Disorder", icd11Code: "EA92", icd11Term: "Pigmentation disorders" },
  { namasteCode: "N117", namasteTerm: "Avalambaka Kapha Vikruti", tm2Code: "TM2-117", tm2Term: "Chest Congestion", icd11Code: "CA40", icd11Term: "Bronchiectasis" },
  { namasteCode: "N118", namasteTerm: "Kledaka Kapha Vikruti", tm2Code: "TM2-118", tm2Term: "Gastric Mucus Disorder", icd11Code: "DA85", icd11Term: "Other gastritis" },
  { namasteCode: "N119", namasteTerm: "Bodhaka Kapha Vikruti", tm2Code: "TM2-119", tm2Term: "Taste Disorder", icd11Code: "AB36", icd11Term: "Disturbances of taste" },
  { namasteCode: "N120", namasteTerm: "Tarpaka Kapha Vikruti", tm2Code: "TM2-120", tm2Term: "Neurological Fluid Disorder", icd11Code: "8B9Z", icd11Term: "Other neurological disorders" },
  { namasteCode: "N121", namasteTerm: "Sleshaka Kapha Vikruti", tm2Code: "TM2-121", tm2Term: "Joint Lubrication Disorder", icd11Code: "FB52", icd11Term: "Joint effusion" },
  { namasteCode: "N122", namasteTerm: "Rasa Dhatu Kshaya", tm2Code: "TM2-122", tm2Term: "Plasma Deficiency", icd11Code: "5B52", icd11Term: "Dehydration" },
  { namasteCode: "N123", namasteTerm: "Rakta Dhatu Kshaya", tm2Code: "TM2-123", tm2Term: "Blood Deficiency", icd11Code: "3A01", icd11Term: "Iron deficiency anaemia due to blood loss" },
  { namasteCode: "N124", namasteTerm: "Mamsa Dhatu Kshaya", tm2Code: "TM2-124", tm2Term: "Muscle Wasting", icd11Code: "FB01", icd11Term: "Muscle wasting" },
  { namasteCode: "N125", namasteTerm: "Meda Dhatu Kshaya", tm2Code: "TM2-125", tm2Term: "Fat Tissue Deficiency", icd11Code: "5B51.1", icd11Term: "Severe malnutrition with marasmus" },
  { namasteCode: "N126", namasteTerm: "Asthi Dhatu Kshaya", tm2Code: "TM2-126", tm2Term: "Bone Deficiency", icd11Code: "FB83", icd11Term: "Osteoporosis" },
  { namasteCode: "N127", namasteTerm: "Majja Dhatu Kshaya", tm2Code: "TM2-127", tm2Term: "Bone Marrow Deficiency", icd11Code: "3B91", icd11Term: "Aplastic anaemia" },
  { namasteCode: "N128", namasteTerm: "Shukra Dhatu Kshaya", tm2Code: "TM2-128", tm2Term: "Reproductive Tissue Deficiency", icd11Code: "GA01", icd11Term: "Male infertility due to oligospermia" },
  { namasteCode: "N129", namasteTerm: "Ama Dosha", tm2Code: "TM2-129", tm2Term: "Toxin Accumulation", icd11Code: "NE62", icd11Term: "Toxic effect of substances" },
  { namasteCode: "N130", namasteTerm: "Sama Vata", tm2Code: "TM2-130", tm2Term: "Vata with Toxins", icd11Code: "8B85", icd11Term: "Other specified nervous system disorders" },
  { namasteCode: "N131", namasteTerm: "Sama Pitta", tm2Code: "TM2-131", tm2Term: "Pitta with Toxins", icd11Code: "5C81", icd11Term: "Other specified endocrine disorders" },
  { namasteCode: "N132", namasteTerm: "Sama Kapha", tm2Code: "TM2-132", tm2Term: "Kapha with Toxins", icd11Code: "CA29", icd11Term: "Other chronic obstructive pulmonary disease" },
  { namasteCode: "N133", namasteTerm: "Nirama Vata", tm2Code: "TM2-133", tm2Term: "Pure Vata Disorder", icd11Code: "8B82.0", icd11Term: "Essential tremor" },
  { namasteCode: "N134", namasteTerm: "Nirama Pitta", tm2Code: "TM2-134", tm2Term: "Pure Pitta Disorder", icd11Code: "5A11.0", icd11Term: "Type 2 diabetes without complications" },
  { namasteCode: "N135", namasteTerm: "Nirama Kapha", tm2Code: "TM2-135", tm2Term: "Pure Kapha Disorder", icd11Code: "5B81.0", icd11Term: "Simple obesity" },
  { namasteCode: "N136", namasteTerm: "Srotodushti", tm2Code: "TM2-136", tm2Term: "Channel Obstruction", icd11Code: "BD11", icd11Term: "Vascular obstruction" },
  { namasteCode: "N137", namasteTerm: "Agnimandhya", tm2Code: "TM2-137", tm2Term: "Weak Digestive Fire", icd11Code: "DA90.2", icd11Term: "Functional dyspepsia" },
  { namasteCode: "N138", namasteTerm: "Agnisada", tm2Code: "TM2-138", tm2Term: "Irregular Digestive Fire", icd11Code: "DA91", icd11Term: "Other functional gastric disorders" },
  { namasteCode: "N139", namasteTerm: "Tikshagni", tm2Code: "TM2-139", tm2Term: "Hyperactive Digestive Fire", icd11Code: "5A10.0", icd11Term: "Thyrotoxicosis with diffuse goitre" },
  { namasteCode: "N140", namasteTerm: "Vishamagni", tm2Code: "TM2-140", tm2Term: "Irregular Appetite", icd11Code: "6B83", icd11Term: "Other specified feeding or eating disorder" },
  { namasteCode: "N141", namasteTerm: "Pranavahasrotas Dushti", tm2Code: "TM2-141", tm2Term: "Respiratory Channel Disorder", icd11Code: "CA2Z", icd11Term: "Other specified chronic respiratory diseases" },
  { namasteCode: "N142", namasteTerm: "Annavahasrotas Dushti", tm2Code: "TM2-142", tm2Term: "Food Channel Disorder", icd11Code: "DA93", icd11Term: "Other functional intestinal disorders" },
  { namasteCode: "N143", namasteTerm: "Udakavahasrotas Dushti", tm2Code: "TM2-143", tm2Term: "Water Channel Disorder", icd11Code: "GC93", icd11Term: "Other specified urinary disorders" },
  { namasteCode: "N144", namasteTerm: "Rasavahasrotas Dushti", tm2Code: "TM2-144", tm2Term: "Plasma Channel Disorder", icd11Code: "4B21", icd11Term: "Lymphatic vessel disorders" },
  { namasteCode: "N145", namasteTerm: "Raktavahasrotas Dushti", tm2Code: "TM2-145", tm2Term: "Blood Channel Disorder", icd11Code: "BD12", icd11Term: "Other vascular disorders" },
  { namasteCode: "N146", namasteTerm: "Mamsavahasrotas Dushti", tm2Code: "TM2-146", tm2Term: "Muscle Channel Disorder", icd11Code: "FB02", icd11Term: "Other myopathies" },
  { namasteCode: "N147", namasteTerm: "Medavahasrotas Dushti", tm2Code: "TM2-147", tm2Term: "Fat Channel Disorder", icd11Code: "5C90", icd11Term: "Other specified nutritional disorders" },
  { namasteCode: "N148", namasteTerm: "Asthivahasrotas Dushti", tm2Code: "TM2-148", tm2Term: "Bone Channel Disorder", icd11Code: "FB84", icd11Term: "Other bone disorders" },
  { namasteCode: "N149", namasteTerm: "Majjavahasrotas Dushti", tm2Code: "TM2-149", tm2Term: "Nerve Channel Disorder", icd11Code: "8C00", icd11Term: "Peripheral neuropathy" },
  { namasteCode: "N150", namasteTerm: "Shukravahasrotas Dushti", tm2Code: "TM2-150", tm2Term: "Reproductive Channel Disorder", icd11Code: "GA02", icd11Term: "Other male infertility" }
];

export default healthcareDataset;