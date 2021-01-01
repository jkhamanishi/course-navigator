
// --- Helpful Functions ---
// -------------------------

function hello() {alert('Hello world! (test successful)');};
function here(){console.log("here");};
function log(text){console.log(text);};

function docEle(id) {return document.getElementById(id)}
function notChildren(e, parentId) {if (e.target.id == parentId) {return true;}}





// --- Automated Section ---
// -------------------------


$(document).ready(function(){
    //alert('page loaded');
    
    setDarkTheme()
    
    console.log(courseData); // var courseData from courseData.js
    loadGrid(flexA); // var flexA from default-curriculums.js
    
    assignDialogFunctions();
    
});


$(window).resize(function(){
    updateGrid();
    scrollToViewGrid();
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
    if (value == "custom") {
        return;
    } else if (value == "import"){
        showDialogBox('importDialogBox');
        docEle("importedCurriculum").focus()
    } else if (docEle("constantSquishing").checked) {
        loadGrid(window[value+'_squished']); // window[string] reads string as a global variable
        docEle("exportButton").style.visibility = "hidden";
    } else {
        loadGrid(window[value]); // window[string] reads string as a global variable
        docEle("exportButton").style.visibility = "hidden";
    }
}










