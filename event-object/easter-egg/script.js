"use strict"

function showSecretMenu(event) {
  if (event.ctrlKey) {
    if (event.altKey) {
      if (event.code === 'KeyT') {
      	const nav = document.getElementsByTagName('nav')[0];
        nav.classList.toggle('visible');
      }
    }
  }
}

document.addEventListener('keydown', showSecretMenu);

const secretWord = "01234356";
let temp = "";

const secretKeys = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyU', 'KeyB', 'KeyZ'];

function showSecretContent(event) {
  console.log(event.key, temp)
  let index = secretKeys.indexOf(event.code);
  if (index != -1) {
    temp += index;
  }

  if (temp.indexOf(secretWord) >= 0) {
    const secretContent = document.getElementsByClassName('secret')[0];
    secretContent.classList.add('visible');
  } 
}

document.addEventListener('keydown', showSecretContent);
