const piano = document.getElementsByClassName('set')[0];
const buttons = piano.getElementsByTagName('li');
const pianoSongList = ['first', 'second', 'third', 'fourth', 'fifth'];
let type;

for (let i = 0; i < buttons.length; i++) {
  const audio = buttons[i].getElementsByTagName('audio')[0];

  function makeSound(event) {

    if (event.shiftKey) {
      type = 'lower';
      piano.classList.add('lower');
      piano.classList.remove('middle', 'higher');
    }

    if (event.altKey) {
      type = 'higher';
      piano.classList.add('higher');
      piano.classList.remove('middle', 'lower');
    }

  }
  document.addEventListener('keydown', makeSound);

  function makeAnotherSound(event) {
    type = 'middle';
    piano.classList.add('middle');
    piano.classList.remove('higher', 'lower');
  }
  document.addEventListener('keyup', makeAnotherSound);

  buttons[i].addEventListener('click', () => {
    audio.src = `./sounds/${type}/${pianoSongList[i]}.mp3`;
    audio.play();
  });
}
