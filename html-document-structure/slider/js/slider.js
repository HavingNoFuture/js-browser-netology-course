"use strict"
const slides = document.querySelectorAll('.slide');
const prevSlide = document.querySelector('.slider-nav').firstElementChild;
const lastSlide = document.querySelector('.slider-nav').lastElementChild;
const nextSlide = prevSlide.nextElementSibling;
const firstSlide = lastSlide.previousElementSibling;

let currentSlide = document.querySelector('.slide-current');

updateStatusBtns();
function updateStatusBtns() {
	currentSlide = document.querySelector('.slide-current');
	firstSlide.classList.toggle('disabled', currentSlide === slides[0]);
	prevSlide.classList.toggle('disabled', currentSlide === slides[0]);
	lastSlide.classList.toggle('disabled', currentSlide === slides[slides.length - 1]);
	nextSlide.classList.toggle('disabled', currentSlide === slides[slides.length - 1]);
}

function onClick(e) {
	currentSlide = document.querySelector('.slide-current');
	if (e.target.dataset.action === 'first') {
		currentSlide.classList.remove('slide-current');
		slides[0].classList.add('slide-current');
	} else if (e.target.dataset.action === 'last') {
		currentSlide.classList.remove('slide-current');
		slides[slides.length - 1].classList.add('slide-current');
	} else if (e.target.dataset.action === 'next') {
		if (currentSlide != slides[slides.length - 1]) {
			currentSlide.classList.remove('slide-current');
			currentSlide.nextElementSibling.classList.add('slide-current')
		}
	} else if (e.target.dataset.action === 'prev') {
		if (currentSlide != slides[0]) {
			currentSlide.classList.remove('slide-current');
			currentSlide.previousElementSibling.classList.add('slide-current')
		}
	}
	updateStatusBtns();
}


firstSlide.addEventListener('click', onClick);

lastSlide.addEventListener('click', onClick);

nextSlide.addEventListener('click', onClick);

prevSlide.addEventListener('click', onClick);
