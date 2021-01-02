

function availableID(id) {
    if (!(document.getElementById(id))) {
        return id;
    }
    for (i=2; true; i++) {
        if (!(document.getElementById(id+i))) {
            return id+i;
        }
    }
}

function term2string(i){
    switch (i%3) {
        case 0: term = "Fall"; break;
        case 1: term = "Spring"; break;
        case 2: term = "Summer"; break;
    }
    return term;
}



// --- Grid Scripts ---
// --------------------


function loadGrid(gridData){
    //log(gridData);
    var grid = docEle("grid");
    grid.innerHTML = "";
    docEle("allSVGs").innerHTML = "";

    grid.style.setProperty('grid-template-columns', "auto "+"1fr ".repeat(gridData[0].length));

    for (var i=0; i<gridData.length; i++){ // for every row
        
        for (var j=-1; j<gridData[0].length; j++){ // for every column
            if (j==-1) {
                var term = term2string(i);
                var newDIV = document.createElement("DIV");
                newDIV.classList.add('termLabel');
                newDIV.innerHTML = "<div>Year "+Math.floor(i/3+1)+" "+term+"</div>";
                newDIV.setAttribute("style", "grid-row: "+(i+1)+"; grid-column: "+(j+2)+"; z-index: 1;")
                grid.appendChild(newDIV);
                continue;
            }
            
            // Add empty placeholders
            var newDIV = document.createElement("DIV");
            //newDIV.innerHTML = "corn";
            newDIV.classList.add('empty');
            newDIV.setAttribute("ondragover", "allowDrop(event)");
            newDIV.setAttribute("ondrop", "drop(event)");
            newDIV.addEventListener("dragenter", dragEnter);
            newDIV.addEventListener("dragleave", dragLeave);
            newDIV.id = "empty"+i+"-"+j;
            newDIV.setAttribute("style", "grid-row: "+(i+1)+"; grid-column: "+(j+2)+"; z-index: 1;")
            grid.appendChild(newDIV);
            
            if (gridData[i][j] != "") {
                // Add courses
                var courseCode = availableID(gridData[i][j].replace(/[ -]/g, "")); // inside the [] is a list of characters to be replaced with ""
                var dragDIV = document.createElement("DIV");
                dragDIV.innerHTML = gridData[i][j];
                //dragDIV.setAttribute("style", "width: 100px; height: 100px;");
                //dragDIV.height = "100px";
                dragDIV.classList.add('drag');
                dragDIV.setAttribute("draggable", "true");
                dragDIV.setAttribute("ondragstart", "dragStart(event)");
                dragDIV.setAttribute("ondrag", "dragging(event)");
                dragDIV.setAttribute("ondragend", "dragEnd(event)");
                dragDIV.setAttribute("onclick", "spotlightCourse(event)");
                dragDIV.setAttribute("onmouseenter", "showDetails(event.target.id)");
                dragDIV.setAttribute("onmouseleave", "showDetails()");
                dragDIV.id = courseCode
                dragDIV.style.setProperty("cursor", "pointer")
                dragDIV.style.display = "initial";
                newDIV.appendChild(dragDIV);
                addWarning(dragDIV);
                //dragElement(dragDIV);
                
                var prereqs = courseData[courseCode].prereqs;
                if (prereqs.length == 0){
                    //dragDIV.innerHTML += "**";
                } else {
                    for (prereq of prereqs) {
                        var svg = document.createElement("DIV");
                        svg.classList.add('svgContainer');
                        svg.setAttribute("obj1", prereq);
                        svg.setAttribute("obj2", courseCode);
                        
                        
                        svg.innerHTML += `
                            <svg>
                            <defs>
                              <marker id="arrowhead`+prereq+"-"+courseCode+`" markerWidth="13" markerHeight="13" refx="6" refy="3" orient="auto">
                                <polygon points="0,0 0,6 5,3" style="fill:red;" />
                              </marker>
                            </defs>
                            <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2; marker-end: url(#arrowhead`+prereq+"-"+courseCode+`);" />
                            </svg>`
                       //var svg = document.getElementsByClassName("svgContainer")[1];
                       document.getElementById("allSVGs").appendChild(svg);
                       //orientArrow(svg); 
                    }
                }
                
            }
        }
    }
    for (var i=0; i<gridData.length; i++){ // for every row
        var color;
        switch (i%3) {
            case 0: color = "rgba(0, 176, 80, 0.5)"; break;
            case 1: color = "rgba(0, 176, 240, 0.5)"; break;
            case 2: color = "rgba(255, 192, 0, 0.5)"; break;
        }
        var newDIV = document.createElement("DIV");
        document.getElementById("grid").appendChild(newDIV);
        newDIV.setAttribute("style", "grid-column: 1 / -1;  background-color: "+color+";  grid-row: "+(i+1)+"; z-index: 0;")
    }
    updateGrid();
}


function updateGrid() {
    moveDetails();
    orientAllArrows(2);
    updateWarnings();
    if (docEle("constantSquishing").checked){
        squish();
    }
}





// --- Drag 'n Drop functions ---
// ------------------------------
var newlocation;
var draggedCourse;


// functions for the placeholders

function allowDrop(ev) {
    if (ev.target.innerHTML == "") {ev.preventDefault();}
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function dragEnter() {
    this.style.backgroundColor = "gray";
    newlocation = this.id;
}
function dragLeave() {
    //this.style.backgroundColor = "white";
    this.style.backgroundColor = "";
}


// functions for the draggable object

function dragStart(ev) {
    newlocation = ev.target.id;
    ev.dataTransfer.setData("text", ev.target.id);
    var placeholders = document.getElementsByClassName("empty");
    for (x of placeholders) {x.style.outline = "0.1em dotted grey";}
}
function dragging(ev) {
    draggedCourse = ev.target.id;
    for (svg of findArrows("obj2", ev.target.id)) {
        svg.setAttribute("obj2", newlocation)
        orientArrow(svg);
        svg.setAttribute("obj2", draggedCourse);
    }
    for (svg of findArrows("obj1", ev.target.id)) {
        svg.setAttribute("obj1", newlocation)
        orientArrow(svg);
        svg.setAttribute("obj1", draggedCourse);
    }
}
function dragEnd(ev) {
    docEle("curriculum").value = "custom"
    updateGrid();
    var placeholders = document.getElementsByClassName("empty");
    for (x of placeholders) {
        x.style.backgroundColor = ""; 
        x.style.outline = "";
    }
    docEle("exportButton").style.visibility = "visible";
    
    //log(ev.target.id+" offered in dropped semester: "+isOffered(ev.target.id));
    showDetails(ev.target.id);
}










// --- Moving the Arrows ---
// -------------------------


function orientArrow(svg) {
    var arrow = svg.getElementsByTagName("line")[0];
    
    var obj1 = document.getElementById(svg.getAttribute("obj1")).getBoundingClientRect();
    obj1.centerx = obj1.left + ((obj1.right - obj1.left)/2);
    obj1.centery = obj1.top + ((obj1.bottom - obj1.top)/2);
    
    var obj2 = document.getElementById(svg.getAttribute("obj2")).getBoundingClientRect();
    obj2.centerx = obj2.left + ((obj2.right - obj2.left)/2);
    obj2.centery = obj2.top + ((obj2.bottom - obj2.top)/2);
    
    var gaps = [];
    gaps.push(obj2.top - obj1.bottom); // vertical gap when obj2 is below obj1
    gaps.push(obj1.top - obj2.bottom); // vertical gap when obj2 is above obj1
    gaps.push(obj2.left - obj1.right); // horizontal gap when obj2 is to the right of obj1
    gaps.push(obj1.left - obj2.right); // horizontal gap when obj2 is to the left of obj1
    largestGap = Math.max.apply(null, gaps);
    
    //moving and shaping the svg so it's not massive
    svg.style.setProperty('left', Math.min(obj1.left, obj2.left)+"px");
    svg.style.setProperty('top', Math.min(obj1.top, obj2.top)+"px");
    var svgPos = svg.firstElementChild.getBoundingClientRect();
    svg.firstElementChild.setAttribute('width', Math.abs(Math.max(obj1.right, obj2.right)-svgPos.left));
    svg.firstElementChild.setAttribute('height', Math.abs(Math.max(obj1.bottom, obj2.bottom)-svgPos.top));
    
    
    //Prioritize connecting the arrow to the top and bottom of the boxes
    var verticlePriority = true;
    
    if (gaps[0] == largestGap || (gaps[0] > 0 && verticlePriority)) { // when obj2 is below obj1
        arrow.setAttribute('x1', obj1.centerx - svgPos.left);
        arrow.setAttribute('y1', obj1.bottom - svgPos.top);;
        arrow.setAttribute('x2', obj2.centerx - svgPos.left);
        arrow.setAttribute('y2', obj2.top - svgPos.top);
    } else if (gaps[1] == largestGap || (gaps[1] > 0 && verticlePriority)) { // when obj2 is above obj1
        arrow.setAttribute('x1', obj1.centerx - svgPos.left);
        arrow.setAttribute('y1', obj1.top - svgPos.top);
        arrow.setAttribute('x2', obj2.centerx - svgPos.left);
        arrow.setAttribute('y2', obj2.bottom - svgPos.top);
    } else if (gaps[2] == largestGap) { // when obj2 is to the right of obj1
        arrow.setAttribute('x1', obj1.right - svgPos.left);
        arrow.setAttribute('y1', obj1.centery - svgPos.top);
        arrow.setAttribute('x2', obj2.left - svgPos.left);
        arrow.setAttribute('y2', obj2.centery - svgPos.top);
    } else if (gaps[3] == largestGap) { // when obj2 is to the left of obj1
        arrow.setAttribute('x1', obj1.left - svgPos.left);
        arrow.setAttribute('y1', obj1.centery - svgPos.top);
        arrow.setAttribute('x2', obj2.right - svgPos.left);
        arrow.setAttribute('y2', obj2.centery - svgPos.top);
    }
}

function orientAllArrows(length = 1) {
    for (var i=0; i < length; i++) {
        
        var allSVGs = document.getElementsByClassName("svgContainer");
        var hideArrows = docEle("hideArrows").checked;
        var spotlightOn = (lastclicked !== "");
        
        for (svg of allSVGs) {
            orientArrow(svg);
            if (coursesVisible(svg) && (!hideArrows || spotlightOn)) {
                svg.style.display = "initial";
            } else {
                svg.style.display = "none";
            }
        }
        
    }
}

function findArrows(attribute, value) {
    var allSVGs = document.getElementsByClassName("svgContainer");
    var result = [];
    for (svg of allSVGs) {
        if (svg.getAttribute(attribute) == value) {result.push(svg)};
    }
    return result;
}

function coursesVisible(svg) {
    var obj1_id = svg.getAttribute("obj1");
    var obj1_status = document.getElementById(obj1_id).style.display;
    var obj1_visible = false;
    if (obj1_status !== "none") {obj1_visible = true}
    
    var obj2_id = svg.getAttribute("obj2");
    var obj2_status = document.getElementById(obj2_id).style.display;
    var obj2_visible = false;
    if (obj2_status !== "none") {obj2_visible = true}
    
    // if ((obj1_visible && obj2_visible)) {log(obj1_status + ", " + obj2_status)}
    
    return (obj1_visible && obj2_visible)
}







// --- Show/Hide Related Courses and Arrows ---
// --------------------------------------------

var lastclicked = ""; //course on spotlight

var allCourses = document.getElementsByClassName("drag");

function spotlightCourse(ev){
    if(ev.target.className !== "drag"){return;}
    var course = ev.target;
    if (lastclicked !== course.id){
        lastclicked = course.id;
        for (x of allCourses) {
            x.style.display = "none";
            x.style.setProperty("background-color", "lightblue");
        }
        course.style.setProperty("background-color", "yellow");
        showPrereq(course);
        showLeadingTo(course);
        orientAllArrows(3);
    } else {
        for (x of allCourses) {
            x.style.display = "initial";
            x.style.setProperty("background-color", "lightblue");
        }
        orientAllArrows();
        lastclicked = "";
        orientAllArrows(2); 
    }
}

function showPrereq(course) {
    for (x of allCourses) {
        if (x == course) {
            x.style.display = "initial";
        } else if (courseData[course.id].prereqs.includes(x.id)){
            x.style.display = "initial";
            showPrereq(x);
        }
    }
}
function showLeadingTo(course) {
    for (x of allCourses) {
        if (x == course) {
            x.style.display = "initial";
        } else if (courseData[x.id].prereqs.includes(course.id)){
            x.style.display = "initial";
            showLeadingTo(x);
        }
    }
}








// --- Course Term Validation ---
// ------------------------------

function currentTerm(courseId){
    return (docEle(courseId).parentElement.style.gridRowStart) - 1;
}

function isOffered(courseId){
    var currentTermString = term2string(currentTerm(courseId));
    var result = courseData[courseId].terms.includes(currentTermString);
    var warning = "";
    if (!result) {
        warning = "Warning: "+courseId+" is usually only offered in the ";
        warning += courseData[courseId].terms[0];
        if (courseData[courseId].terms.length>1){
            warning += " and "+courseData[courseId].terms[1];
        }
        warning += "."
    }
    return [result, warning];
}
function prereqsValidated(courseId){
    var result = true;
    var warning = ""
    var warningArray = [];
    for (prereq of courseData[courseId].prereqs){
        var prereqBefore = (currentTerm(prereq) < currentTerm(courseId));
        var prereqDuring = (currentTerm(prereq) == currentTerm(courseId));
        var isConcurrentOk = courseData[courseId].concurrentOk.includes(prereq);
        
        if ( !prereqBefore && !(prereqDuring && isConcurrentOk) ){
            result = false;
            warning = "Warning: "+prereq+" must be taken before ";
            if (isConcurrentOk){warning += "or concurrently with "};
            warning += courseId+"."
            warningArray.push(warning);
        }
    }
    return [result, warningArray];
}
function isCoop(courseId){
    var type = courseData[courseId].type;
    if (type == "coop" || type == "coop option"){
        return true;
    } else {
        return false;
    }
    
}
function isOnlyCourseInTerm(courseId){ // Used for Co-Op Terms
    var result = true;
    var warning = "";
    for (x of allCourses){
        if (x.id == courseId){continue;}
        if (currentTerm(x.id) == currentTerm(courseId)){
            result = false;
        }
    }
    if (!result){
        warning += "Warning: Additional courses can not be taken during a ";
        warning += "co-op practicum without prior consultation and "
        warning += "approval from your employer and co-op coordinator.";
        //https://www.sfu.ca/coop/about/guide/work-term.html#:~:text=Enrollment%20in%20Academic%20Courses%20While,employers%20and%20co%2Dop%20coordinators.
    }
    return [result, warning];
}


function isValidated(courseId){
    var warning = [];
    if (isCoop(courseId)){
        if (!isOnlyCourseInTerm(courseId)[0]){
            warning.push(isOnlyCourseInTerm(courseId)[1]);
        }
    }else{
        if (!prereqsValidated(courseId)[0]){
            for (x of prereqsValidated(courseId)[1]){warning.push(x);}
        }
        if (!isOffered(courseId)[0]){
            warning.push(isOffered(courseId)[1]);
        }
    }
    return [(warning.length == 0), warning];
}

function addWarning(course){ // Used in loadGrid()
    var warningSign = document.createElement("IMG");
    warningSign.src = "img/warning.png";
    warningSign.className  = "warning";
    course.append(warningSign);
}

function showWarning(courseId){
    if (isValidated(courseId)[0]){
        docEle(courseId).getElementsByTagName('img')[0].style.display = "none";
        docEle(courseId).title = "";
    } else {
        docEle(courseId).getElementsByTagName('img')[0].style.display = "initial";
        docEle(courseId).title = "";
        for (x of isValidated(courseId)[1]){
            docEle(courseId).title += x + "\n";
        }
    }
}

function updateWarnings(){
    for (x of allCourses){
        showWarning(x.id);
    }
}



// --- Squish Courses to the Left ---
// ----------------------------------

function squish() {
    if (docEle("constantSquishing").parentElement.style.display !== "initial") {
        if (!confirm("Warning: moving all courses to the left cannot be undone (unless it is a pre-made curriculum). Are you sure you want to do this?")){
            return;
        }
        docEle("constantSquishing").parentElement.style.display = "initial";
        docEle("constantSquishing").checked = true;
        changeCurriculum();
        docEle("constantSquishing").checked = false;
    }
    var slots = document.getElementsByClassName("empty");
    var leftmost = 0;
    var currentRow = 0;
    for (i of slots){
        if ((i.style.gridRowStart-1) !== currentRow){
            currentRow = i.style.gridRowStart-1;
            leftmost = 0;
        }
        if (i.firstChild){
            docEle("empty"+currentRow+"-"+leftmost).appendChild(i.firstChild);
            leftmost++;
        }
    }
    //updateGrid(); //if constant squishing is enabled, an infinite loop will occur
    orientAllArrows(2);
    updateWarnings();
}






