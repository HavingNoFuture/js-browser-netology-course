"use strict"
const photos = [
  "./i/breuer-building.jpg",
  "./i/guggenheim-museum.jpg",
  "./i/headquarters.jpg",
  "./i/IAC.jpg",
  "./i/new-museum.jpg"
]

const gallery = document.getElementById('currentPhoto');
const nextPhoto = document.getElementById('nextPhoto');
const prevPhoto = document.getElementById('prevPhoto');

let index = 0;
gallery.src = photos[index];

prevPhoto.onclick = function () {
  index -= 1;
  if (index < 0) {
    index = photos.length;
  }
  gallery.src = photos[index];
}

nextPhoto.onclick = function () {
  index += 1;
  if (index > photos.length) {
    index = 0;
  }
  gallery.src = photos[index];
}