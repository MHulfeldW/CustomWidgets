let timerDuration = 600; // Set timer duration in seconds (e.g., 600 seconds = 10 minutes)
let timerBar = document.getElementById('timer-bar');
let timerText = document.getElementById('timer-text');
let interval;

function startTimer(duration) {
    let start = Date.now();
    interval = setInterval(function () {
        let elapsed = Math.floor((Date.now() - start) / 1000);
        let remaining = duration - elapsed;

        if (remaining <= 0) {
            clearInterval(interval);
            timerText.textContent = "00:00";
            timerBar.style.width = '0%';
        } else {
            let minutes = Math.floor(remaining / 60);
            let seconds = remaining % 60;
            timerText.textContent = `${pad(minutes)}:${pad(seconds)}`;

            // Update the progress bar width
            let progress = (remaining / duration) * 100;
            timerBar.style.width = `${progress}%`;
        }
    }, 1000);
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

// Start the timer
startTimer(timerDuration);
