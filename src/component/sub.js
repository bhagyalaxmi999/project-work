const slidesContainer = document.querySelector('.slides-container')
const slides = document.querySelectorAll('.slide')
const items = document.querySelectorAll('.items')

const slideWidth = 600;
let index = 0;

slidesContainer.insertAdjacentHTML(
    'afterbegin', slides[slides.length -1].outerHTML
)
slidesContainer.insertAdjacentHTML(
    'beforeend', slides[0].outerHTML
)
slidesContainer.getElementsByClassName.transform = `translateX(${-slideWidth}px)`