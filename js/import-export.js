// --- Export Functions ---
// ------------------------

function getGridSize(){
    var gridContents = document.getElementById("grid").children;
    
    // Find last row
    var rows = parseInt(gridContents[gridContents.length-1].style.gridRowStart);
    
    // Find last column
    var columns;
    var foundFirstRow = false;
    for (var i=0; i<gridContents.length; i++) {
        if (gridContents[i].className == "termLabel") {
            if (foundFirstRow) {
                columns = gridContents[i-1].style.gridColumnStart - 1;
                break;
            } else {foundFirstRow = true;}
        }
    }
    
    return [rows, columns];
}

function exportCurriculum (copyData = true){
    if (copyData) {
        showDialogBox("exportDialogBox");
    }
    var exportOutput = document.getElementById("exportOutput");
    
    var grid = document.getElementById("grid");
    var gridContents = grid.children;
    
    var rows, columns;
    [rows, columns] = getGridSize();
    
    
    var text = "";
    var k = 0;
    for (var i=0; i<rows; i++){ // for every row
        for (var j=0; j<columns; j++){ // for every column
            if (gridContents[k].className == "termLabel") {k++;}
            if (gridContents[k].firstChild) {
                text += gridContents[k].firstChild.innerText
            }
            k++;
            if (j !== columns - 1) {text += ",";}
        }
        if (i !== rows - 1) {text += "\n";}
    }

    exportOutput.textContent = text;
    return text;
}


function copy(container_id, buttonId) {
  const el = document.createElement('textarea');
  el.value = docEle(container_id).innerText;
  document.body.appendChild(el); el.select(); document.execCommand('copy');
  document.body.removeChild(el);
  copied(buttonId);
}
async function copied(buttonId){
    document.getElementById(buttonId).innerHTML = "Copied!"
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById(buttonId).innerHTML = "Copy Contents to Clipboard"
}

function download(filename, text, buttonId) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  saved(buttonId)
}
async function saved(buttonId){
    document.getElementById(buttonId).innerHTML = "Saved!"
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById(buttonId).innerHTML = "Save Contents as a File"
}


// --- Import Functions ---
// ------------------------

function csv2jsData(csv, mode){
    // mode=1:  .csv with header row and header column --> Object with labeled rows and labeled columns
    // mode=2:  .csv with header row --> Object with header row
    // mode=3:  .csv with header row --> Array without headings
    // mode=4:  .csv without header row --> Array without headings
    
    var newValue = ",";
    var newLine = "\n";
    // console.log('this:'+newValue + ' this:'+newLine)
    
    var lines = csv.split(newLine);
    for (var i = 0; i < lines.length-1; i++){
        //every last value in each row contains some sort of bad character at the end that isn't "/n"
        //lines[i] = lines[i].split(lines[i].charAt(lines[i].length-1))[0]
    }
    
    var titles = lines[0].split(newLine)[0].split(newValue);
    
    
    var extraLines = 0;
    //log(lines)
    //log(lines[lines.length-1].length);
    if (lines[lines.length-1].length == 0) {extraLines = 1;}
    if (mode !== 4) {extraLines += 1;}
    //log(extraLines)
    
    var data = new Array(lines.length - extraLines);
    //log(data.length)
    
    switch (mode){
        case 1: // Object with header row and header column
            for (var i = 1; i <= data.length; i++) {
                lines[i] = lines[i].split(newValue);
                data[lines[i][0]] = {};
                for (var j = 1; j < titles.length; j++) {
                    data[lines[i][0]][titles[j]] = lines[i][j];
                };
            };
            break;
        case 2: // Object with header row
            for (var i = 1; i <= data.length; i++) {
                data[i - 1] = {};
                lines[i] = lines[i].split(newValue);
                for (var j = 0; j < titles.length; j++) {
                    data[i - 1][titles[j]] = lines[i][j];
                };
            };
            break;
        case 3: // Array without headings
            for (var i = 1; i <= data.length; i++) {
                data[i - 1] = [];
                lines[i] = lines[i].split(newValue);
                for (var j = 0; j < titles.length; j++) {
                    data[i - 1][j] = lines[i][j];
                };
            };
            break;
        case 4: // Array without headings
            for (var i = 0; i < data.length; i++) {
                data[i ] = [];
                lines[i] = lines[i].split(newValue);
                for (var j = 0; j < titles.length; j++) {
                    data[i][j] = lines[i][j];
                };
            };
            break;
    }

    //console.log(data);
    return data;
}




// --- Dialog Box ---
// ------------------

function showDialogBox(dialogBoxId) {
    document.getElementById(dialogBoxId).style.display = "grid";
}
function hideDialogBox(dialogBoxId) {
    document.getElementById(dialogBoxId).style.display = "none";
}

// Called in "Automated Section" of main.js
function assignDialogFunctions() {
    
    // click outside dialog box
    for (x of document.getElementsByClassName("dialogBox")){
        x.addEventListener("click", function(event) {
            if (notChildren(event, this.id)) {
                hideDialogBox(this.id);
            }
        });
    }
    
    
    // --- Export Dialog Box---
    // click [Copy] button
    docEle("copyExportButton").addEventListener("click", function() {
        copy('exportOutput', 'copyExportButton')
    });
    // click [Save] button
    docEle("saveExportButton").addEventListener("click", function() {
        download("MyCurriculum.txt", docEle('exportOutput').innerText, "saveExportButton")
    });
    
    
    // --- Import Dialog Box ---
    // click [Go!] button
    docEle("importButton").addEventListener("click", function() { // Go!
        var text = docEle("importedCurriculum").value;
        try {
            loadGrid(csv2jsData(text, 4));
            hideDialogBox("importDialogBox");
            docEle("importedCurriculum").value = "";
            docEle("errorMsg").innerHTML = ""
        } catch {
            var warningSign = '<img class="inlineWarning" src="img/warning.png"/>';
            docEle("errorMsg").innerHTML = warningSign+"invalid input format"
        }
        docEle("curriculum").value = "custom"
    });
}






