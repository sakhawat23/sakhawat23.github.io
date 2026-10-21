/* All site content lives here. Edit this file to update the website.
   Source: CV (cv_2026.tex). */

window.SITE = {
  updated: "October 21, 2026",

  personal: {
    name: "M. S. Hossen", // used to bold your name in author lists
    fullName: "Md. Sakhawat Hossen",
    title: "Professor, Department of Computer Science and Engineering · University Librarian (In-Charge) · Islamic University of Technology (IUT)",
    about:
      "I am a Professor in the Department of Computer Science and Engineering at the Islamic University of Technology (IUT), Gazipur, Bangladesh, where I also serve as University Librarian (In-Charge). " +
      "I received my Ph.D. in Computer Science and Engineering from IUT, my M.Sc. in Information Technology from the Royal Institute of Technology (KTH), Stockholm, Sweden, and my B.Sc. in Computer Science and Engineering from IUT. " +
      "I coordinate the Network Research Group at CSE, IUT. My research spans device-to-device (D2D) communication, network optimization, vehicular ad hoc networks (VANET), software defined networks (SDN), network and internet security, blockchain, wireless and mobile communication, and deep learning.",
    aboutLinks: [
      { text: "Islamic University of Technology (IUT)", url: "https://www.iutoic-dhaka.edu/" },
      { text: "Royal Institute of Technology (KTH)", url: "https://www.kth.se/en" }
    ]
  },

  // Add Google Scholar, ResearchGate, LinkedIn, ORCID, etc. here.
  links: [
    { label: "Email", url: "mailto:sakhawat@iut-dhaka.edu" }
  ],

  experience: [
    { role: "Professor", org: "Department of CSE, Islamic University of Technology (IUT)", location: "Gazipur, Bangladesh", period: "Sep 2024 – Present" },
    { role: "University Librarian (In-Charge)", org: "Islamic University of Technology (IUT)", location: "Gazipur, Bangladesh", period: "Aug 2026 – Present" },
    { role: "Associate Professor", org: "Department of CSE, Islamic University of Technology (IUT)", location: "Gazipur, Bangladesh", period: "Nov 2022 – Sep 2024" },
    { role: "Assistant Professor", org: "Department of CSE, Islamic University of Technology (IUT)", location: "Gazipur, Bangladesh", period: "Aug 2011 – Nov 2022" },
    { role: "Assistant Professor", org: "Department of CSE, American International University-Bangladesh (AIUB)", location: "Dhaka, Bangladesh", period: "Sep 2010 – Aug 2011" },
    { role: "Lecturer", org: "Department of CSE, Stamford University Bangladesh", location: "Dhaka, Bangladesh", period: "Mar 2005 – Aug 2007" }
  ],

  service: {
    current: [
      { role: "University Librarian (In-Charge)", org: "Islamic University of Technology (IUT)", period: "Aug 2026 – Present" },
      { role: "Member", org: "Moderation and Strong-room Committee, CSE, IUT", period: "Present" },
      { role: "Member", org: "Tabulation Committee, CSE, IUT", period: "Present" },
      { role: "Member", org: "Self Assessment Committee (SAC), CSE, IUT", period: "Present" },
      { role: "Member", org: "Post Graduation Committee (PGC), CSE, IUT", period: "Present" }
    ],
    former: [
      { role: "Deputy Head", org: "Office of the Student Welfare, IUT", period: "Sep 2023 – Nov 2024" },
      { role: "Chairman", org: "Student Transportation Committee, IUT", period: "Sep 2023 – Nov 2024" },
      { role: "Member Secretary", org: "Anti-Immodesty Committee, IUT", period: "Jan 2023 – Nov 2024" },
      { role: "Member", org: "Anti-ragging Committee, IUT", period: "Jan 2018 – Nov 2024" }
    ],
    professional: [
      { role: "Coordinator", org: "Network Research Group, CSE, IUT" },
      { role: "Reviewer", org: "IEEE Access" },
      { role: "Reviewer", org: "International Conference on Next-Generation Computing, IoT and Machine Learning (NCIM 2023)" },
      { role: "Member", org: "Sub-committee for seating arrangement, invigilation and co-ordination, Admission Test, IUT (2021–2023)" },
      { role: "Course Official and Resource Person", org: "Short Course on Cyber Security for Information Age: Practices and Challenges (2022)" },
      { role: "Member", org: "Institute of Electrical and Electronics Engineers (IEEE)" },
      { role: "Member", org: "IUT Alumni Association (IUTAA)" }
    ]
  },

  education: [
    { degree: "Ph.D. in Computer Science and Engineering", school: "Islamic University of Technology (IUT)", location: "Gazipur, Bangladesh", period: "2022",
      note: "CGPA 4.00/4.00. Thesis: Capacity and Interference-Aware Resource Allocations for Underlay Device-to-Device Communications." },
    { degree: "M.Sc. in Information Technology", school: "Royal Institute of Technology (KTH)", location: "Stockholm, Sweden", period: "2010",
      note: "ECTS grade A in 67.5 credits, grade B in 54 credits. Thesis: A Session Initiation Protocol User Agent with Key Escrow: Providing authenticity for recordings of secure sessions." },
    { degree: "B.Sc. in Computer Science and Engineering", school: "Islamic University of Technology (IUT)", location: "Gazipur, Bangladesh", period: "2004",
      note: "CGPA 4.81/5.00. Thesis: Developing new evolutionary optimization models and study their applicability." }
  ],

  research: [
    { name: "Device-to-Device Communication", text: "Applying reinforcement learning and deep learning for resource and power optimization in future device-to-device communication." },
    { name: "VANET", text: "Time-series analysis of traffic flow prediction using Temporal Fusion Transformers." },
    { name: "SDN", text: "A graph-theoretic mathematical model for versatility in the controller placement problem in large-scale software defined networks." },
    { name: "Blockchain", text: "Blockchain for low-power IoT devices using an optimised consensus protocol based on multicasting, layering and off-chain methods instead of traditional broadcasting." },
    { name: "Quantum Machine Learning", text: "Optimal structures and methods for utilizing qubits in quantum machine learning." }
  ],

  teaching: [
    "Computer Networks", "Data and Telecommunications", "Communication Engineering", "Internet Engineering",
    "Cryptography and Network Security", "Computer Programming", "Information Security", "Operating Systems"
  ],

  awards: [
    { title: "Full tuition fee waiver", text: "Doctor of Philosophy Program, IUT (2013–2022)" },
    { title: "M.Sc. tuition fee waiver", text: "Royal Institute of Technology (KTH), Stockholm, Sweden (2007–2009)" },
    { title: "Organization of the Islamic Cooperation (OIC) Scholarship", text: "Undergraduate Program (2001)" },
    { title: "Government Scholarship", text: "Higher Secondary Certificate (2000)" },
    { title: "Government Scholarship", text: "Secondary School Certificate (1998)" }
  ],

  contact: {
    email: "sakhawat@iut-dhaka.edu",
    office: "Department of Computer Science and Engineering, Islamic University of Technology (IUT)",
    location: "Board Bazar, Gazipur 1704, Bangladesh",
    note: "I welcome enquiries from prospective graduate students and collaborators working on wireless networks, network optimization, machine learning for networking, network security and blockchain."
  }
};

/* Publications, newest first. type: "journal" | "conference" | "review" (under review). */
window.PUBS = [
  { year: 2026, type: "journal", title: "PoPI: A machine learning-based consensus mechanism for blockchain-enabled IoT systems",
    authors: "M. K. Dihan, Abdullah, Amina, F. Hussain, M. Moniruzzaman, M. S. Hossen",
    venue: "PLoS One, 21(4): e0347124", doi: "10.1371/journal.pone.0347124" },
  { year: 2025, type: "journal", title: "Interference-Aware Resource Allocation for D2D Communication With Individual Data Rate Constraints",
    authors: "M. S. Hossen, F. Hussain, M. M. Alam",
    venue: "International Journal of Communication Systems (Wiley), 38(15)", doi: "10.1002/dac.70215" },
  { year: 2025, type: "journal", title: "Zero-shot performance analysis of large language models in sumrate maximization",
    authors: "A. A. Shuvro, M. S. I. Bhuiyan, F. Hussain, M. S. Hossen",
    venue: "PLoS One, 20(8): e0329674", doi: "10.1371/journal.pone.0329674" },
  { year: 2025, type: "conference", title: "Quantum Machine Learning for Anomaly Detection in IoT Devices",
    authors: "S. A. Chowdhury, S. F. Karim, M. S. I. Bhuiyan, A. A. Shuvro, M. S. Hossen",
    venue: "5th International Conference on AI-ML-Systems (AIMLSystems), Bangalore, India, pp. 1–6", doi: "10.1109/AIMLSystems67835.2025.11331191" },
  { year: 2025, type: "journal", title: "Time-series Multivariate Multistep Traffic Flow Forecasting using Temporal Fusion Transformers",
    authors: "S. S. Arnob, A. A. Shuvro, S. Rahman, M. Moniruzzaman, M. S. Hossen",
    venue: "International Journal of Intelligent Transportation Systems Research (Springer)" },
  { year: 2024, type: "journal", title: "Efficient Power Control and Resource Allocation for LTE-D2D Communication: A Multi-Objective Optimization Approach",
    authors: "F. Hussain, M. A. Khan, M. Moniruzzaman, M. M. Alam, M. S. Hossen",
    venue: "IEEE Access, 12, 61467–61483", badge: "Q1" },
  { year: 2023, type: "journal", title: "Transformer Based Traffic Flow Forecasting in SDN-VANET",
    authors: "A. A. Shuvro, M. S. Khan, M. Rahman, F. Hussain, M. Moniruzzaman, M. S. Hossen",
    venue: "IEEE Access, 11, 41816–41826", badge: "Q1" },
  { year: 2019, type: "journal", title: "A localized fault tolerant load balancing algorithm for RFID systems",
    authors: "A. Munir, M. T. R. Laskar, M. S. Hossen, S. Choudhury",
    venue: "Journal of Ambient Intelligence and Humanized Computing (Springer), 10(11), 4305–4317", badge: "Q1" },
  { year: 2019, type: "journal", title: "An online resource allocation algorithm to minimize system interference for inband underlay D2D communications",
    authors: "M. Y. Hassan, F. Hussain, M. S. Hossen, S. Choudhury",
    venue: "International Journal of Communication Systems (Wiley), 32(13), e4011", badge: "Q2" },
  { year: 2019, type: "conference", title: "Degree-based Balanced Clustering for Large-Scale Software Defined Networks",
    authors: "T. I. Aziz, S. Protik, M. S. Hossen, S. Choudhury, M. M. Alam",
    venue: "IEEE Wireless Communications and Networking Conference (WCNC), pp. 1–6" },
  { year: 2018, type: "journal", title: "Relax online resource allocation algorithms for D2D communication",
    authors: "M. S. Hossen, M. Y. Hassan, F. Hussain, S. Choudhury, M. M. Alam",
    venue: "International Journal of Communication Systems (Wiley), 31(10), e3555", badge: "Q2" },
  { year: 2018, type: "journal", title: "System capacity maximization with efficient resource allocation algorithms in D2D communication",
    authors: "F. Hussain, M. Y. Hassan, M. S. Hossen, S. Choudhury",
    venue: "IEEE Access, 6, 32409–32424", badge: "Q1" },
  { year: 2017, type: "journal", title: "Interference minimization in D2D communication underlaying cellular networks",
    authors: "M. Y. Hassan, F. Hussain, M. S. Hossen, S. Choudhury, M. M. Alam",
    venue: "IEEE Access, 5, 22471–22484", badge: "Q1" },
  { year: 2017, type: "conference", title: "A near optimal interference minimization resource allocation algorithm for D2D communication",
    authors: "M. Y. Hassan, F. Hussain, M. S. Hossen, S. Choudhury, M. M. Alam",
    venue: "IEEE International Conference on Communications (ICC), pp. 1–6" },
  { year: 2017, type: "conference", title: "An optimal resource allocation algorithm for D2D communication underlaying cellular networks",
    authors: "F. Hussain, M. Y. Hassan, M. S. Hossen, S. Choudhury",
    venue: "14th IEEE Annual Consumer Communications & Networking Conference (CCNC), pp. 867–872" },
  { year: 2016, type: "journal", title: "Localized Motion Planning Algorithm for Mobile Wireless Sensor Networks",
    authors: "A. Munir, S. Uzzaman, M. S. Hossen, S. Choudhury, M. M. Alam",
    venue: "International Journal of Unconventional Computing, 12(5–6), 363–391", badge: "Q3" },
  { year: 2016, type: "conference", title: "Localized load balancing in RFID systems",
    authors: "A. Munir, M. S. Hossen, S. Choudhury",
    venue: "International Conference on Theory and Practice of Natural Computing (TPNC), Springer, pp. 34–45" },
  { year: 2011, type: "journal", title: "Compound local binary pattern (CLBP) for rotation invariant texture classification",
    authors: "F. Ahmed, E. Hossain, A. S. M. H. Bari, M. S. Hossen",
    venue: "International Journal of Computer Applications, 33(6), 5–10" },
  { year: 2010, type: "journal", title: "Interconnection between 802.15.4 Devices and IPv6: Implications and Existing Approaches",
    authors: "M. S. Hossen, A. F. M. Kabir, R. H. Khan, A. Azfar",
    venue: "International Journal of Computer Science Issues (IJCSI), 7(1), 19–31" },
  { year: 2010, type: "journal", title: "Location based services using SIP",
    authors: "A. Azfar, M. S. Hossen, M. J. P. Marval, R. H. Khan",
    venue: "International Journal of Engineering Science and Technology (IJEST), 2(10), 4983–4988" },
  { year: 2009, type: "journal", title: "SIP mobility modes: Application layer and data link layer",
    authors: "A. Azfar, M. S. Hossen, R. H. Khan",
    venue: "International Journal of Computer Science and Network Security (IJCSNS), 9(12), 258–264" },
  { year: 2009, type: "journal", title: "Adaptive Particle Swarm Optimization (APSO) for multimodal function optimization",
    authors: "M. S. Hossen, F. Rabbi, M. M. Rahman",
    venue: "International Journal of Engineering and Technology (IJET), 1(3), 98–103" },
  { year: 2009, type: "conference", title: "Policy based intrusion detection and response system in hierarchical WSN architecture",
    authors: "M. S. I. Mamun, A. F. M. S. Kabir, M. S. Hossen, R. H. Khan",
    venue: "International Conference on Wireless VITAE, Aalborg, Denmark, IEEE, pp. 303–307" },
  { year: 2008, type: "conference", title: "A Novel Overlay IDS for Wireless Sensor Networks",
    authors: "S. Saha, M. S. Islam, M. S. Hossen, M. S. I. Mamun",
    venue: "IADIS Wireless Applications and Computing (WAC 2008), MCCSIS, Amsterdam, The Netherlands, pp. 144–148" },
  { year: 2008, type: "conference", title: "MC-CDMA: An alternative multiple access technique in 3G wireless architecture",
    authors: "R. H. Khan, A. Ahsan, M. Haque, A. S. Kabir, M. S. Hossen",
    venue: "International Conference on Complex, Intelligent and Software Intensive Systems (CISIS), IEEE, pp. 573–578" },
  { year: 2005, type: "conference", title: "Particle Swarm Optimizer with Immune Technology (PSOIT): A new Hybridized Optimization Technique for solving Multi-Objective Optimization Problems",
    authors: "F. Rabbi, M. S. Hossen, M. M. Rahman, S. A. Hoque, M. A. Mottalib",
    venue: "International Conference on Computer and Information Technology (ICCIT), IUT, pp. 75–80" },
  { year: 2005, type: "conference", title: "A New Particle Swarm Optimizer Vaccinated by Artificial Immune System (PSOVIS) for Constrained Nonlinear Optimization Problems",
    authors: "F. Rabbi, M. S. Hossen, M. M. Rahman, S. A. Hoque, M. A. Mottalib",
    venue: "International Conference on Computer and Information Technology (ICCIT), IUT, pp. 34–39" }
];

window.UNDER_REVIEW = [
  { title: "Towards Minimizing Interference and Ensuring Competitive Individual Sumrate in D2D Communication: An Algorithmic Approach for Resource Sharing",
    authors: "M. S. Hossen, F. Hussain, M. M. Alam",
    venue: "Submitted to International Journal of Communication Systems (Wiley)" }
];
