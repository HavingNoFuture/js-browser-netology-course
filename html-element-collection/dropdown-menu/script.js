"use strict"
const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown')[0];
console.log(wrapperDropdown.overflow)

let toggle = 1;
wrapperDropdown.onclick = function() {
  if (toggle === 1) {
    wrapperDropdown.classList.add('active');
    toggle = 0;
  } else {
    wrapperDropdown.classList.remove('active');
    toggle = 1;
  }
}