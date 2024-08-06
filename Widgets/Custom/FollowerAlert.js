const alertContainer = document.getElementById('alert-container');
const alertImage = document.getElementById('alert-image');
const alertSound = document.getElementById('alert-sound');
const followerNameSpan = document.getElementById('follower-name');

window.addEventListener('onEventReceived', function (obj) {
    const event = obj.detail.event;

    if (event.listener === 'follower-latest') {
        const followerName = event.name;

        // Set the follower's name
        followerNameSpan.textContent = followerName;

        // Play the alert sound
        alertSound.play();

        // Show the alert
        alertContainer.style.display = 'flex';

        // Hide the alert after 5 seconds
        setTimeout(() => {
            alertContainer.style.display = 'none';
        }, 5000);
    }
});
