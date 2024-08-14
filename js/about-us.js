document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth;
        const carouselWidth = carousel.offsetWidth;
        const gap = 20; // Gap between items
        const offset = (carouselWidth - itemWidth) / 2;

        items.forEach((item, index) => {
            const distance = index - currentIndex;
            item.style.transform = `translateX(${distance * (itemWidth + gap) - offset}px)`;
            item.classList.toggle('active', index === currentIndex);
        });
    }

    function scrollNext() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function scrollPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    leftArrow.addEventListener('click', scrollPrev);
    rightArrow.addEventListener('click', scrollNext);

    // Initial update
    updateCarousel();

    // Adjust carousel on window resize
    window.addEventListener('resize', updateCarousel);

    // Preload images to ensure they're all available when scrolling
    items.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            const src = img.getAttribute('src');
            const preloadImage = new Image();
            preloadImage.src = src;
        }
    });
});