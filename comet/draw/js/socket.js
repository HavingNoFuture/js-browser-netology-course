'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');

window.editor.addEventListener('update', e => {
	e.canvas.toBlob(blob => ws.send(blob));
});
