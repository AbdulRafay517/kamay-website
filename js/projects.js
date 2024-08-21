document.addEventListener('DOMContentLoaded', function () {
    new Splide('#project-slider', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '2rem',
        pagination: false,
        arrows: true,
        speed: 500,
        drag: true,
        swipeThreshold: 10,
        dragMinThreshold: 10,
        flickPower: 2000,
        flickMaxPages: 1,
        waitForTransition: true,
        updateOnMove: true,
        breakpoints: {
            1024: {
                perPage: 1,
                arrows: true,
                focus: 'center'
            },
            768: {
                perPage: 1,
                arrows: false,
                pagination: true
            },
        },
    }).mount();
});