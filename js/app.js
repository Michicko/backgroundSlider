const next = document.getElementById("next");
const previous = document.getElementById("previous");
const slides = document.querySelectorAll('.slide');

next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);

function nextSlide() {
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
       current.nextElementSibling.classList += ' current'; 
    } else {
        slides[0].classList += ' current';
    }
}

function previousSlide() {
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
       current.previousElementSibling.classList += ' current'; 
    } else {
        slides[slides.length - 1].classList += ' current';
    }
}

