window.onscroll = function() {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
};

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });
    slides[currentSlide].style.display = 'block';
    slides[currentSlide].classList.add('active');
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Initial display
updateSlides();

// Получаем элементы
const menuToggle = document.getElementById('menu-toggle');
const header = document.getElementById('header');

// Открытие/Закрытие меню при клике на кнопку
menuToggle.addEventListener('click', () => {
    // Если меню уже открыто, то закрываем его
    if (header.classList.contains('menu-open')) {
        header.classList.remove('menu-open');
    } else {
        // Иначе открываем
        header.classList.add('menu-open');
    }
});

