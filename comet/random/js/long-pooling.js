'use strict';

const divsLP = document.querySelectorAll('.long-pooling div');

let currentLP = divsLP[0];

function initLongPolling() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling');
  request.addEventListener('load', getData);
  request.send();
}

function getData(e) {
  if ((event.target.status >= 200 && event.target.status < 300) && event.target.responseText != ' ') {
	currentLP.classList.remove('flip-it');
	currentLP = divsLP[Number(event.target.responseText) - 1];
	currentLP.classList.add('flip-it');
  }

  initLongPolling();
}

initLongPolling();
