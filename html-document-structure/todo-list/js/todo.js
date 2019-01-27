"use strict"
const doneList = document.querySelector(".done");
const undoneList = document.querySelector(".undone");
const labels = document.querySelectorAll(".todo-list label");

function onClick(event) {
	const input = label.querySelector('input');
	label.parentNode.removeChild(label);
	if (input.checked) {
		doneList.appendChild(label);
	} else {
		undoneList.appendChild(label);
	}
}
for (let label of labels) {
	label.addEventListener('change', onClick);
}
