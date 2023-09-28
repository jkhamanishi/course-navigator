// --- Raw Data in Variables ---
// -----------------------------

const flexA_raw =
`CHEM 120,PHYS 140,,,,MATH 151,,,CMPT 130,,,
,PHYS 141,,MSE 101W,,MATH 232,MATH 152,MSE 102,,,,
,,,,,MATH 260,MATH 251,,,,MSE 110,Elective
MSE 220,MSE 221,MSE 100,,MSE 250,,,,,,,
,,,MSE 280,MSE 222,MSE 251,MSE 223,,,,,
,,,,,,,,,,,CO-OP
,,,,,,,,,,,CO-OP
MSE 210,,,,,,,,,MSE 211,Elective,Elective
MSE 300,,MSE 381,,MSE 353,MSE 311,,,,,,
,MSE 320,,MSE 380,,MSE 310,MSE 321,,MSE 352,,,
,,,,,,MSE 410,MSE 402,,MSE 4XX,MSE 4XX,
MSE 405W,,MSE 312,,,,MSE 411,,,MSE 4XX,,
,,,,,,,,,,,CO-OP
,,,,,,,,MSE 4XX,MSE 4XX,MSE 4XX,
,,,,,,,,,,,
`;


const flexB_raw =
`CHEM 120,,PHYS 140,,,CMPT 130,MATH 151,,,,,
,,PHYS 141,,,MATH 232,,MATH 152,MSE 101W,,MSE 102,
,,,,,MATH 260,,MATH 251,MSE 110,,,Elective
MSE 220,,MSE 250,MSE 100,MSE 221,,,,,,,
MSE 280,,MSE 251,,,MSE 222,MSE 223,,,,,
MSE 381,,MSE 353,,,MSE 311,,MSE 300,,,,
,MSE 310,MSE 380,MSE 320,MSE 352,,MSE 321,,,,,
,,,,,,,,,,,CO-OP
,,,,,,,,,,,CO-OP
,,,,,,,,,,,CO-OP
,,,MSE 4XX,MSE 4XX,MSE 210,,,,MSE 211,,
MSE 312,,,MSE 4XX,MSE 4XX,MSE 4XX,,,,,,
,,,,,,,,,,,CO-OP
,,,MSE 410,Elective,Elective,,,,,MSE 402,
,,,MSE 411,MSE 4XX,,,MSE 405W,,,,
`;


const flexC_raw =
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


const fourY_raw =
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


const dev_curriculum_raw =
`CHEM 120,,PHYS 140,,,,,MATH 151,,CMPT 130,,
,,PHYS 141,,,MATH 232,,MATH 152,,,MSE 102,MSE 101W
,,,,,MATH 260,,MATH 251,,,,Elective
MSE 220,,MSE 250,MSE 100,MSE 221,,,,,,,
MSE 280,,MSE 251,,,MSE 222,,MSE 223,,,,
,,,,,,,,CO-OP,,,
,,,,,,,,CO-OP,,,
,,,,,,MSE 210,Elective,Elective,,,MSE 211
,MSE 381,MSE 353,,MSE 311,,,,,,,MSE 300
MSE 310,,,MSE 320,,,MSE 321,MSE 4XX,,,,
,,,,,,,,CO-OP,,,
,,,,,,,,CO-OP,,,
,MSE 380,,,MSE 110,,,MSE 4XX,,MSE 352,,
,,,,,MSE 410,MSE 4XX,MSE 4XX,MSE 4XX,,MSE 402,
,,,MSE 312,,MSE 411,,MSE 4XX,,,,MSE 405W
`;


const double_degree_raw =
`CHEM 120,,MATH 151,,PHYS 140,,CMPT 130,MSE 100,,,,ECON 105,
,MATH 152,MATH 232,,,PHYS 141,,MSE 102,MSE 110,MSE 101W,,,
,,,,,,,,,,,,Elective
MSE 220,MATH 251,MSE 221,,MATH 260,MSE 250,,,,ECON 103,,,
,,,MSE 210,MSE 222,,,,BUS 272,,BUS251,BUS254,BUS 393
,,,,,,,,,,,,CO-OP
,,,MSE 321,,,,,BUS 381,BUS 207,BUS 343,BUS 312,BUS 232
MSE 223,MSE 211,,,MSE 280,MSE 251,,,,,,BUS 3XX,BUS 3XX
,,,,,,,,,,,,CO-OP
MSE 320,,MSE 380,MSE 310,,,MSE 352,,BUS 360W,,,BUS 4XX,
,,,,,,,,,,,,CO-OP
MSE 312,,,MSE 381,MSE 311,MSE 353,,,,,,BUS 4XX,
,,,,,,,,,,,,CO-OP
MSE 4XX,MSE 4XX,MSE 4XX,,,,,MSE 402,MSE 410,,BUS 478,,
MSE 4XX,MSE 4XX,MSE 4XX,,,,,,MSE 411,,,BUS 4XX,
`;


// --- Processed Data in Variables ---
// -----------------------------------

var flexA = csv2jsData(flexA_raw, 4);
var flexB = csv2jsData(flexB_raw, 4);
var flexC = csv2jsData(flexC_raw, 4);
var fourY = csv2jsData(fourY_raw, 4);
var dev_curriculum = csv2jsData(dev_curriculum_raw, 4);
var double_deg = csv2jsData(double_degree_raw, 4);

