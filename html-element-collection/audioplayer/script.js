"use strict"
const musicDB = {
	"LA Chill Tour": "./mp3/LA%20Chill%20Tour.mp3",
	"This is it band": "./mp3/This%20is%20it%20band.mp3",
	"LA Fusion Jam": "./mp3/LA%20Fusion%20Jam.mp3"
}

const playList = Object.keys(musicDB);
let index = 0;

const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];
const music = document.getElementsByTagName('audio')[0];

const playBtn = document.getElementsByClassName('playstate')[0];
const stopBtn = document.getElementsByClassName('stop')[0];
const nextBtn = document.getElementsByClassName('next')[0];
const backBtn = document.getElementsByClassName('back')[0];

let playing = false;

function playMusic() {
	if (playing) {
		music.play();
		mediaPlayer.classList.add('play');
	} else {
		music.pause();
		mediaPlayer.classList.remove('play');
	}
}

playBtn.onclick = () => {
	playing = !playing;
	playMusic();
}

stopBtn.onclick = () => {
	playing = !playing;
	mediaPlayer.classList.remove('play');
	music.pause();
	music.currentTime = 0;
}


function initMusic() {
	const title = document.getElementsByClassName('title')[0];
	title.title = playList[index];
	music.src = musicDB[playList[index]];
	playMusic();
}

nextBtn.onclick = () => {
	index += 1;
	if (index + 1 > playList.length) {
		index = 0;
	}
	initMusic();
}

backBtn.onclick = () => {
	index -= 1;
	if (index < 0) {
		index = playList.length - 1;
	}
	initMusic();
}