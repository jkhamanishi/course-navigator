
// $(document).ready(function(){
    // alert('page loaded');
// });

function hello() {
    alert('Hello world! (test successful)');
};


/* Grid Scrips */
var gridData = flexA;
console.log(gridData); // var gridData from gridData.js


window.onload = function(){

var grid = document.getElementById("grid");

grid.style.setProperty('grid-template-columns', "1fr ".repeat(gridData[0].length));

for (var i=0; i<gridData.length; i++){ // for every row
    
    for (var j=0; j<gridData[0].length; j++){ // for every column
        var newDIV = document.createElement("DIV");
        //newDIV.innerHTML = "corn";
        newDIV.classList.add('empty');
        newDIV.setAttribute("ondragover", "allowDrop(event)");
        newDIV.setAttribute("ondrop", "drop(event)");
        //newDIV.setAttribute("ondragenter", "dragEnter()");
        //newDIV.setAttribute("dragleave", "dragLeave()");
        newDIV.addEventListener("dragenter", dragEnter);
        newDIV.addEventListener("dragleave", dragLeave);
        grid.appendChild(newDIV);
        
        if (gridData[i][j] != "") {
            var dragDIV = document.createElement("DIV");
            dragDIV.innerHTML = gridData[i][j];
            //dragDIV.setAttribute("style", "width: 100px; height: 100px;");
            //dragDIV.height = "100px";
            dragDIV.classList.add('drag');
            dragDIV.setAttribute("draggable", "true");
            dragDIV.setAttribute("ondragstart", "drag(event)");
            dragDIV.id = gridData[i][j].replace(/ +/g, "");
            dragDIV.style.setProperty("cursor", "move")
            newDIV.appendChild(dragDIV);
        }
    }
    
}
}

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
}

function dragLeave() {
  this.style.backgroundColor = "white";
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}








