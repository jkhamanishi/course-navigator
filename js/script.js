

function hello() {
    alert('Hello world! (test successful)');
};


function log(text){console.log(text)};


// --- Grid Scripts ---
// --------------------

console.log(flexA); // var flexA from default-curriculums.js
console.log(courseData); // var courseData from courseData.js

function loadGrid(gridData){
    var grid = document.getElementById("grid");
    grid.innerHTML = "";

    grid.style.setProperty('grid-template-columns', "1fr ".repeat(gridData[0].length));

    for (var i=0; i<gridData.length; i++){ // for every row
        
        for (var j=0; j<gridData[0].length; j++){ // for every column
            // Add empty placeholders
            var newDIV = document.createElement("DIV");
            //newDIV.innerHTML = "corn";
            newDIV.classList.add('empty');
            newDIV.setAttribute("ondragover", "allowDrop(event)");
            newDIV.setAttribute("ondrop", "drop(event)");
            newDIV.addEventListener("dragenter", dragEnter);
            newDIV.addEventListener("dragleave", dragLeave);
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
                dragDIV.setAttribute("ondrag", "dragging()");
                dragDIV.setAttribute("ondragend", "dragEnd()");
                dragDIV.id = courseCode.replace(/ +/g, "");
                dragDIV.style.setProperty("cursor", "move")
                newDIV.appendChild(dragDIV);
                //dragElement(dragDIV);
                
                var prereqs = courseData[courseCode].prereqs;
                if (prereqs.length == 0){
                    dragDIV.innerHTML += "**";
                } else {
                    for (prereq of prereqs) {
                        var svg = document.createElement("DIV");
                        svg.classList.add('svgContainer');
                        svg.setAttribute("obj1", prereq);
                        svg.setAttribute("obj2", courseCode);
                        
                        
                        svg.innerHTML += `
                            <svg>
                            <defs>
                              <marker id="arrowhead" markerWidth="13" markerHeight="13" refx="6" refy="3" orient="auto">
                                <polygon points="0,0 0,6 5,3" style="fill:red;" />
                              </marker>
                            </defs>
                            <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2; marker-end: url(#arrowhead);" />
                            </svg>`
                       //var svg = document.getElementsByClassName("svgContainer")[1];
                       document.getElementById("allSVGs").appendChild(svg);
                       //orientArrow(svg); 
                    }
                }
                
            }
        }
    }
}








// --- Drag 'n Drop functions ---
// ------------------------------

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
  //obj1 = this.getBoundingClientRect();
}

function dragLeave() {
  //this.style.backgroundColor = "white";
  this.style.backgroundColor = "";
}

// functions for the draggable object

function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  //dragging = true;
}

function dragEnd() {
    //dragging = false;
}

function dragging() {
    //log("heloo");
    //orientArrow(svg, obj1, obj2)
}





//var dragging = false;

// dragElement() not currently used
function dragElement(elmnt) {
  //  orientArrow()
  var box1 = 0, box2 = 0, box3 = 0, box4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    elmnt.style.top = "";
    elmnt.style.left = "";
    elmnt.style.position = "absolute";
    // get the mouse cursor position at startup:
    box3 = e.clientX;
    box4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = function(){elementDrag();}
    dragging = true;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    box1 = box3 - e.clientX;
    box2 = box4 - e.clientY;
    box3 = e.clientX;
    box4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - box2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - box1) + "px";  
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.position = "static";
    dragging = false;
  }
}


// --- Moving the Arrows ---
// ----------------------------------



function orientArrow(svg, obj1, obj2) {
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
    svg.firstElementChild.setAttribute('width', Math.max(obj1.right, obj2.right)-svgPos.left)
    svg.firstElementChild.setAttribute('height', Math.max(obj1.bottom, obj2.bottom)-svgPos.top)

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

function orientAllArrows() {
    var allSVGs = document.getElementsByClassName("svgContainer");
    for (svg of allSVGs) {
        orientArrow(svg);
    }
}





// --- Auto Run After Page Loaded ---
// ----------------------------------



// var svg
// var obj1 = {};
// var obj2 = {};

$(document).ready(function(){
    //alert('page loaded');
    loadGrid(flexA);
    //dragElement(document.getElementById("myDIV"));
    
    
    var svg = document.getElementsByClassName("svgContainer")[0];
    // obj1 = document.getElementById("MSE312").getBoundingClientRect();
    // obj2 = document.getElementById("PHYS140").getBoundingClientRect();
    //orientArrow(svg);
    
    orientAllArrows();
});




$(window).resize(function(){
    //var svg = document.getElementsByClassName("svgContainer")[0];
    //orientArrow(svg);
    orientAllArrows();
});












