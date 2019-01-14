"use strict"
const listBlock = document.querySelector('.list-block');
const inputs = listBlock.querySelectorAll('input');
const output = listBlock.querySelector('output');
let checked = 1;

function showMessage(event) {
	checked = (this.checked === true) ? checked + 1 : checked - 1
	if (checked === 4) {
		listBlock.classList.add('complete');
	} else {
		listBlock.classList.remove('complete');
	}
	output.value = `${checked} из ${inputs.length}`;
}

for (let input of inputs) {
	input.addEventListener('input', showMessage);
}

output.value = `${checked} из ${inputs.length}`;