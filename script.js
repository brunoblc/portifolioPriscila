// script.js
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.carousel');
        const items = carousel.querySelectorAll('.project, .certificate');
        const prevButton = carouselContainer.querySelector('.prev');
        const nextButton = carouselContainer.querySelector('.next');
        
        let currentIndex = 0;

        function showItem(index) {
            const itemWidth = items[0].clientWidth + parseInt(getComputedStyle(items[0]).marginRight);
            carousel.style.transform = `translateX(${-index * itemWidth}px)`;
        }

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            showItem(currentIndex);
        });

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            showItem(currentIndex);
        });

        showItem(currentIndex);
    });
});
