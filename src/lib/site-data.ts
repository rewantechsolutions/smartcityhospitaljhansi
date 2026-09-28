export const HOSPITAL = {
  name: "Smart City Hospital",
  tagline: "Quality Healthcare with Compassion & Excellence",
  emergency: "+91 70801 50801",
  ambulance: "+91 70801 50802",
  landline1: "05102440003",
  landline2: "05102440004",
  whatsapp: "917080150801",
  instagram: "https://www.instagram.com/smartcityhospital.jhansi?stkn=MW13dXRmemVqZnR6aQ==",
  facebook: "https://www.facebook.com/profile.php?id=61570947070815",
  email: "info@smartcityhospital.org",
  hours: "OPD Mon–Sat 9:00 AM – 7:00 PM | Emergency 24×7",
  administrator: "Mr. Ashish Bhattacharya",
  address: "Near R.T.O. Office, in front of New Tehsil, Shivaji Nagar, Jhansi, Uttar Pradesh 284001",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Departments", to: "/departments" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Ayushman Bharat", to: "/ayushman-bharat" },
  
  { label: "Gallery", to: "/gallery" },
] as const;

export const STATS = [
  { value: 200, suffix: "+", label: "Bed Capacity" },
  { value: 50, suffix: "", label: "ICU Beds" },
  { value: 35, suffix: "+", label: "Experienced Doctors" },
  { value: 24, suffix: "×7", label: "Emergency Support" },
  { value: 2025, suffix: "", label: "Established" },
];

export const WHY_US = [
  { title: "Critical Care Support", desc: "Advanced ICU and critical care facilities focused on safe, attentive and timely patient management.", icon: "HeartPulse" },
  { title: "Multi-Speciality Care", desc: "Comprehensive healthcare services designed to support patients across multiple medical specialties under one roof.", icon: "Stethoscope" },
  { title: "Advanced Infrastructure", desc: "Patient-friendly hospital infrastructure supported by advanced medical technology and clinical facilities.", icon: "Activity" },
  { title: "24×7 Emergency", desc: "Round-the-clock emergency support for patients who need immediate medical attention.", icon: "Ambulance" },
  { title: "Diagnostics & Imaging", desc: "Advanced diagnostic and imaging support to help clinicians make timely treatment decisions.", icon: "MonitorHeart" },
  { title: "Experienced Care Team", desc: "A multidisciplinary healthcare team committed to compassionate, ethical and patient-centered care.", icon: "Stethoscope" },
];

export const DEPARTMENTS = [
  { name: "General Medicine", icon: "Stethoscope", desc: "Diagnosis and treatment of adult medical conditions." },
  { name: "General & Laparoscopic Surgery", icon: "Siren", desc: "General and minimally invasive surgical care." },
  { name: "Surgical Gastroenterology", icon: "HeartPulse", desc: "Surgical care for gastrointestinal and hepatobiliary conditions." },
  { name: "Medical Gastroenterology", icon: "HeartPulse", desc: "Medical diagnosis and treatment of digestive-system conditions." },
  { name: "Obstetrics & Gynaecology", icon: "Baby", desc: "Women’s health, obstetric and gynaecological care." },
  { name: "Paediatrics & Neonatology", icon: "Rabbit", desc: "Care for infants, children and newborns." },
  { name: "Orthopaedics & Joint Replacement", icon: "Bone", desc: "Bone, joint and joint-replacement care." },
  { name: "ENT", icon: "Stethoscope", desc: "Ear, nose and throat care." },
  { name: "Interventional Cardiology", icon: "HeartPulse", desc: "Cardiac assessment and interventional care." },
  { name: "Critical Care", icon: "MonitorHeart", desc: "Intensive monitoring and critical-care support." },
  { name: "Neurology", icon: "Activity", desc: "Care for neurological conditions." },
  { name: "Neuro & Endovascular Surgery", icon: "Activity", desc: "Neurosurgical and endovascular surgical care." },
  { name: "Urology", icon: "Stethoscope", desc: "Care for urinary-system and related conditions." },
  { name: "Dermatology", icon: "Stethoscope", desc: "Skin, hair and nail care." },
  { name: "Ophthalmology", icon: "Eye", desc: "Eye care and ophthalmic services." },
  { name: "Dental", icon: "Stethoscope", desc: "Dental and oral healthcare." },
  { name: "Psychiatry Including IPD", icon: "Stethoscope", desc: "Psychiatric care including inpatient support." },
  { name: "Anaesthesiology", icon: "Syringe", desc: "Anaesthesia and perioperative care." },
];

export const SERVICES = [
  { name: "ICU & Critical Care", icon: "MonitorHeart", desc: "Critical care facilities with focused monitoring and clinical support." },
  { name: "Trauma & Emergency Care", icon: "Siren", desc: "24×7 trauma and emergency care for patients requiring immediate medical attention." },
  { name: "Operation Theatre", icon: "Syringe", desc: "Operation theatre facilities supporting surgical treatment and patient safety." },
  { name: "Clinical Laboratory", icon: "TestTubes", desc: "Laboratory services supporting timely diagnostic reporting." },
  { name: "Radiology & Imaging", icon: "ScanLine", desc: "CT scan, X-ray, ultrasound, mammography, 2D echo, ECG and TMT services." },
  { name: "Ambulance", icon: "Ambulance", desc: "24-hour ambulance support for emergency and patient transport needs." },
  { name: "Pharmacy", icon: "Pill", desc: "24-hour pharmacy support for outpatient and inpatient medicine requirements." },
  { name: "Labour Room", icon: "Baby", desc: "24-hour labour-room services for maternity care." },
];

export const DOCTORS = [
  { name: "Dr. Shubhdeep M. W. Richi", spec: "Anaesthesiology & Critical Care", qual: "MBBS, MD, FCCS, CCIDS", role: "Administrator", initials: "SR" },
  { name: "Dr. P. K. Motish", spec: "Internal Medicine", qual: "MBBS, MD", initials: "PM" },
  { name: "Dr. Savita Tripathi", spec: "Medicine", qual: "MBBS, PGDM, PGDMHH", initials: "ST" },
  { name: "Dr. Utkarsh Shrivastava", spec: "Medicine", qual: "MBBS, DNB", initials: "US" },
  { name: "Dr. Saumya Gupta", spec: "Medicine", qual: "MBBS, DNB", initials: "SG" },
  { name: "Dr. Akansha Bhardwaj", spec: "Obstetrics & Gynaecology", qual: "MBBS, MS", initials: "AB" },
  { name: "Dr. Mukta Srivastava", spec: "Obstetrics & Gynaecology", qual: "MBBS, DGO", initials: "MS" },
  { name: "Dr. Dhananjay Saxena", spec: "HPB & Liver Transplant Surgery", qual: "MBBS, MS, MCh", initials: "DS" },
  { name: "Dr. Mratunjay Saxena", spec: "General & Laparoscopic Surgery", qual: "MBBS, MS", initials: "MS" },
  { name: "Dr. Sandeep Kumar Patel", spec: "Urology", qual: "MBBS, MS, MCh", initials: "SP" },
  { name: "Dr. Mridula Shukla", spec: "Nephrology", qual: "MBBS, MD, DM", initials: "MS" },
  { name: "Dr. Utkarsh Srivastava", spec: "ENT", qual: "MBBS, MS", initials: "US" },
  { name: "Dr. Vineet Kumar Mishra", spec: "Neurosurgery", qual: "MBBS, MCh", initials: "VM" },
  { name: "Dr. Aprajita Mishra", spec: "Orthodontics", qual: "BDS, MDS", initials: "AM" },
  { name: "Dr. Sumit", spec: "Gastroenterology", qual: "MBBS, MD, DM", initials: "DS" },
  { name: "Dr. Yash Jain", spec: "Orthopaedics", qual: "MBBS, MS, DNB", initials: "YJ" },
  { name: "Dr. Prateek Shivhare", spec: "Dermatology", qual: "MBBS, MD", initials: "PS" },
  { name: "Dr. Arijit Gaurav", spec: "Psychiatry", qual: "MBBS, DPM", initials: "AG" },
  { name: "Dr. Abhishek Gupta", spec: "Ophthalmology", qual: "MBBS, MS", initials: "AG" },

];

export const IMAGING_SERVICES = ["CT Scan", "X-Ray", "Ultrasound", "Mammography", "2D Echo", "ECG", "TMT"];
export const LAB_SERVICES = ["Cytopathology", "Haematology", "Serology", "Microbiology", "Histopathology", "Biochemistry"];
export const ROUND_THE_CLOCK_SERVICES = ["Trauma & Emergency Care", "Labour Room", "Operation Theatre", "Ambulance", "Pharmacy", "Laboratory", "Radiology"];

export const FACILITIES = [
  { name: "Intensive Care Unit", icon: "MonitorHeart", desc: "Advanced ICU and critical care facilities for patients requiring close monitoring." },
  { name: "Emergency Services", icon: "Siren", desc: "24×7 emergency support for immediate assessment and medical care." },
  { name: "Operation Theatre", icon: "Syringe", desc: "Advanced operation theatre infrastructure supporting surgical care." },
  { name: "Clinical Laboratory", icon: "TestTubes", desc: "Advanced laboratory support focused on reliable and timely diagnostic reporting." },
  { name: "In-house Pharmacy", icon: "Pill", desc: "Medicine support for both outpatient and inpatient requirements." },
  { name: "Inpatient Care", icon: "BedDouble", desc: "Patient-friendly inpatient facilities focused on safety, comfort and recovery." },
];



export const TESTIMONIALS = [
  { name: "Verified patient", city: "Jhansi", rating: 5, text: "Client-approved patient testimonial pending confirmation." },
  { name: "Verified patient", city: "Jhansi", rating: 5, text: "Client-approved patient testimonial pending confirmation." },
  { name: "Verified patient", city: "Jhansi", rating: 5, text: "Client-approved patient testimonial pending confirmation." },
  { name: "Verified patient", city: "Jhansi", rating: 5, text: "Client-approved patient testimonial pending confirmation." },
];

export const BLOG = [
  { cat: "Health Awareness", title: "Health article title pending client confirmation", read: "—", date: "To be confirmed" },
  { cat: "Patient Care", title: "Health article title pending client confirmation", read: "—", date: "To be confirmed" },
  { cat: "Wellness", title: "Health article title pending client confirmation", read: "—", date: "To be confirmed" },
  { cat: "Emergency Awareness", title: "Health article title pending client confirmation", read: "—", date: "To be confirmed" },
];

export const FAQS = [
  { q: "How do I contact Smart City Hospital?", a: "You can contact Smart City Hospital using the phone and email details shown on this website or visit the hospital near the R.T.O Office, Shivaji Nagar, Jhansi." },
  { q: "Is emergency care available?", a: "Yes. Smart City Hospital lists emergency services as available 24 hours a day, 7 days a week." },
  { q: "What are the OPD working hours?", a: "The hospital lists OPD hours as Monday to Saturday, 9:00 AM to 7:00 PM." },
  { q: "Does the hospital provide ICU and critical care?", a: "Yes. Smart City Hospital lists advanced ICU and critical care facilities among its hospital services." },
  { q: "Are diagnostic services available?", a: "Yes. The hospital lists advanced diagnostics, imaging and clinical laboratory services." },
  { q: "How can I confirm a specific doctor or treatment?", a: "Please contact Smart City Hospital directly to confirm the latest doctor availability, specialty schedule and treatment details." },
];

export const JOURNEY = [
  { step: "Appointment", desc: "Contact the hospital or use the existing appointment form to request a visit.", icon: "CalendarCheck" },
  { step: "Consultation", desc: "Meet the appropriate care team for clinical assessment and guidance.", icon: "Stethoscope" },
  { step: "Diagnosis", desc: "Complete the investigations advised by the treating clinician where required.", icon: "ScanLine" },
  { step: "Treatment", desc: "Receive a treatment plan based on the clinical assessment and diagnosis.", icon: "Syringe" },
  { step: "Recovery", desc: "Continue follow-up care and recovery guidance as advised by the care team.", icon: "HeartPulse" },
];

