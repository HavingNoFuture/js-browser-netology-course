"use strict"
const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown')[0];

wrapperDropdown.onclick = function() {
  wrapperDropdown.classList.toggle('active');
}