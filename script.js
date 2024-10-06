// Event listener for redirecting to the event creation page
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Organise my Dinner Party" button (on index.html)
    const organizeBtn = document.querySelector('.organize-btn');
    if (organizeBtn) {
        // Redirect to create-event.html when clicked
        organizeBtn.addEventListener('click', function() {
            window.location.href = 'create-event.html';
        });
    }

    // Get the "Back to Home" button (on create-event.html)
    const backBtn = document.querySelector('.back-button');
    if (backBtn) {
        // Redirect to index.html when clicked
        backBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
