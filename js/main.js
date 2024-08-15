document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');

    // Toggle navigation menu visibility
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open'); // Use class to control visibility
    });

    // Intersection Observer setup
    const observerOptions = {
        root: null, // Observe intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger the callback when 10% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});