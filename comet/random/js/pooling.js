'use strict';

const divsPool = document.querySelectorAll('.pooling div');
let currentPool = divsPool[0];

function initPolling() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling');
  request.addEventListener('load', getDataPool);
  request.send();
}

function getDataPool(e) {
  if ((event.target.status >= 200 && event.target.status < 300) && event.target.responseText != ' ') {
	currentPool.classList.remove('flip-it');
	currentPool = divsPool[Number(event.target.responseText) - 1];
	currentPool.classList.add('flip-it');
  }
}

setInterval(() => {
	initPolling();
}, 8000);