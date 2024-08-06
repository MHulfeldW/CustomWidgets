// Function to display the alert
function showAlert(username) {
    const alertMessage = document.getElementById('alert-message');
    const usernameSpan = document.getElementById('username');

    // Set the username in the alert
    usernameSpan.textContent = username;

    // Show the alert
    alertMessage.style.display = 'block';

    // Hide the alert after 5 seconds
    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 5000);
}

// Listen for events from StreamElements
window.addEventListener('onEventReceived', function (obj) {
    if (obj.detail.event && obj.detail.listener === 'follower-latest') {
        const follower = obj.detail.event.name;
        showAlert(follower);
    }
});

// Hide the alert initially
document.getElementById('alert-message').style.display = 'none';
