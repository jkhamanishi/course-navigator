
// --- Helpful Functions ---
// -------------------------

function hello() {alert('Hello world! (test successful)');};
function here(){console.log("here");};
function log(text){console.log(text);};

function docEle(id) {return document.getElementById(id)}
function notChildren(e, parentId) {if (e.target.id == parentId) {return true;}}

function term2string(i){
    switch (i%3) {
        case 0: term = "Fall"; break;
        case 1: term = "Spring"; break;
        case 2: term = "Summer"; break;
    }
    return term;
}




// --- Automated Section ---
// -------------------------


$(document).ready(function(){
    //alert('page loaded');
    
    console.log(courseData); // var courseData from courseData.js
    loadGrid(flexA); // var flexA from default-curriculums.js
    
    assignDialogFunctions();
});


$(window).resize(function(){
    orientAllArrows();
    centerViewGrid();
});







// --- UI Functions ---
// --------------------


function setDarkTheme(){
    var input = document.getElementById("darktheme")
    if (input.checked == true) {
        document.body.classList.add('darkTheme');
    } else {
        document.body.classList.remove('darkTheme');
    }
}


function scrollToViewGrid() {
    docEle("grid").scrollIntoView();
}


function changeCurriculum() {
    var value = docEle("curriculum").value;
    if (value == "import"){
        showDialogBox('importDialogBox');
        docEle("importedCurriculum").focus()
    } else {
        loadGrid(window[value]); // window[string] reads string as a global variable
    }
}



function isOffered(courseId){
    var i = (docEle(courseId).parentElement.style.gridRowStart-1)%3;
    var currentTerm = term2string(i);
    return courseData[courseId].terms.includes(currentTerm);
}







