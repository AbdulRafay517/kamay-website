document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const serviceItems = document.querySelectorAll('.services-list li');
    const serviceContents = document.querySelectorAll('.service-content');

    let lastActiveService = null;

    menuToggle.addEventListener('click', function() {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5);
            if (isVisible) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Call initially to set visibility
});