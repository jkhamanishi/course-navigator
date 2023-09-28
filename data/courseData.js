// 1. Create coursesData.csv
// 2. Run it through csv2js-courses.html
// 3. Save data into this courseData.js file
// 4. Open courseData.js in Chrome and "Pretty-print" the file
// 5. Copy and paste back into this file

var courseData = {
    BUS207: {
        type: "course",
        name: "Managerial Economics",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["ECON103", "ECON105", "MATH151", ],
        concurrentOk: "",
        sPrereq: "",
        options: ["ECON201", ]
    },
    BUS232: {
        type: "course",
        name: "Business Statistics",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH151", ],
        concurrentOk: "",
        sPrereq: "15 units",
        options: []
    },
    BUS251: {
        type: "course",
        name: "Financial Accounting I",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "12 units",
        options: []
    },
    BUS254: {
        type: "course",
        name: "Managerial Accounting I",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["BUS251", ],
        concurrentOk: "",
        sPrereq: "15 units",
        options: []
    },
    BUS272: {
        type: "course",
        name: "Behaviour in Organizations",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "12 units",
        options: []
    },
    BUS312: {
        type: "course",
        name: "Introduction to Finance",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["BUS254", ],
        concurrentOk: "",
        sPrereq: "45 units",
        options: []
    },
    BUS343: {
        type: "course",
        name: "Introduction to Marketing",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "45 units",
        options: []
    },
    BUS360W: {
        type: "course",
        name: "Business Communication",
        units: 4,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "45 units",
        options: []
    },
    BUS381: {
        type: "course",
        name: "Introduction to Human Resource Management",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["BUS272", ],
        concurrentOk: "",
        sPrereq: "45 units",
        options: []
    },
    BUS393: {
        type: "course",
        name: "Commercial Law",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "45 units",
        options: []
    },
    BUS478: {
        type: "course",
        name: "Strategy",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["BUS207", "BUS312", "BUS343", "BUS360W", "BUS381", ],
        concurrentOk: "",
        sPrereq: "90 units",
        options: []
    },
    BUS3XX: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    BUS3XX2: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    BUS3XX3: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    BUS4XX: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    BUS4XX2: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    BUS4XX3: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    BUS4XX4: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    BUS4XX5: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    BUS4XX6: {
        type: "business elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    CHEM120: {
        type: "course",
        name: "General Chemistry I",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    CMPT130: {
        type: "course",
        name: "Introduction to Computer Programming I",
        units: 3,
        terms: ["Fall", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    COOP: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE293", "MSE294", "MSE393", "MSE394", "MSE493", "MSE494", ]
    },
    COOP2: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE293", "MSE294", "MSE393", "MSE394", "MSE493", "MSE494", ]
    },
    COOP3: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE293", "MSE294", "MSE393", "MSE394", "MSE493", "MSE494", ]
    },
    COOP4: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE293", "MSE294", "MSE393", "MSE394", "MSE493", "MSE494", ]
    },
    COOP5: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE293", "MSE294", "MSE393", "MSE394", "MSE493", "MSE494", ]
    },
    COOP6: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE293", "MSE294", "MSE393", "MSE394", "MSE493", "MSE494", ]
    },
    ECON103: {
        type: "course",
        name: "Principles of Microeconomics",
        units: 4,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    ECON105: {
        type: "course",
        name: "Principles of Macroeconomics",
        units: 4,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    ECON113: {
        type: "course",
        name: "Introduction to Microeconomics",
        units: 3,
        terms: ["Fall", "Spring", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    ECON115: {
        type: "course",
        name: "Introduction to Macroeconomics",
        units: 3,
        terms: ["Fall", "Spring", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    ECON201: {
        type: "course",
        name: "Microeconomic Theory I: Competitive Behavior",
        units: 4,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["ECON103", "ECON105", "MATH151", ],
        concurrentOk: "",
        sPrereq: "",
        options: ["BUS207", ]
    },
    Elective: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: []
    },
    Elective2: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: []
    },
    Elective3: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: []
    },
    Elective4: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: []
    },
    Elective5: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: []
    },
    Elective6: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: []
    },
    MATH151: {
        type: "course",
        name: "Calculus I",
        units: 3,
        terms: ["Fall", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MATH152: {
        type: "course",
        name: "Calculus II",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH151", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MATH232: {
        type: "course",
        name: "Applied Linear Algebra",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH151", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MATH251: {
        type: "course",
        name: "Calculus III",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH152", "MATH232", ],
        concurrentOk: "MATH232",
        sPrereq: "",
        options: []
    },
    MATH260: {
        type: "course",
        name: "Introduction to Ordinary Differential Equations",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH232", "MATH152", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE100: {
        type: "course",
        name: "Engineering Graphics and Design",
        units: 3,
        terms: ["Fall", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE101W: {
        type: "course",
        name: "Process Form and Convention in Professional Genres",
        units: 3,
        terms: ["Spring", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE102: {
        type: "course",
        name: "Applied Science Technology and Society",
        units: 3,
        terms: ["Spring", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE110: {
        type: "course",
        name: "Mechatronics Design I",
        units: 3,
        terms: ["Fall", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE210: {
        type: "course",
        name: "Engineering Measurement and Data Analysis",
        units: 3,
        terms: ["Spring", ],
        prereqs: ["PHYS141", "MATH151", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE211: {
        type: "course",
        name: "Computational Methods for Engineers",
        units: 3,
        terms: ["Spring", ],
        prereqs: ["MATH232", "MATH152", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE220: {
        type: "course",
        name: "Engineering Materials",
        units: 3,
        terms: ["Fall", ],
        prereqs: ["CHEM120", "PHYS140", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE221: {
        type: "course",
        name: "Statics and Strength of Materials",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["PHYS140", "MATH152", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE222: {
        type: "course",
        name: "Kinematics and Dynamics of Rigid Bodies and Mechanisms",
        units: 4,
        terms: ["Spring", ],
        prereqs: ["PHYS140", "MATH260", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE223: {
        type: "course",
        name: "Introduction to Fluid Mechanics",
        units: 4,
        terms: ["Spring", ],
        prereqs: ["PHYS140", "MATH260", "MATH251", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE250: {
        type: "course",
        name: "Electric Circuits",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["PHYS141", "MATH260", ],
        concurrentOk: "MATH260",
        sPrereq: "",
        options: []
    },
    MSE251: {
        type: "course",
        name: "Electronic Circuits",
        units: 4,
        terms: ["Spring", ],
        prereqs: ["MSE250", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE280: {
        type: "course",
        name: "Linear Systems",
        units: 3,
        terms: ["Spring", ],
        prereqs: ["MSE250", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE293: {
        type: "coop option",
        name: "Industrial Internship I",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "30 units",
        options: ["COOP", ]
    },
    MSE294: {
        type: "coop option",
        name: "Special Internship I",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "30 units",
        options: ["COOP", ]
    },
    MSE300: {
        type: "course",
        name: "The Business of Engineering I",
        units: 3,
        terms: ["Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "75 units",
        options: []
    },
    MSE310: {
        type: "course",
        name: "Introduction to Electro-Mechanical Sensors and Actuators",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["MSE280", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE311: {
        type: "course",
        name: "Introduction to Microelectromechanical Systems",
        units: 3,
        terms: ["Summer", ],
        prereqs: ["MSE251", "MSE222", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE312: {
        type: "course",
        name: "Mechatronics Design II",
        units: 4,
        terms: ["Summer", ],
        prereqs: ["MSE320", "MSE381", "MSE110", ],
        concurrentOk: "MSE381",
        sPrereq: "",
        options: []
    },
    MSE320: {
        type: "course",
        name: "Machine Design",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["MSE220", "MSE100", "MSE221", ],
        concurrentOk: "MSE100",
        sPrereq: "",
        options: []
    },
    MSE321: {
        type: "course",
        name: "Engineering Thermodynamics and Heat Transfer",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["MSE223", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE352: {
        type: "course",
        name: "Digital Logic and Microcontrollers",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["CMPT130", "MSE251", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE353: {
        type: "course",
        name: "Power Electronics and Electric Machinery",
        units: 4,
        terms: ["Summer", ],
        prereqs: ["MSE251", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE380: {
        type: "course",
        name: "Systems Modeling and Simulation",
        units: 3,
        terms: ["Fall", ],
        prereqs: ["MSE280", "MSE221", "MSE222", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE381: {
        type: "course",
        name: "Feedback Control Systems",
        units: 4,
        terms: ["Summer", ],
        prereqs: ["MSE280", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE393: {
        type: "coop option",
        name: "Industrial Internship II",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "MSE293 or MSE294",
        options: ["COOP", ]
    },
    MSE394: {
        type: "coop option",
        name: "Special Internship II",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "MSE293 or MSE294",
        options: ["COOP", ]
    },
    MSE402: {
        type: "course",
        name: "Engineering Ethics Law and Professional Practice",
        units: 2,
        terms: ["Spring", ],
        prereqs: ["MSE102", ],
        concurrentOk: "",
        sPrereq: "100 units",
        options: []
    },
    MSE405W: {
        type: "course",
        name: "The Business of Engineering II & Entrepreneurship for Engineers",
        units: 4,
        terms: ["Summer", ],
        prereqs: ["MSE300", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE410: {
        type: "course",
        name: "Capstone Design Technical Project I",
        units: 3,
        terms: ["Spring", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "24 upper level MSE units and two co-op terms",
        options: []
    },
    MSE411: {
        type: "course",
        name: "Capstone Design Technical Project II",
        units: 3,
        terms: ["Summer", ],
        prereqs: ["MSE410", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    MSE420: {
        type: "technical elective option",
        name: "Introduction to Biomechanical Engineering",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE220", "MSE222", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE421: {
        type: "technical elective option",
        name: "Advanced Vibration",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE380", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE422: {
        type: "technical elective option",
        name: "Fuel Cell Systems ",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE321", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE423: {
        type: "technical elective option",
        name: "Energy Conversion",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE321", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE424: {
        type: "technical elective option",
        name: "Microfluidics ",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE321", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE425: {
        type: "technical elective option",
        name: "Nano Manufacturing",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["CHEM120", "PHYS141", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE426: {
        type: "technical elective option",
        name: "Introduction to Engineering Design Optimization",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH251", "MSE320", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE427: {
        type: "technical elective option",
        name: "Finite Element Analysis",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE280", "MSE380", "MSE321", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE428: {
        type: "technical elective option",
        name: "Design of Mechanism",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE100", "MSE222", ],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE4XX", ]
    },
    MSE429: {
        type: "technical elective option",
        name: "Advanced Kinematics for Robotic System",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE222", ],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE4XX", ]
    },
    MSE450: {
        type: "technical elective option",
        name: "Real-Time and Embedded Control Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE352", "MSE381", ],
        concurrentOk: "",
        sPrereq: "90 credits",
        options: ["MSE4XX", ]
    },
    MSE451: {
        type: "technical elective option",
        name: "Advanced Electronic Circuits",
        units: 4,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE251", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE452: {
        type: "technical elective option",
        name: "Power Conversion in Alternative Energy Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE353", ],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE4XX", ]
    },
    MSE480: {
        type: "technical elective option",
        name: "Manufacturing Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE310", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE481: {
        type: "technical elective option",
        name: "Industrial Control Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE352", "MSE381", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE483: {
        type: "technical elective option",
        name: "Modern Control Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE381", ],
        concurrentOk: "",
        sPrereq: "80 credits",
        options: ["MSE4XX", ]
    },
    MSE490: {
        type: "technical elective option",
        name: "Special Topic in Mechatronic Systems Engineering",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: ["MSE4XX", ]
    },
    MSE491: {
        type: "technical elective option",
        name: "Special Topic in Mechatronic Systems Engineering",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: ["MSE4XX", ]
    },
    MSE492: {
        type: "technical elective option",
        name: "Special Topic in Mechatronic Systems Engineering",
        units: 4,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "???",
        options: ["MSE4XX", ]
    },
    MSE493: {
        type: "coop option",
        name: "Industrial Internship III",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "MSE393 or MSE394",
        options: ["COOP", ]
    },
    MSE494: {
        type: "coop option",
        name: "Special Internship III",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "MSE393 or MSE394",
        options: ["COOP", ]
    },
    MSE4XX: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE420", "MSE421", "MSE422", "MSE423", "MSE424", "MSE425", "MSE426", "MSE427", "MSE428", "MSE429", "MSE450", "MSE451", "MSE452", "MSE480", "MSE481", "MSE483", "MSE490", "MSE491", "MSE492", ]
    },
    MSE4XX2: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE420", "MSE421", "MSE422", "MSE423", "MSE424", "MSE425", "MSE426", "MSE427", "MSE428", "MSE429", "MSE450", "MSE451", "MSE452", "MSE480", "MSE481", "MSE483", "MSE490", "MSE491", "MSE492", ]
    },
    MSE4XX3: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE420", "MSE421", "MSE422", "MSE423", "MSE424", "MSE425", "MSE426", "MSE427", "MSE428", "MSE429", "MSE450", "MSE451", "MSE452", "MSE480", "MSE481", "MSE483", "MSE490", "MSE491", "MSE492", ]
    },
    MSE4XX4: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE420", "MSE421", "MSE422", "MSE423", "MSE424", "MSE425", "MSE426", "MSE427", "MSE428", "MSE429", "MSE450", "MSE451", "MSE452", "MSE480", "MSE481", "MSE483", "MSE490", "MSE491", "MSE492", ]
    },
    MSE4XX5: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE420", "MSE421", "MSE422", "MSE423", "MSE424", "MSE425", "MSE426", "MSE427", "MSE428", "MSE429", "MSE450", "MSE451", "MSE452", "MSE480", "MSE481", "MSE483", "MSE490", "MSE491", "MSE492", ]
    },
    MSE4XX6: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE420", "MSE421", "MSE422", "MSE423", "MSE424", "MSE425", "MSE426", "MSE427", "MSE428", "MSE429", "MSE450", "MSE451", "MSE452", "MSE480", "MSE481", "MSE483", "MSE490", "MSE491", "MSE492", ]
    },
    MSE4XX7: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE420", "MSE421", "MSE422", "MSE423", "MSE424", "MSE425", "MSE426", "MSE427", "MSE428", "MSE429", "MSE450", "MSE451", "MSE452", "MSE480", "MSE481", "MSE483", "MSE490", "MSE491", "MSE492", ]
    },
    MSE4XX8: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: ["MSE420", "MSE421", "MSE422", "MSE423", "MSE424", "MSE425", "MSE426", "MSE427", "MSE428", "MSE429", "MSE450", "MSE451", "MSE452", "MSE480", "MSE481", "MSE483", "MSE490", "MSE491", "MSE492", ]
    },
    PHYS140: {
        type: "course",
        name: "Studio Physics - Mechanics and Modern Physics",
        units: 4,
        terms: ["Fall", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "",
        options: []
    },
    PHYS141: {
        type: "course",
        name: "Studio Physics - Optics Electricity and Magnetism",
        units: 4,
        terms: ["Spring", ],
        prereqs: ["PHYS140", ],
        concurrentOk: "",
        sPrereq: "",
        options: []
    }
};
