document.addEventListener('DOMContentLoaded', () => {
    let timerDuration = 600; // Set timer duration in seconds (e.g., 600 seconds = 10 minutes)
    let timerBar = document.getElementById('timer-bar');
    let interval;

    function startTimer(duration) {
        let start = Date.now();
        interval = setInterval(function () {
            let elapsed = Math.floor((Date.now() - start) / 1000);
            let remaining = duration - elapsed;

            if (remaining <= 0) {
                clearInterval(interval);
                timerBar.style.width = '0%';
            } else {
                let percentage = (remaining / duration) * 100;
                timerBar.style.width = `${percentage}%`;
            }
        }, 1000);
    }

    // Start the timer
    startTimer(timerDuration);
});
