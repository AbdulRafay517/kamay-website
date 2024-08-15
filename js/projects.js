document.addEventListener('DOMContentLoaded', function () {
    new Splide('#project-slider', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '2rem',
        pagination: false,
        arrows: true,
        speed: 500,
        breakpoints: {
            1024: {
                perPage: 1,
                arrows: true,
                focus: 'center'
            },
            768: {
                perPage: 1,
                arrows: false,
            },
        },
    }).mount();
});