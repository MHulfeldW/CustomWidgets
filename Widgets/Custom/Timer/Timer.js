// Timer.js

// Function to get the field data (example implementation)
function getFieldData(fieldName) {
    // Replace with actual method to get field data from StreamElements
    // For example, if using StreamElements SDK:
    return SE_FIELD_DATA[fieldName];
}

let timerDuration = getFieldData('timerDuration') || 600; // Default to 600 seconds if not set
let timerElement = document.getElementById('timer');
let interval;

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

function pad(value) {
    return value.toString().padStart(2, '0');
}

// Start the timer with the configured duration
startTimer(timerDuration);
