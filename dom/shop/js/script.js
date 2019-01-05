"use strict"

const buttonsAdd = document.getElementsByClassName('add');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
cartTotalPrice.dataset.totalPrice = 0;

for (let button of buttonsAdd) {
	function updateShoppingCart() {
		cartCount.innerHTML = Number(cartCount.innerHTML) + 1;
		cartTotalPrice.dataset.totalPrice = Number(cartTotalPrice.dataset.totalPrice) 
			+ Number(button.dataset.price);
		cartTotalPrice.innerHTML = getPriceFormatted(cartTotalPrice.dataset.totalPrice);
	}
	button.addEventListener('click', updateShoppingCart);
}
