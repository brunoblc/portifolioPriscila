document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.carousel');
        const items = carousel.querySelectorAll('.project, .certificate');
        const nextButton = carouselContainer.querySelector('.next');
        
        let currentIndex = 0;
        const maxIndex = items.length - 1;

        function showItem(index) {
            const itemWidth = items[0].clientWidth + parseInt(getComputedStyle(items[0]).marginRight);
            const translateX = -index * itemWidth;
            carousel.style.transform = `translateX(${translateX}px)`;
        }

        nextButton.addEventListener('click', function() {
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0; // Volta ao início
            }
            showItem(currentIndex);
        });

        // Suporte ao toque
        let startX = 0;
        let endX = 0;

        carousel.addEventListener('touchstart', function(event) {
            startX = event.touches[0].clientX;
        });

        carousel.addEventListener('touchmove', function(event) {
            endX = event.touches[0].clientX;
        });

        carousel.addEventListener('touchend', function() {
            if (startX > endX) {
                // Deslize para a esquerda
                if (currentIndex < maxIndex) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Volta ao início
                }
            } else if (startX < endX) {
                // Deslize para a direita
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = maxIndex; // Volta ao fim
                }
            }
            showItem(currentIndex);
        });

        showItem(currentIndex);
    });

    // Código para abrir o modal ao clicar na imagem
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const images = document.querySelectorAll('.certificate img');
    const span = document.getElementsByClassName("close")[0];

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Fecha o modal ao clicar no botão de fechar
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha o modal ao clicar fora da imagem
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
