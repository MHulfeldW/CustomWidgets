// Timer.js

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

// Fetch configuration settings from StreamElements
SE.getWidgetSettings().then(settings => {
    let timerDuration = settings.timerDuration || 600; // Default to 600 seconds if not set
    startTimer(timerDuration);
}).catch(error => {
    console.error('Error fetching widget settings:', error);
    // Start with default timer duration if fetching fails
    startTimer(600);
});
