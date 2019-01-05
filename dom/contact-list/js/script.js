"use strict"

const data = JSON.parse(loadContacts());

function getContactsList() {
	let result = '';
	for (let client of data) {
		result += `<li data-email="${client.email}" data-phone="${client.phone}">
          <strong>${client.name}</strong>
        </li>`;
	}
	return result
}

const contactsList = document.getElementsByClassName('contacts-list')[0];

contactsList.innerHTML = getContactsList();