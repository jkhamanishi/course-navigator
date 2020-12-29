

function hello() {alert('Hello world! (test successful)');};

function setDarkTheme(){document.body.classList.add('darkTheme');};

function here(){console.log("here");};

function log(text){console.log(text);};


// --- Grid Scripts ---
// --------------------

console.log(flexA); // var flexA from default-curriculums.js
console.log(courseData); // var courseData from courseData.js

function loadGrid(gridData){
    var grid = document.getElementById("grid");
    grid.innerHTML = "";

    grid.style.setProperty('grid-template-columns', "auto "+"1fr ".repeat(gridData[0].length));

    for (var i=0; i<gridData.length; i++){ // for every row
        
        for (var j=-1; j<gridData[0].length; j++){ // for every column
            if (j==-1) {
                var term;
                switch (i%3) {
                    case 0: term = "Fall"; break;
                    case 1: term = "Spring"; break;
                    case 2: term = "Summer"; break;
                }
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
                var courseCode = gridData[i][j];
                var dragDIV = document.createElement("DIV");
                dragDIV.innerHTML = courseCode;
                //dragDIV.setAttribute("style", "width: 100px; height: 100px;");
                //dragDIV.height = "100px";
                dragDIV.classList.add('drag');
                dragDIV.setAttribute("draggable", "true");
                dragDIV.setAttribute("ondragstart", "dragStart(event)");
                dragDIV.setAttribute("ondrag", "dragging(event)");
                dragDIV.setAttribute("ondragend", "dragEnd()");
                dragDIV.setAttribute("onclick", "spotlightCourse(event)");
                dragDIV.id = courseCode.replace(/ +/g, "");
                dragDIV.style.setProperty("cursor", "move")
                dragDIV.style.display = "initial";
                newDIV.appendChild(dragDIV);
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
}







// --- Drag 'n Drop functions ---
// ------------------------------
var newlocation = "CHEM120";
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
    //newlocation = draggedCourse;
}


// functions for the draggable object

function dragStart(ev) {
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
}   }
function dragEnd() {
    orientAllArrows();
    var placeholders = document.getElementsByClassName("empty");
    for (x of placeholders) {
        x.style.backgroundColor = ""; 
        x.style.outline = "";
}   }










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
        for (svg of allSVGs) {
            orientArrow(svg);
            if (coursesVisible(svg)) {
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







// --- Show/Hide Related Courses and Arrows---
// ----------------------------------

var lastclicked;

var allCourses = document.getElementsByClassName("drag");

function spotlightCourse(ev) {
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













// --- Auto Run After Page Loaded ---
// ----------------------------------


$(document).ready(function(){
    //alert('page loaded');
    loadGrid(flexA);
    orientAllArrows();
    
    // var testDIV = document.createElement("DIV");
    // document.getElementById("grid").appendChild(testDIV);
    // testDIV.setAttribute("style", "grid-column: 1 / -1;  background-color: rgba(0, 0, 250, 1);  grid-row: 3; z-index: 0;")
    
});


$(window).resize(function(){
    orientAllArrows();
});












