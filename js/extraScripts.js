

// --- Key Sequencing Detection ---
// --------------------------------

const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

var keyCount = 0;
window.addEventListener('keyup', (event) => {
    //console.log(event.key + ", " + keyCount);
    
    if (secretCode[keyCount] !== event.key) {
        keyCount = 0;
    } else {
        keyCount++;
        //log(i);
        if (keyCount == 10) {
            alert("Konami Code entered");
            keyCount = 0;
        }
    }
});


