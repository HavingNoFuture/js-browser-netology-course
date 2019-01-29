'use strict';

function setData(data) {
	for (const key in data) {
		if (key === 'wallpaper' || key === 'pic') {
			document.querySelector(`[data-${key}]`).src = data[key];
		} else {
			document.querySelector(`[data-${key}]`).innerText = data[key];
		}
	}
}

function loadData(url) {
	const functionName = 'setData';
	return new Promise((done, fail) => {
		window[functionName] = done;

		const script = document.scripts[0].cloneNode();
		script.src = `${url}?callback=${functionName}`;
		document.body.appendChild(script);
	});
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp')