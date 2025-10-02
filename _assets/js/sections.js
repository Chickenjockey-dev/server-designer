document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.navbarmenu button');
    const sections = document.querySelectorAll('.section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            // Show the targeted section
            const target = document.getElementById(button.dataset.target);
            if (target) target.classList.add('active');
        });
    });
});
