
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
    
    moveDetails.currentPosition="right";
    
    console.log(courseData); // var courseData from courseData.js
    loadGrid(flexA); // var flexA from default-curriculums.js
    
    assignDialogFunctions();
    
    moveDetails("right");
    
});


$(window).resize(function(){
    updateGrid();
    scrollToViewGrid();
});






// --- UI Viewing Functions ---
// ----------------------------


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


// --- Details Section ---
// -----------------------

function moveDetails(position="right"){
    //if (arguments.length == 0){position = moveDetails.currentPosition}
    if (position == "bottom"){
        docEle("details").className = "";
        docEle("details").style.top = "";
        docEle("details").style.height = "";
        docEle("details").style.width = "";
        moveDetails.currentPosition = "bottom";
    } else if (position == "right"){
        docEle("details").className = "sideDetails";
        window.scrollTo(0,0);
        var grid = docEle("grid").getBoundingClientRect();
        
        docEle("details").style.top = grid.top+"px";
        docEle("details").style.height = grid.height+"px";
        
        var width = window.outerWidth - docEle("grid").lastElementChild.getBoundingClientRect().right;
        docEle("details").style.width = width*0.9+"px";
        
        if (docEle("details").offsetWidth < 135){
            moveDetails("bottom");
            //docEle("sideDetails").firstElementChild.checked = false;
            docEle("sideDetails").style.display = "none";
        } else {
            if (docEle("sideDetails").firstElementChild.checked){
                moveDetails.currentPosition = "right";
                docEle("sideDetails").style.display = "initial";
            } else {
                moveDetails("bottom");
                docEle("sideDetails").style.display = "initial";
            }
            
        }
    }
    //log(docEle("sideDetails").firstElementChild.checked)
}


function showDetails(courseId){
    var id
    if (arguments.length == 0){
        if (lastclicked == ""){
            return;
        } else {
            docEle("details").getElementsByTagName("P")[0].innerHTML = "Last clicked:"
            id = lastclicked;
        }
    } else if (!docEle(courseId)){
        docEle("details").getElementsByTagName("P")[0].innerHTML = "Preview Option:"
        id = courseId;
    } else {
        docEle("details").getElementsByTagName("P")[0].innerHTML = "Last hovered:"
        id = courseId;
    }
    
    // Course title
    switch (courseData[id].type) {
        case "coop":{
            docEle("code").innerHTML = "Co-Op Term";
            docEle("name").innerHTML = ""
            docEle("units").innerHTML = "";
            break;
        }
        case "technical elective":{
            docEle("code").innerHTML = "Technical Elective";
            docEle("name").innerHTML = ""
            docEle("units").innerHTML = "";
            break;
        }
        case "complementary elective":{
            docEle("code").innerHTML = "Complementary Elective";
            docEle("name").innerHTML = ""
            docEle("units").innerHTML = "";
            break;
        }
        default:{
            docEle("code").innerHTML = id+": ";
            docEle("name").innerHTML = courseData[id].name;
            var units = courseData[id].units;
            if (units > 0){docEle("units").innerHTML = "("+courseData[id].units+")";} 
            else {docEle("units").innerHTML = "";}
            break;
        }
    }
    
    // Warning
    if (!docEle(id)) {
        docEle("warning").innerHTML = "";
    }else if (!isValidated(id)[0]){
        var warningSign = '<img src="img/warning.png"/>';
        docEle("warning").innerHTML = "";
        for (x of isValidated(id)[1]){
            docEle("warning").innerHTML += "<p>" + warningSign + x + "</p>";
        }
        docEle("warning").innerHTML += "<br>";
    } else {
        docEle("warning").innerHTML = "";
    }
    
    
    // Options
    switch (courseData[id].type) {
        case "coop":
        case "coop option":
        case "technical elective":
        case "technical elective option":{
            docEle("options").style.display = "block";
            docEle("options").innerHTML = "<p>Options (click to see details):</p><div></div>";
            for (x of courseData[id].options){
                showOption(x);
            }
            break;
        }
        default:{
            docEle("options").style.display = "none";
            // docEle("options").style.display = "block";
            
            break;
        }
    }
    function showOption(option){
        var newDIV = document.createElement("DIV");
        newDIV.innerHTML = option;
        newDIV.classList.add('dragDummy');
        //newDIV.setAttribute("onclick", "showDetails('"+option+"')"+replaceCourseText());
        newDIV.setAttribute("onclick", "showDetails('"+option+"')");
        newDIV.title = courseData[option].name;
        docEle("options").getElementsByTagName("DIV")[0].appendChild(newDIV);
        
        // function replaceCourseText(){
            // if (!(lastclicked == "")){
                // return ""//"; setAsCourse('"+lastclicked+"', '"+option+"')"
            // }
            // return ""
        // }
    }    
    // Replace current selected course with option
    docEle("selectCourse").innerHTML = "";
    if (lastclicked !== ""){
        var showType = courseData[id].type;
        var clickedType = courseData[lastclicked].type;
        if ((showType == clickedType+" option")||(clickedType == showType+" option")||((showType == clickedType)&&(showType.includes("option")))){
            var button = document.createElement("BUTTON");
            button.innerHTML = "choose this option";
            button.setAttribute("onclick", "setAsCourse('"+lastclicked+"', '"+id+"')");
            docEle("selectCourse").appendChild(button);
        }
    }
    
    
    // Prereqs
    docEle("prereqs").innerHTML = ""
    var hasPrereqs = (courseData[id].prereqs.length !== 0);
    var hasSpecialPrereq = courseData[id].sPrereq !== ""
    if (hasPrereqs || hasSpecialPrereq){
        for (i in courseData[id].prereqs){
            if ((i == courseData[id].prereqs.length-1) && (i != 0) && (courseData[id].sPrereq == "")){
                docEle("prereqs").innerHTML += " and " + courseData[id].prereqs[i];
            } else if (i == 0){
                docEle("prereqs").innerHTML += courseData[id].prereqs[i];
            } else {
                docEle("prereqs").innerHTML += ", " + courseData[id].prereqs[i];
            }
        }
        if (hasSpecialPrereq){
            if (hasPrereqs){
                docEle("prereqs").innerHTML += ", and " + courseData[id].sPrereq;
            } else {
                docEle("prereqs").innerHTML += courseData[id].sPrereq;
            }
        }
    } else {
        docEle("prereqs").innerHTML += "none";
    }
    docEle("prereqs").innerHTML += ". ";
    if (courseData[id].concurrentOk !== ""){
        docEle("prereqs").innerHTML += courseData[id].concurrentOk;
        docEle("prereqs").innerHTML += " may be taken concurrently."
    }
    
    // Terms
    docEle("terms").innerHTML = ""
    for (i in courseData[id].terms){
        if ((i == courseData[id].terms.length-1) && (i != 0)){
            docEle("terms").innerHTML += " and " + courseData[id].terms[i];
        } else if (i == 0){
            docEle("terms").innerHTML += courseData[id].terms[i];
        } else {
            docEle("terms").innerHTML += ", " + courseData[id].terms[i];
        }
    }
    docEle("terms").innerHTML += ". ";
    
}

function setAsCourse(oldCourse, newCourse) {
    text = ""
    parts = newCourse.split(/(\d+)/);
    for (i in parts){
        if (i == 0){text = parts[i]+" "}
        else{text += parts[i]}
    }
    docEle(oldCourse).innerHTML = text;
    lastclicked = "";
    reloadGrid();
}







