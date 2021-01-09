

// --- Key Sequencing Detection ---
// --------------------------------

const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

var i = 0;
window.addEventListener('keyup', (event) => {
    
    if (secretCode[i] !== event.key) {
        i = 0;
    } else {
        i++;
        //log(i);
        if (i == 10) {alert("Konami Code entered")}
    }
});


