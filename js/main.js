document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');

    menuToggle.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            nav.classList.add('closing');
            nav.addEventListener('transitionend', () => {
                nav.classList.remove('open', 'closing');
            }, { once: true });
        } else {
            nav.classList.add('open');
        }
    });

    // Close the menu when a nav link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('open');
        });
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