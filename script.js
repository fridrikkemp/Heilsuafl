document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navOptions = document.querySelector('.nav-options');

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navOptions.setAttribute('aria-hidden', isExpanded);
        navOptions.style.display = isExpanded ? 'none' : 'block'; // Toggle dropdown
    });
});
