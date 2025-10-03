document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.navbarmenu button');
    const sections = document.querySelectorAll('.section');

    // Shared function for both methods
    function showSection(targetId) {
        // Remove active from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active to the button that matches the targetId
        const activeButton = document.querySelector(`.navbarmenu button[data-target="${targetId}"]`);
        if (activeButton) activeButton.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show the targeted section
        const target = document.getElementById(targetId);
        if (target) target.classList.add('active');
    }

    // Original: navbar click events
    buttons.forEach(button => {
        button.addEventListener('click', () => showSection(button.dataset.target));
    });

    // Function: can be called from anywhere
    window.navigateTo = showSection;
});
