let x=0;
let y=0;
document.getElementById("big-small").addEventListener("click", function() {
    x=1;
    y=0;
    var element = document.getElementById("action1");
    var element1 = document.getElementById("red-green");
    var element2 = document.getElementById("big-small");
    var element3 = document.getElementById("tele");
    element.style.opacity = "1"; 
    element1.style.opacity = "0.4"; 
    element2.style.opacity = "1";
    element3.style.display = "block";  
   
});
document.getElementById("red-green").addEventListener("click", function() {
    x=0;
    y=1;
    var element = document.getElementById("action1");
    var element1 = document.getElementById("big-small");
    var element2 = document.getElementById("red-green");
    var element3 = document.getElementById("tele");
    element.style.opacity = "1"; 
    element1.style.opacity = "0.4"; 
    element2.style.opacity = "1"; 
    element3.style.display = "block"; 

   
});
var p = document.getElementById("period");

document.getElementById("nextbet").addEventListener("click", function() {
    var resultElement = document.getElementById("result");
    if (p.value === "") {
        resultElement.textContent = "Please enter a period number.";
    } else {
        resultElement.textContent = "RESULT : Loading...";
        setTimeout(function() {
            if (x === 1) {
                var bigSmall = Math.random() < 0.5 ? "BIG" : "SMALL";
                resultElement.textContent = "RESULT : " + bigSmall;
            }
    
            if (y === 1) {
                var color = Math.random() < 0.5 ? "RED" : "GREEN";
                resultElement.textContent = "RESULT : " + color;
            }
        }, 3000); 
    }
});

document.getElementById("removepop").addEventListener("click", function() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    
});
window.addEventListener('load', function() {
    var audio = document.getElementById("loading");
    audio.play();
});

document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the clicked element is a button
        if (event.target.tagName === 'BUTTON') {
            // Get the audio element
            var audio1 = document.getElementById('clicking');
            // Play the audio
            audio1.play();
        }
    });
});
