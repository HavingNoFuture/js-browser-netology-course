const smallPics = [
  "./images/thumb/01.jpg",
  "./images/thumb/02.jpg",
  "./images/thumb/03.jpg",
  "./images/thumb/04.jpg",
  "./images/thumb/05.jpg",
  "./images/thumb/06.jpg",
  "./images/thumb/07.jpg"
];

const bigPics = [
  "./images/full/01.jpg",
  "./images/full/02.jpg",
  "./images/full/03.jpg",
  "./images/full/04.jpg",
  "./images/full/05.jpg",
  "./images/full/06.jpg",
  "./images/full/07.jpg"
];

const nav = document.getElementsByClassName('gallery-nav')[0];
const links = nav.getElementsByTagName('a');
const galleryView = document.getElementsByClassName('gallery-view')[0];

for (let i = 0; i < links.length; i++) {
  function makeGallery(event) {
    event.preventDefault();
    galleryView.src = bigPics[i];
    for (let link of links) {
      if (link.classList.contains('gallery-current')) {
        link.classList.remove('gallery-current');
      }
    }
    links[i].classList.add('gallery-current');
  }
  links[i].addEventListener('click', makeGallery);
}