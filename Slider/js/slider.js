let slides = document.querySelectorAll('.slide');
let imgIndex = 1;

let nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', next);

let prevBtn = document.querySelector('.prev');
prevBtn.addEventListener('click', prev);

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove('blur');
    }

    slides[index].style.display = 'block';
    slides[index].classList.remove('blur');

    if (index > 0) {
        slides[index - 1].style.display = 'block';
        slides[index - 1].classList.add('blur');
    }

    if (index < slides.length - 1) {
        slides[index + 1].style.display = 'block';
        slides[index + 1].classList.add('blur');
    }

    if (index == 0) {
        slides[index + 2].style.display = 'block';
        slides[index + 2].classList.add('blur');
    }
}

showSlide(imgIndex);

function next() {
    imgIndex = (imgIndex + 1) % slides.length;
    showSlide(imgIndex);
}

function prev() {
    imgIndex = (imgIndex - 1 + slides.length) % slides.length;
    showSlide(imgIndex);
}
