// Get elements
const subscribeBtn = document.getElementById('subscribeButton'); // Matches your button ID
const popup = document.getElementById('newsletterPopup'); // Matches your popup ID
const closeBtn = document.querySelector('.close-btn'); // Matches your close button class

// Show the popup when the "Subscribe" button is clicked
subscribeBtn.onclick = function () {
    popup.style.display = 'flex'; // Set display to flex to show the popup
};

// Close the popup when the close button is clicked
closeBtn.onclick = function () {
    popup.style.display = 'none'; // Hide the popup
};

// Close the popup when clicking outside the popup content
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the popup
    }
};

// Automatically show the popup 10 seconds after the page loads
window.onload = function () {
    setTimeout(() => {
        popup.style.display = 'flex'; // Show the popup
    }, 10000); // 10 seconds
};
