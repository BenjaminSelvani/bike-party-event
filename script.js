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

    // Event listener for form submission on create-event.html
    const eventForm = document.querySelector('form');
    if (eventForm) {
        eventForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the form from submitting (no backend yet)

            // Simulate form data processing
            const eventName = document.querySelector('#event-name').value;
            localStorage.setItem('eventName', eventName); // Store event name in localStorage for later use

            alert('Event created successfully! Redirecting to confirmation...');

            // Redirect to confirmation page
            window.location.href = 'confirmation-event-creation.html';
        });
    }

    // On confirmation-event-creation.html, populate the Event Name, Passcode, and Event Number
    const confirmationPage = document.querySelector('#event-name');
    if (confirmationPage) {
        const storedEventName = localStorage.getItem('eventName') || 'Sample Event'; // Get event name from storage or use a default value
        const passcode = Math.random().toString(36).substring(2, 8).toUpperCase(); // Generate random passcode
        const eventNumber = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit event number

        // Populate the fields with dynamic data
        document.getElementById('event-name').innerText = storedEventName;
        document.getElementById('passcode').value = passcode;
        document.getElementById('event-number').value = eventNumber;
    }

    // Create Invite Link Button
    const inviteLinkButton = document.querySelector('.invite-link');
    if (inviteLinkButton) {
        inviteLinkButton.addEventListener('click', function () {
            // Placeholder logic for creating an invite link
            alert('Invite link created! Share this with participants.');
            // Actual invite link generation logic can go here
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
    const pricingPageButton = document.querySelector('.pricing-page');
    if (pricingPageButton) {
        pricingPageButton.addEventListener('click', function () {
            window.location.href = 'pricing.html'; // Update with your pricing page URL
        });
    }
});
