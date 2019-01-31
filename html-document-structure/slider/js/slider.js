"use strict"
const slides = document.querySelector('.slides');
const prevSlide = document.querySelector('.slider-nav').firstElementChild;
const lastSlide = document.querySelector('.slider-nav').lastElementChild;
const nextSlide = prevSlide.nextElementSibling;
const firstSlide = lastSlide.previousElementSibling;

console.log(slides.firstElementChild)

let currentSlide = document.querySelector('.slide-current');

updateStatusBtns();
function updateStatusBtns() {
	currentSlide = document.querySelector('.slide-current');
	firstSlide.classList.toggle('disabled', currentSlide === slides.firstElementChild);
	prevSlide.classList.toggle('disabled', currentSlide === slides.firstElementChild);
	lastSlide.classList.toggle('disabled', currentSlide === slides.lastElementChild);
	nextSlide.classList.toggle('disabled', currentSlide === slides.lastElementChild);
}

function onClick(e) {
	currentSlide = document.querySelector('.slide-current');
	currentSlide.classList.remove('slide-current');
	if (e.target.dataset.action === 'first') {
		currentSlide = slides.firstElementChild;
	} else if (e.target.dataset.action === 'last') {
		currentSlide = slides.lastElementChild;
	} else if ((e.target.dataset.action === 'next') && (currentSlide != slides.lastElementChild)) {
		currentSlide = currentSlide.nextElementSibling;
	} else if ((e.target.dataset.action === 'prev') && (currentSlide != slides.firstElementChild)) {
		currentSlide = currentSlide.previousElementSibling;
	}
	currentSlide.classList.add('slide-current');
	updateStatusBtns();
}


firstSlide.addEventListener('click', onClick);

lastSlide.addEventListener('click', onClick);

nextSlide.addEventListener('click', onClick);

prevSlide.addEventListener('click', onClick);
