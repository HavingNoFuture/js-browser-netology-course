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

let temp = "";
function showSecretContent(event) {
  switch (event.code) {
    case 'KeyY':
      temp += 'н';
    break;
    case 'KeyT':
      temp += 'е';
    break;
    case 'KeyN':
      temp += 'т';
    break;
    case 'KeyJ':
      temp += 'о';
    break;
    case 'KeyK':
      temp += 'л';
    break;
    case 'KeyU':
      temp += 'г';
    break;
    case 'KeyB':
      temp += 'и';
    break;
    case 'KeyZ':
      temp += 'я';
    break;  
  }
  if (temp.indexOf('нетология') >= 0) {
      const secretContent = document.getElementsByClassName('secret')[0];
      secretContent.classList.add('visible');
    }
}

document.addEventListener('keydown', showSecretContent);
