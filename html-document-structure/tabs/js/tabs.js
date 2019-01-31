"use strict"
const tabForm = document.querySelector('#tabs');
const tabNavForm = tabForm.querySelector('.tabs-nav');
const articles = tabForm.querySelectorAll('.tabs-content [data-tab-title]');

tabNavForm.innerHTML = '';
for (let article of articles) {
	tabNavForm.innerHTML += `<li><a class="fa ${article.dataset.tabIcon}" data-tab-title=${article.dataset.tabTitle}>${article.dataset.tabTitle}</a></li>`;
}

const tabs = tabNavForm.querySelectorAll('li');
tabs[0].classList.add('ui-tabs-active');

for (let article of articles) {
	if (article != articles[0]) {
		article.classList.add('hidden');
	}
}

for (let tab of tabs) {
	console.log(tab)
	tab.addEventListener('click', onClick);
	function onClick(event) {
		const currentTab = document.querySelector('.ui-tabs-active');
		currentTab.classList.remove('ui-tabs-active');
		event.currentTarget.classList.add('ui-tabs-active');

		// for (let article of articles) {
		// 	if (article.dataset.tabTitle == event.target.dataset.tabTitle) {
		// 		article.classList.remove('hidden');
		// 	} else {
		// 		article.classList.add('hidden');
		// 	}
		// }

		for (let article of articles) {
			article.classList.add('hidden');
		}

		const currentArticle = document.querySelector(`.tabs-content [data-tab-title=${event.target.dataset.tabTitle}]`);
		currentArticle.classList.remove('hidden');
	}
}