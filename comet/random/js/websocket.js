'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
const divsWS = document.querySelectorAll('.websocket div');

let currentWS = divsWS[0];
ws.addEventListener('message', e => {
	currentWS.classList.remove('flip-it');
	currentWS = divsWS[Number(e.data) - 1];
	currentWS.classList.add('flip-it');
});