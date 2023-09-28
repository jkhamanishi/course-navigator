
// --- Helpful Functions ---
// -------------------------

function hello() {alert('Hello world! (test successful)');};
function here(){console.log("here");};
function log(text){console.log(text);};
function docEle(id) {return document.getElementById(id)}
function notChildren(e, parentId) {if (e.target.id == parentId) {return true;}}


// --- Automated Section ---
// -------------------------

var userStorage = window.localStorage;

$(document).ready(function(){
    //alert('page loaded');
    loadSettings();
    moveDetails.currentPosition="right";
    assignDialogFunctions();
});

$(window).resize(function(){
    updateGrid();
    scrollToViewGrid();
});




// --- UI Viewing Functions ---
// ----------------------------

function saveSettings(){
    return docEle("saveSettings").checked;
}

function saveCurriculum(){
    userStorage.gridData = exportCurriculum(false);
}

function loadSettings(){
    if (userStorage.length > 0){
        setDarkTheme(userStorage.darkTheme == "true");
        setComicSans(userStorage.comicSans == "true");
        setStartingYear(userStorage.enableStartingYear == "true");
        docEle("hideArrows").checked = userStorage.hideArrows == "true";
        docEle("saveSettings").checked = true;
        log("localStorage found. Your settings have been loaded.");
        try {
            loadGrid(csv2jsData(userStorage.gridData,4));
            docEle("curriculum").value = "custom"
            log("Curriculum from localStorage has successfully loaded.")
        } catch {
            loadGrid(flexA);
            log("Curriculum from localStorage has failed to load. Default curriculum has been loaded.")
        }
    } else {
        loadGrid(flexA);
        docEle("starting-year").value = new Date().getFullYear()-1;
    }
}
function changeSettings(){
    if (saveSettings()) {
        setDarkTheme();
        setComicSans();
        saveCurriculum();
        log("localStorage enabled. Your settings and curriculum will now be automatically saved.");
    } else {
        window.localStorage.clear();
        log("localStorage cleared. Your settings and curriculum will no longer be saved.");
    }
}

function setDarkTheme(force = false){
    var input = document.getElementById("darktheme");
    
    if ((input.checked == true)||force)  {
        document.body.classList.add('darkTheme');
        input.checked = true;
        if (saveSettings()){userStorage.darkTheme = true;}
    } else {
        document.body.classList.remove('darkTheme');
        if (saveSettings()){userStorage.darkTheme = false;}
    }
}
function setComicSans(force = false){
    var input = document.getElementById("comicSans");
    
    if ((input.checked == true)||force) {
        document.body.style.fontFamily = "'Comic Sans MS', 'Comic Sans', 'Brush Script MT', sans-serif";
        input.checked = true;
        if (saveSettings()){userStorage.comicSans = true;}
    } else {
        document.body.style.fontFamily = "";
        if (saveSettings()){userStorage.comicSans = false;}
    }
    orientAllArrows();
}

function setStartingYear(force = false){
    var checkbox = document.getElementById("enable-starting-year");
    var year = document.getElementById("starting-year").value;
    if ((checkbox.checked == true)||force) {
        checkbox.checked = true;
        if (!year) { docEle("starting-year").value = Number(userStorage.startingYear) }
        if (saveSettings()) {
            userStorage.enableStartingYear = true;
            userStorage.startingYear = docEle("starting-year").value;
        }
    } else {
        if (saveSettings()){userStorage.enableStartingYear = false;}
    }
    if (docEle("grid").firstChild){
        loadGrid(csv2jsData(exportCurriculum(false),4));
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
        docEle("curriculum").value = "custom";
        showDialogBox('importDialogBox');
        docEle("importedCurriculum").focus()
    } else {
        loadGrid(window[value]); // window[string] reads string as a global variable
        docEle("exportButton").style.visibility = "hidden";
        if (docEle("constantSquishing").checked) { squish(); }
    }
}






// --- Details Section ---
// -----------------------

function moveDetails(position="right"){
    //if (arguments.length == 0){position = moveDetails.currentPosition}
    if (position == "bottom"){
        docEle("details").className = "";
        docEle("details").style.top = "";
        docEle("details").style.height = "300px";
        docEle("details").style.width = "";
        moveDetails.currentPosition = "bottom";
    } else if (position == "right"){
        docEle("details").className = "sideDetails";
        var grid = docEle("grid").getBoundingClientRect();
        
        docEle("details").style.top = grid.top+"px";
        docEle("details").style.height = grid.height+"px";
        
        var width = document.documentElement.clientWidth - docEle("grid").lastElementChild.getBoundingClientRect().right;
        docEle("details").style.width = (width-10)+"px";
        
        if (docEle("details").offsetWidth < 250){
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
    
    
    function isSetElective(){
        return (docEle(id).innerText !== "Elective");
    }
    var electiveId;
    if ((courseData[id].type == "complementary elective")&&isSetElective()){
        electiveId = docEle(id).innerText.replace(/[ -]/g, "");
    }
    
    
    // Course title
    docEle("code").innerHTML = "";
    docEle("name").innerHTML = "";
    docEle("units").innerHTML = "";
    switch (courseData[id].type) {
        case "coop":{
            docEle("code").innerHTML = "Co-Op Term";
            break;
        }
        case "technical elective":{
            docEle("code").innerHTML = "Technical Elective";
            break;
        }
        case "business elective":{
            docEle("code").innerHTML = "Business Concentration Elective";
            break;
        }
        case "complementary elective":{
            if (isSetElective()){
                docEle("code").innerHTML = getCourseTitle(electiveId);
            } else {
                docEle("code").innerHTML += "Complementary Elective";
            }
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
        var warningSign = '<img class="inlineWarning" src="img/warning.png"/>';
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
    switch (courseData[id].type){
        case "complementary elective":
            if (isSetElective()){
                docEle("terms").innerHTML = "??? (see <a href="+getCoursysBrowseURL(electiveId)+">Coursys Browse</a>)";
                break;
            }
        case "business elective":
        case "technical elective":
        case "technical elective option":
            docEle("terms").innerHTML = "???";
    }
    
    
    // Calendar Description
    docEle("calendarDescription").innerHTML = "";
    var base_url = "https://www.sfu.ca/mechatronics/current-students/undergraduate-students/undergraduate-program-requirements/"
    switch (courseData[id].type){
        case "coop":{
            docEle("descriptionTitle").innerHTML = "Co-op Requirements"
            docEle("source").innerHTML = "resource link";
            docEle("source").href = base_url+"coop-requirements.html";
            break;
        }
        case "technical elective":{
            docEle("descriptionTitle").innerHTML = "Technical Studies Electives"
            docEle("source").innerHTML = "resource link";
            docEle("source").href = base_url+"technical-studies-electives.html"
            break;
        }
        case "complementary elective":{
            if (!isSetElective()) {
                docEle("descriptionTitle").innerHTML = "Pre-approved Complementary Study Electives"
                docEle("source").innerHTML = "resource link";
                docEle("source").href = base_url+"pre-approved-compementary-study-electives.html"
            } else {
                docEle("descriptionTitle").innerHTML = "Calendar Description"
                docEle("calendarDescription").innerHTML = getCourseDescription(electiveId);
                docEle("source").innerHTML = "source";
                docEle("source").href = getCourseURL(electiveId);
            }
            break;
        }
        default:{
            docEle("descriptionTitle").innerHTML = "Calendar Description"
            docEle("calendarDescription").innerHTML = getCourseDescription(id);
            docEle("source").innerHTML = "source";
            docEle("source").href = getCourseURL(id);
            break;
        }
    }
    
}

// for option switching
function setAsCourse(oldCourse, newCourse) {
    docEle(oldCourse).innerHTML = splitCourseCode(newCourse, " ");
    lastclicked = "";
    reloadGrid();
}




function splitCourseCode(courseId, seperator){
    text = ""
    parts = courseId.split(/(\d+)/);
    for (i in parts){
        if (i == 0){text = parts[i]+seperator}
        else{text += parts[i]}
    }
    return text;
}



// --- Import External Content ---
// -------------------------------

function getLatestCalendar(i = 0){
    
    if (i > 3){
        log("Could not find an Academic Calendar within the last year.")
        return;
    }
    
    var today = new Date();
    var d = String(today.getDate());
    var m = String(today.getMonth() + 1); 
    var yyyy = today.getFullYear();

    // today = m + '/' + d + '/' + yyyy;
    // log(today);
    
    var base_url = "https://www.sfu.ca/students/calendar/";
    var end_url = "/courses.html";
    
    var currentTerm;
    if (m <= 4) {
        currentTerm = 1; // Spring
    } else if (5 <= m && m <= 8) {
        currentTerm = 2; // Summer
    } else if (9 <= m) {
        currentTerm = 0; // Fall
    }
    latestTerm = currentTerm + 1 - i;
    if (latestTerm >= 3) {latestTerm -= 3;};
    if (latestTerm == 1 && currentTerm == 0) {yyyy += 1;};
    
    var url = base_url + yyyy + '/' + term2string(latestTerm).toLowerCase() + end_url;
    var result;
    var content = '.course-finder > h1'
    $.ajax({
        url : url,
        type : "get",
        async: false,
        success: function(html){
            var $mainbar = $(html).find(content);
            if (($mainbar.html()) == 'Courses by Subject'){
                result = "success!";
            } else {
                result = 'failed';
            }
        },
        error: function() {
            result = 'failed';
        }
    });
    if (result == "failed"){
        return getLatestCalendar((i+1));
    } else {
        log("Found latest Academic Calendar: "+url);
        return url;
    }
}
var latestCalendar = getLatestCalendar();

function getCourseURL(courseId){
    var end_url = "/"+splitCourseCode(courseId, "/").toLowerCase()+".html"
    var url = latestCalendar.replace(".html", end_url);
    return url;
}

function getCourseDescription(courseId){
    var url = getCourseURL(courseId);
    var content = '.main > p'
    var text = ""
    var result;
    $.ajax({
        url : url,
        type : "get",
        async: false,
        success: function(html){
            result = "success!";
            var $mainbar = $(html).find(content);
            //text = ($mainbar.html());
            text = ($mainbar.html()).replaceAll('href="', 'target="_blank" href="https://www.sfu.ca');
        },
        error: function() {
            result = 'failed';
            text = "Could not load calendar description."
        }
    });
    return text;
}

function getCourseTitle(courseId){
    var url = getCourseURL(courseId);
    var content = '.main > h1';
    var text = "";
    var result;
    $.ajax({
        url : url,
        type : "get",
        async: false,
        success: function(html){
            var $mainbar = $(html).find(content);
            text = ($mainbar.text());
            result = true;
        },
        error: function(){
            text = "Error: Course not found.";
            result = false;
        }
    });
    if (result){
        var parts = text.replace(/\t/g, "").replace(/\n\n/g, "\n").split("\n");
        return parts[2]+parts[3]+": "+parts[1]+" "+parts[4];
    } else {
        return text;
    }
}


function getCoursysBrowseURL(courseId){
    var subject = courseId.split(/(\d+)/)[0];
    var number = courseId.split(/(\d+)/).slice(1).join("");
    return "https://coursys.sfu.ca/browse/#!number="+number+"&subject="+subject;
}











