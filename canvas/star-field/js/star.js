"use strict"

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const starColors = ['#ffffff', '#ffe9c4', '#d4fbff'];

canvas.style.backgroundColor = '#000000';

function getRandomNumber(max, min=0, integer=true) {
	if (integer) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		return Math.random() * (max - min) + min;
	}
}

function makeStar() {
	const starSize = getRandomNumber(1.1, 0, false);
	const starBrightness = getRandomNumber(1, 0.8, false)
	const x = getRandomNumber(canvas.width)
	const y = getRandomNumber(canvas.height)
	const index = getRandomNumber(3);

	ctx.beginPath();
	ctx.fillRect(x, y, starSize, starSize);
	ctx.fillStyle = starColors[index]
	ctx.globalAlpha = starBrightness;
	ctx.closePath();
}

canvas.addEventListener('click', onClick);
function onClick(e) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	const starQuantity = getRandomNumber(400, 200);
	for (let i = 0; i < starQuantity; i++) {
		makeStar();
	}
}