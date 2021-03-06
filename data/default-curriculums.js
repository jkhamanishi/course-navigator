// --- Raw Data in Variables ---
// -----------------------------

var flexA_raw = 
`CHEM 120,,PHYS 140,,,,,MATH 151,,CMPT 130,,
,,PHYS 141,,,MATH 232,,MATH 152,,,MSE 102,MSE 101W
,,,,,MATH 260,,MATH 251,MSE 110,,,Elective
MSE 220,,MSE 250,MSE 100,MSE 221,,,,,,,
MSE 280,,MSE 251,,,MSE 222,MSE 223,,,,,
,,,,,,,CO-OP,,,,
,,,,,,,CO-OP,,,,
,,,,,MSE 210,,Elective,Elective,,,MSE 211
,MSE 381,MSE 353,MSE 311,,,,,,,,MSE 300
MSE 310,,MSE 380,,,MSE 320,MSE 321,,,MSE 352,,
,,,,,,MSE 410,,MSE 4XX,MSE 4XX,MSE 402,
,,,MSE 312,,,MSE 411,,MSE 4XX,,,MSE 405W
,,,,,,,CO-OP,,,,
,,,,,,,,MSE 4XX,MSE 4XX,MSE 4XX,
,,,,,,,,,,,
`;


var flexB_raw = 
`CHEM 120,,PHYS 140,,,,,MATH 151,,CMPT 130,,
,,PHYS 141,,,MATH 232,,MATH 152,,,MSE 102,MSE 101W
,,,,,MATH 260,,MATH 251,MSE 110,,,Elective
MSE 220,,MSE 250,MSE 100,MSE 221,,,,,,,
MSE 280,,MSE 251,,,MSE 222,MSE 223,,,,,
MSE 381,,MSE 353,,,,,MSE 311,,,,MSE 300
,MSE 310,MSE 380,,MSE 320,,MSE 321,,,MSE 352,,
,,,,,,,,,CO-OP,,
,,,,,,,,,CO-OP,,
,,,,,,,,,CO-OP,,
,,,MSE 210,,MSE 4XX,MSE 4XX,,MSE 211,,,
,,MSE 312,,,MSE 4XX,MSE 4XX,MSE 4XX,,,,
,,,,,,,,,CO-OP,,
,,MSE 410,,,Elective,Elective,,,,MSE 402,
,,MSE 411,,,MSE 4XX,,,,,,MSE 405W
`;


var flexC_raw = 
`CHEM 120,,PHYS 140,,,,,MATH 151,,CMPT 130,,
,,PHYS 141,,,MATH 232,,MATH 152,,,MSE 102,MSE 101W
,,,,,MATH 260,,MATH 251,MSE 110,,,Elective
MSE 220,,MSE 250,MSE 100,MSE 221,,,,,,,
MSE 280,,MSE 251,,,MSE 222,MSE 223,,,,,
MSE 381,,MSE 353,,,,,MSE 311,,,,MSE 300
,MSE 310,MSE 380,,MSE 320,,,MSE 321,MSE 352,,,
,,,,,,MSE 210,MSE 4XX,MSE 4XX,MSE 211,,
CO-OP,,,,,,,,,,,
CO-OP,,,,,,,,,,,
,,,,,MSE 410,,Elective,Elective,,MSE 402,
,,,MSE 312,,MSE 411,,MSE 4XX,,,,MSE 405W
CO-OP,,,,,,,,,,,
,,,,,,,MSE 4XX,MSE 4XX,MSE 4XX,,
,,,,,,,,,,,
`;


var fourY_raw = 
`CHEM 120,MSE 100,,,PHYS 140,,MATH 151,,MSE 110,CMPT 130,,
,,PHYS 141,,,MATH 232,MATH 152,Elective,,,MSE 102,MSE 101W
,,,,,,,,,,,Elective
MSE 220,MSE 221,,MSE 250,,MATH 260,,MATH 251,,,,Elective
,,,MSE 251,MSE 280,MSE 222,MSE 223,,MSE 210,,,MSE 211
,,,,,,,,,,,CO-OP
MSE 310,,MSE 320,,,MSE 380,MSE 321,,,MSE 352,,
,,,,,,,,,,,CO-OP
MSE 353,,MSE 311,MSE 381,,,,MSE 312,,MSE 300,,
,,,,,,,,,,,CO-OP
,,,,,,MSE 4XX,MSE 4XX,MSE 4XX,,MSE 402,MSE 410
,,,,,,MSE 4XX,MSE 4XX,MSE 4XX,MSE 405W,,MSE 411
,,,,,,,,,,,
,,,,,,,,,,,
,,,,,,,,,,,
`;


// --- Processed Data in Variables ---
// -----------------------------------


var flexA = csv2jsData(flexA_raw, 4);
var flexB = csv2jsData(flexB_raw, 4);
var flexC = csv2jsData(flexC_raw, 4);
var fourY = csv2jsData(fourY_raw, 4);


// --- Raw Squished Data in Variables ---
// -----------------------------

var flexA_squished_raw = 
`MATH 151,CHEM 120,CMPT 130,PHYS 140,,,,,,,,
MATH 152,MSE 101W,MSE 102,PHYS 141,MATH 232,,,,,,,
MATH 251,MATH 260,MSE 110,Elective,,,,,,,,
MSE 100,MSE 220,MSE 221,MSE 250,,,,,,,,
MSE 280,MSE 222,MSE 223,MSE 251,,,,,,,,
,,CO-OP,,,,,,,,,
,,CO-OP,,,,,,,,,
MSE 210,MSE 211,Elective,Elective,,,,,,,,
MSE 381,MSE 311,MSE 300,MSE 353,,,,,,,,
MSE 310,MSE 380,MSE 352,MSE 320,MSE 321,,,,,,,
MSE 4XX,MSE 4XX,MSE 402,MSE 410,,,,,,,,
MSE 4XX,MSE 312,MSE 405W,MSE 411,,,,,,,,
,,CO-OP,,,,,,,,,
MSE 4XX,MSE 4XX,MSE 4XX,,,,,,,,,
,,,,,,,,,,,
`;


var flexB_squished_raw = 
`MATH 151,CHEM 120,CMPT 130,PHYS 140,,,,,,,,
MATH 152,MSE 101W,MSE 102,PHYS 141,MATH 232,,,,,,,
MATH 251,MATH 260,MSE 110,Elective,,,,,,,,
MSE 100,MSE 220,MSE 221,MSE 250,,,,,,,,
MSE 280,MSE 222,MSE 223,MSE 251,,,,,,,,
MSE 381,MSE 300,MSE 311,MSE 353,,,,,,,,
MSE 310,MSE 380,MSE 352,MSE 320,MSE 321,,,,,,,
,,CO-OP,,,,,,,,,
,,CO-OP,,,,,,,,,
,,CO-OP,,,,,,,,,
MSE 210,MSE 211,MSE 4XX,MSE 4XX,,,,,,,,
MSE 312,MSE 4XX,MSE 4XX,MSE 4XX,,,,,,,,
,,CO-OP,,,,,,,,,
MSE 410,MSE 402,Elective,Elective,,,,,,,,
MSE 411,MSE 405W,MSE 4XX,,,,,,,,,
`;


var flexC_squished_raw = 
`MATH 151,CHEM 120,CMPT 130,PHYS 140,,,,,,,,
MATH 152,MSE 101W,MSE 102,PHYS 141,MATH 232,,,,,,,
MATH 251,MATH 260,MSE 110,Elective,,,,,,,,
MSE 100,MSE 220,MSE 221,MSE 250,,,,,,,,
MSE 280,MSE 222,MSE 223,MSE 251,,,,,,,,
MSE 381,MSE 300,MSE 311,MSE 353,,,,,,,,
MSE 310,MSE 380,MSE 352,MSE 320,MSE 321,,,,,,,
MSE 210,MSE 211,MSE 4XX,MSE 4XX,,,,,,,,
,,CO-OP,,,,,,,,,
,,CO-OP,,,,,,,,,
MSE 410,MSE 402,Elective,Elective,,,,,,,,
MSE 411,MSE 405W,MSE 312,MSE 4XX,,,,,,,,
,,CO-OP,,,,,,,,,
MSE 4XX,MSE 4XX,MSE 4XX,,,,,,,,,
,,,,,,,,,,,
`;


var fourY_squished_raw = 
`MSE 100,MATH 151,CHEM 120,CMPT 130,PHYS 140,MSE 110,,,,,,
MATH 152,MATH 232,MSE 101W,MSE 102,PHYS 141,Elective,,,,,,
Elective,,,,,,,,,,,
MATH 251,MATH 260,MSE 220,MSE 221,MSE 250,Elective,,,,,,
MSE 210,MSE 211,MSE 222,MSE 223,MSE 251,MSE 280,,,,,,
,,CO-OP,,,,,,,,,
MSE 320,MSE 380,MSE 321,MSE 352,MSE 310,,,,,,,
,,CO-OP,,,,,,,,,
MSE 312,MSE 381,MSE 300,MSE 311,MSE 353,,,,,,,
,,CO-OP,,,,,,,,,
MSE 4XX,MSE 4XX,MSE 4XX,MSE 402,MSE 410,,,,,,,
MSE 4XX,MSE 4XX,MSE 4XX,MSE 405W,MSE 411,,,,,,,
,,,,,,,,,,,
,,,,,,,,,,,
,,,,,,,,,,,
`;


// --- Processed Squished Data in Variables ---
// -----------------------------------


var flexA_squished = csv2jsData(flexA_squished_raw, 4);
var flexB_squished = csv2jsData(flexB_squished_raw, 4);
var flexC_squished = csv2jsData(flexC_squished_raw, 4);
var fourY_squished = csv2jsData(fourY_squished_raw, 4);


// --- Legacy Pre-Processed Variables ---
// --------------------------------------

// var flexA = [["CHEM 120", "", "PHYS 140", "", "", "", "", "MATH 151", "", "CMPT 130", "", "", ],["", "", "PHYS 141", "", "", "MATH 232", "", "MATH 152", "", "", "MSE 102", "MSE 101W", ],["", "", "", "", "", "MATH 260", "", "MATH 251", "MSE 110", "", "", "Elective", ],["MSE 220", "MSE 100", "MSE 250", "", "MSE 221", "", "", "", "", "", "", "", ],["MSE 280", "", "MSE 251", "", "", "MSE 222", "MSE 223", "", "", "", "", "", ],["", "", "", "", "", "", "", "CO-OP", "", "", "", "", ],["", "", "", "", "", "", "", "CO-OP", "", "", "", "", ],["", "", "", "", "", "MSE 210", "", "Elective", "Elective", "", "", "MSE 211", ],["MSE 381", "", "MSE 353", "", "MSE 311", "", "", "", "", "", "", "MSE 300", ],["", "MSE 310", "MSE 320", "MSE 380", "", "", "MSE 321", "", "", "MSE 352", "", "", ],["", "", "MSE 410", "", "", "", "", "", "MSE 4XX", "MSE 4XX", "MSE 402", "", ],["", "", "MSE 411", "", "", "", "", "MSE 312", "", "", "MSE 4XX", "MSE 405W", ],["", "", "", "", "", "", "", "CO-OP", "", "", "", "", ],["", "", "", "", "", "", "", "", "", "MSE 4XX", "MSE 4XX", "MSE 4XX", ],["", "", "", "", "", "", "", "", "", "", "", "", ],];
