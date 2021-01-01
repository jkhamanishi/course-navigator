// 1. Create coursesData.csv
// 2. Run it through csv2js-courses.html
// 3. Save data into this courseData.js file
// 4. Open courseData.js in Chrome and "Pretty-print" the file
// 5. Copy and paste back into this file

var courseData = {
    CHEM120: {
        type: "course",
        name: "General Chemistry I",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    CMPT130: {
        type: "course",
        name: "Introduction to Computer Programming I",
        units: 3,
        terms: ["Fall", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    COOP: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    COOP2: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    COOP3: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    COOP4: {
        type: "coop",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    Elective: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    Elective2: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    Elective3: {
        type: "complementary elective",
        name: "",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MATH151: {
        type: "course",
        name: "Calculus I",
        units: 3,
        terms: ["Fall", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MATH152: {
        type: "course",
        name: "Calculus II",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH151", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MATH232: {
        type: "course",
        name: "Applied Linear Algebra",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH151", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MATH251: {
        type: "course",
        name: "Calculus III",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH152", "MATH232", ],
        concurrentOk: "MATH232",
        sPrereq: ""
    },
    MATH260: {
        type: "course",
        name: "Introduction to Ordinary Differential Equations",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH232", "MATH152", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE100: {
        type: "course",
        name: "Engineering Graphics and Design",
        units: 3,
        terms: ["Fall", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE101W: {
        type: "course",
        name: "Process Form and Convention in Professional Genres",
        units: 3,
        terms: ["Fall", "Spring", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE102: {
        type: "course",
        name: "Applied Science Technology and Society",
        units: 3,
        terms: ["Fall", "Spring", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE110: {
        type: "course",
        name: "Mechatronics Design I",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE210: {
        type: "course",
        name: "Engineering Measurement and Data Analysis",
        units: 3,
        terms: ["Spring", ],
        prereqs: ["PHYS141", "MATH151", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE211: {
        type: "course",
        name: "Computational Methods for Engineers",
        units: 3,
        terms: ["Spring", ],
        prereqs: ["MATH232", "MATH152", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE220: {
        type: "course",
        name: "Engineering Materials",
        units: 3,
        terms: ["Fall", ],
        prereqs: ["CHEM120", "PHYS140", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE221: {
        type: "course",
        name: "Statics and Strength of Materials",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["PHYS140", "MATH152", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE222: {
        type: "course",
        name: "Kinematics and Dynamics of Rigid Bodies and Mechanisms",
        units: 4,
        terms: ["Spring", ],
        prereqs: ["PHYS140", "MATH260", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE223: {
        type: "course",
        name: "Introduction to Fluid Mechanics",
        units: 4,
        terms: ["Spring", ],
        prereqs: ["PHYS140", "MATH260", "MATH251", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE250: {
        type: "course",
        name: "Electric Circuits",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["PHYS141", "MATH260", ],
        concurrentOk: "MATH260",
        sPrereq: ""
    },
    MSE251: {
        type: "course",
        name: "Electronic Circuits",
        units: 4,
        terms: ["Spring", ],
        prereqs: ["MSE250", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE280: {
        type: "course",
        name: "Linear Systems",
        units: 3,
        terms: ["Spring", ],
        prereqs: ["MSE250", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE293: {
        type: "coop option",
        name: "Industrial Internship I",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE294: {
        type: "coop option",
        name: "Special Internship I",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE300: {
        type: "course",
        name: "The Business of Engineering I",
        units: 3,
        terms: ["Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "75 units"
    },
    MSE310: {
        type: "course",
        name: "Introduction to Electro-Mechanical Sensors and Actuators",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["MSE280", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE311: {
        type: "course",
        name: "Introduction to Microelectromechanical Systems",
        units: 3,
        terms: ["Summer", ],
        prereqs: ["MSE251", "MSE222", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE312: {
        type: "course",
        name: "Mechatronics Design II",
        units: 4,
        terms: ["Summer", ],
        prereqs: ["MSE320", "MSE381", "MSE110", ],
        concurrentOk: "MSE381",
        sPrereq: ""
    },
    MSE320: {
        type: "course",
        name: "Machine Design",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["MSE220", "MSE100", "MSE221", ],
        concurrentOk: "MSE100",
        sPrereq: ""
    },
    MSE321: {
        type: "course",
        name: "Engineering Thermodynamics and Heat Transfer",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["MSE223", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE352: {
        type: "course",
        name: "Digital Logic and Microcontrollers",
        units: 4,
        terms: ["Fall", ],
        prereqs: ["CMPT130", "MSE251", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE353: {
        type: "course",
        name: "Power Electronics and Electric Machinery",
        units: 4,
        terms: ["Summer", ],
        prereqs: ["MSE251", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE380: {
        type: "course",
        name: "Systems Modeling and Simulation",
        units: 3,
        terms: ["Fall", ],
        prereqs: ["MSE280", "MSE221", "MSE222", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE381: {
        type: "course",
        name: "Feedback Control Systems",
        units: 4,
        terms: ["Summer", ],
        prereqs: ["MSE280", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE393: {
        type: "coop option",
        name: "Industrial Internship II",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE394: {
        type: "coop option",
        name: "Special Internship II",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE402: {
        type: "course",
        name: "Engineering Ethics Law and Professional Practice",
        units: 2,
        terms: ["Spring", ],
        prereqs: ["MSE102", ],
        concurrentOk: "",
        sPrereq: "100 units"
    },
    MSE405W: {
        type: "course",
        name: "The Business of Engineering II & Entrepreneurship for Engineers",
        units: 4,
        terms: ["Summer", ],
        prereqs: ["MSE300", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE410: {
        type: "course",
        name: "Capstone Design Technical Project I",
        units: 3,
        terms: ["Spring", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: "24 upper level MSE units and two co-op terms"
    },
    MSE411: {
        type: "course",
        name: "Capstone Design Technical Project II",
        units: 3,
        terms: ["Summer", ],
        prereqs: ["MSE410", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE420: {
        type: "technical elective option",
        name: "Introduction to Biomechanical Engineering",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE220", "MSE222", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE421: {
        type: "technical elective option",
        name: "Advanced Vibration",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE380", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE422: {
        type: "technical elective option",
        name: "Fuel Cell Systems ",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE321", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE423: {
        type: "technical elective option",
        name: "Energy Conversion",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE321", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE424: {
        type: "technical elective option",
        name: "Microfluidics ",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE321", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE425: {
        type: "technical elective option",
        name: "Nano Manufacturing",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["CHEM120", "PHYS141", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE426: {
        type: "technical elective option",
        name: "Introduction to Engineering Design Optimization",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MATH251", "MSE320", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE427: {
        type: "technical elective option",
        name: "Finite Element Analysis",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE280", "MSE380", "MSE321", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE428: {
        type: "technical elective option",
        name: "Design of Mechanism",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE100", "MSE222", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE429: {
        type: "technical elective option",
        name: "Advanced Kinematics for Robotic System",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE222", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE450: {
        type: "technical elective option",
        name: "Real-Time and Embedded Control Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE352", "MSE381", ],
        concurrentOk: "",
        sPrereq: "90 credits"
    },
    MSE451: {
        type: "technical elective option",
        name: "Advanced Electronic Circuits",
        units: 4,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE251", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE452: {
        type: "technical elective option",
        name: "Power Conversion in Alternative Energy Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE353", ],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE480: {
        type: "technical elective option",
        name: "Manufacturing Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE310", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE481: {
        type: "technical elective option",
        name: "Industrial Control Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE352", "MSE381", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE483: {
        type: "technical elective option",
        name: "Modern Control Systems",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: ["MSE381", ],
        concurrentOk: "",
        sPrereq: "80 credits"
    },
    MSE490: {
        type: "technical elective option",
        name: "Special Topic in Mechatronic Systems Engineering",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE491: {
        type: "technical elective option",
        name: "Special Topic in Mechatronic Systems Engineering",
        units: 3,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE492: {
        type: "technical elective option",
        name: "Special Topic in Mechatronic Systems Engineering",
        units: 4,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE493: {
        type: "coop option",
        name: "Industrial Internship III",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE494: {
        type: "coop option",
        name: "Special Internship III",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE4XX: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE4XX2: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE4XX3: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE4XX4: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE4XX5: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    MSE4XX6: {
        type: "technical elective",
        name: "",
        units: 0,
        terms: ["Fall", "Spring", "Summer", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    PHYS140: {
        type: "course",
        name: "Studio Physics - Mechanics and Modern Physics",
        units: 4,
        terms: ["Fall", ],
        prereqs: [],
        concurrentOk: "",
        sPrereq: ""
    },
    PHYS141: {
        type: "course",
        name: "Studio Physics - Optics Electricity and Magnetism",
        units: 4,
        terms: ["Spring", ],
        prereqs: ["PHYS140", ],
        concurrentOk: "",
        sPrereq: ""
    },
};
