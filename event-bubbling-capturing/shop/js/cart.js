'use strict';

const itemList = document.querySelector('.items-list');

itemList.addEventListener('click', onClick);
function onClick(event) {
	if (event.target.classList.contains('add-to-cart')) {
		const item = {
			title: event.target.dataset.title,
			price: event.target.dataset.price
		}
	addToCart(item);
	}
}
