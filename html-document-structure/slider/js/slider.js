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
	if (currentSlide === slides[0]) {
		firstSlide.classList.add('disabled');
		prevSlide.classList.add('disabled');
	} else if (currentSlide == slides[slides.length]) {
		lastSlide.classList.add('disabled');
		nextSlide.classList.add('disabled');
	} else {
		firstSlide.classList.remove('disabled');
		prevSlide.classList.remove('disabled');
		lastSlide.classList.remove('disabled');
		nextSlide.classList.remove('disabled');
	}
}

firstSlide.addEventListener('click', onClickFirst);
function onClickFirst(event) {
	currentSlide = document.querySelector('.slide-current');
	currentSlide.classList.remove('slide-current');
	slides[0].classList.add('slide-current');
	updateStatusBtns();
}

lastSlide.addEventListener('click', onClickLast);
function onClickLast(event) {
	currentSlide = document.querySelector('.slide-current');
	currentSlide.classList.remove('slide-current');
	slides[slides.length - 1].classList.add('slide-current');
	updateStatusBtns();
}

nextSlide.addEventListener('click', onClickNext)
function onClickNext(event) {
	currentSlide = document.querySelector('.slide-current');
	if (currentSlide != slides[slides.length - 1]) {
		currentSlide.classList.remove('slide-current');
		currentSlide.nextElementSibling.classList.add('slide-current')
	}
	updateStatusBtns();
}

prevSlide.addEventListener('click', onClickPrev)
function onClickPrev(event) {
	currentSlide = document.querySelector('.slide-current');
	if (currentSlide != slides[0]) {
		currentSlide.classList.remove('slide-current');
		currentSlide.previousElementSibling.classList.add('slide-current')
	}
	updateStatusBtns();
}
