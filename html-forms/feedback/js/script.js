"use strict"
const contentForm = document.querySelector('.contentform');
const inputList = contentForm.querySelectorAll('[name]');
const btnSendMsg = contentForm.querySelector('.button-contact');
const outputForm = document.querySelector('#output');
const btnEditMsg = outputForm.querySelector('.button-contact');

let empty = inputList.length;

for (let input of inputList) {
	if (input.name === 'zip') input.type = 'number';

	input.addEventListener('change', onChange);
	function onChange(event) {
		this.value != '' ? empty-- : empty++;

		if (empty === 0) {
			btnSendMsg.removeAttribute('disabled');
		} else {
			btnSendMsg.setAttribute('disabled', '');
		}

		if ((this.name != 'phone') && (this.name != 'email')) {
			const output = outputForm.querySelector(`#${this.name}`);
			output.value = this.value;
		}
	}
}

btnSendMsg.addEventListener('click', onClick);
btnEditMsg.addEventListener('click', onClick);
function onClick() {
	event.preventDefault();
	contentForm.classList.toggle('hidden');
	outputForm.classList.toggle('hidden');
}