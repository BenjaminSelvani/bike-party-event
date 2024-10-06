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

Example

document.addEventListener('DOMContentLoaded', function() {
    // Assuming these values come from a backend or are generated on the frontend
    const eventName = localStorage.getItem('eventName') || 'Sample Event'; // Placeholder logic
    const passcode = Math.random().toString(36).substring(2, 8).toUpperCase(); // Generates a random passcode
    const eventNumber = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number

    // Insert values into the placeholders
    document.getElementById('event-name').innerText = eventName;
    document.getElementById('passcode').value = passcode;
    document.getElementById('event-number').value = eventNumber;
});


document.addEventListener('DOMContentLoaded', function () {
    // Create Invite Link Button
    const inviteLinkButton = document.querySelector('.invite-link');
    if (inviteLinkButton) {
        inviteLinkButton.addEventListener('click', function () {
            // Placeholder logic for creating an invite link
            alert('Invite link created! Share this with participants.');
            // You can replace this with actual logic to generate a link
        });
    }

    // Invite via WhatsApp Button
    const inviteWhatsAppButton = document.querySelector('.invite-whatsapp');
    if (inviteWhatsAppButton) {
        inviteWhatsAppButton.addEventListener('click', function () {
            const eventLink = 'https://your-event-link.com'; // Replace with your actual event link
            const message = `Join my event: ${eventLink}`;
            const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    }

    // Invite via Email Button
    const inviteEmailButton = document.querySelector('.invite-email');
    if (inviteEmailButton) {
        inviteEmailButton.addEventListener('click', function () {
            const subject = 'Join My Event';
            const body = 'I am inviting you to my event. Here is the link: https://your-event-link.com';
            const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        });
    }

    // Admin Dashboard Button
    const adminDashboardButton = document.querySelector('.admin-dashboard');
    if (adminDashboardButton) {
        adminDashboardButton.addEventListener('click', function () {
            window.location.href = 'admin-dashboard.html'; // Update with your admin dashboard URL
        });
    }

    // Upgrade Event Button
    const upgradeEventButton = document.querySelector('.upgrade-event');
    if (upgradeEventButton) {
        upgradeEventButton.addEventListener('click', function () {
            window.location.href = 'upgrade-event.html'; // Update with your upgrade event URL or logic
        });
    }

    // Pricing Page Button
    const pricingPageButton = document.querySelector('.pricing');
    if (pricingPageButton) {
        pricingPageButton.addEventListener('click', function () {
            window.location.href = 'pricing.html'; // Update with your pricing page URL
        });
    }
});
