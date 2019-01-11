"use strict"

const tabs = document.querySelectorAll('.tabs nav a');
const preloader = document.querySelector('#preloader');
const content = document.querySelector('#content');
const xhr = new XMLHttpRequest();

xhr.addEventListener('loadstart', () => {
	preloader.classList.remove('hidden');
});

xhr.addEventListener('load', () => {
	preloader.classList.add('hidden');
	content.innerHTML = xhr.responseText;
});

function request(url) {
	xhr.open('GET', url);
	xhr.send();
}

function onClick(event) {
	event.preventDefault();
	tabs.forEach((tab) => tab.classList.remove('active'));
	event.target.classList.add('active');
	request(event.target.href);
}

for (let tab of tabs) {
	tab.addEventListener('click', onClick);
}

request(tabs[0]);