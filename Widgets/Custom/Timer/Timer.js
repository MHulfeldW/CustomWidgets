// Timer.js

let timerDuration = 600; // Set timer duration in seconds (e.g., 600 seconds = 10 minutes)
let timerElement = document.getElementById('timer');
let interval;
let fieldData;

function startTimer(duration) {
    let start = Date.now();
    interval = setInterval(function () {
        let elapsed = Math.floor((Date.now() - start) / 1000);
        let remaining = duration - elapsed;

        if (remaining <= 0) {
            clearInterval(interval);
            timerElement.textContent = "00:00";
        } else {
            let minutes = Math.floor(remaining / 60);
            let seconds = remaining % 60;
            timerElement.textContent = `${pad(minutes)}:${pad(seconds)}`;
        }
    }, 1000);
}

window.addEventListener('onWidgetLoad', function (obj) {
    fieldData=obj["detail"]["fieldData"];
});

function pad(value) {
    return value.toString().padStart(2, '0');
}

// Start the timer
startTimer(timerDuration);
