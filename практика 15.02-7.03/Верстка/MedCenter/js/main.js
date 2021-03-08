function readMore() {
    let dots = document.getElementById('dots')
    let more = document.getElementById('more')
    let btn = document.getElementById('btn')

    if (dots.style.display === 'none') {
        dots.style.display = 'inline'
        btn.innerHTML = 'Читать ещё'
        more.style.display = 'none'
    } else {
        dots.style.display = 'none'
        btn.innerHTML = 'Свернуть'
        more.style.display = 'inline'
    }
}

function readMore3() {
    let dots3 = document.getElementById('dots3')
    let more3 = document.getElementById('more3')
    let btn3 = document.getElementById('btn3')

    if (dots3.style.display === 'none') {
        dots3.style.display = 'inline'
        btn3.innerHTML = 'Читать ещё'
        more3.style.display = 'none'
    } else {
        dots3.style.display = 'none'
        btn3.innerHTML = 'Свернуть'
        more3.style.display = 'inline'
    }
}


/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let  slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
