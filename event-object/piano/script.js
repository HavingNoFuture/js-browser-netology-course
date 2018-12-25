const lowerSounds = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3"
];

const middleSounds = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3" 
];

const higherSounds = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3"  
];

const piano = document.getElementsByClassName('set')[0];

const buttons = piano.getElementsByTagName('li');

for (let i = 0; i < buttons.length; i++) {
  function makeSound(level) {
    for (let button of buttons) {
      const audio = button.getElementsByTagName('audio')[0];
      audio.src = level[i];
      audio.play();
    }
  }
  
  function makeMiddleSound() {
    makeSound(middleSounds);
  }
  
  buttons[i].addEventListener('click', makeMiddleSound);
  
}


function makeAnotherSound(event) {
    
  if (event.shiftKey) {
    console.log('shift')
    if (piano.classList.contains('middle')) {
      piano.classList.remove('middle');
    }
    if (piano.classList.contains('higher')) {
      piano.classList.remove('higher');
    }
    piano.classList.add('lower');           

    console.log('shift2')
    for (let i = 0; i < buttons.length; i++) {
      function makeLowerSound() {
        for (let button of buttons) {
          const audio = button.getElementsByTagName('audio')[0];
          audio.src = lowerSounds[i];
          audio.play();
        }
      }
      buttons[i].addEventListener('click', makeLowerSound);
    }
  }

  if (event.altKey) {
    console.log('alt')
    if (piano.classList.contains('middle')) {
      piano.classList.remove('middle');
    }
    if (piano.classList.contains('lower')) {
      piano.classList.remove('lower');
    }
    piano.classList.add('higher');   
    console.log('alt2')
    for (let i = 0; i < buttons.length; i++) {
      function makeHigherSound() {

          const audio = buttons[i].getElementsByTagName('audio')[0];
          audio.src = higherSounds[i];
          audio.play();
        
      }
      buttons[i].addEventListener('click', makeHigherSound);
    }
  }
}

document.addEventListener('keydown', makeAnotherSound); 