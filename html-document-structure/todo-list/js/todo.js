"use strict"
const doneList = document.querySelector(".done");
const undoneList = document.querySelector(".undone");
const labels = document.querySelectorAll(".todo-list label");

function onClick(e) {
	e.currentTarget.parentNode.removeChild(e.currentTarget);
	if (e.target.checked) {
		doneList.appendChild(e.currentTarget);
	} else {
		undoneList.appendChild(e.currentTarget);
	}
}

for (let label of labels) {
	label.addEventListener('change', onClick);
}
