"use strict"
const drumKit = document.getElementsByClassName('drum-kit__drum');

for (let button of drumKit) {
 let audio = button.getElementsByTagName('audio')[0];
 
 button.onclick = function() {
  audio.play();
 }
}