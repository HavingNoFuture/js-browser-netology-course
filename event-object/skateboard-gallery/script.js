const nav = document.getElementsByClassName('gallery-nav')[0];
const links = nav.getElementsByTagName('a');
const galleryView = document.getElementsByClassName('gallery-view')[0];

for (let i = 0; i < links.length; i++) {
  function makeGallery(event) {
    event.preventDefault();
    galleryView.src = links[i].href;
    for (let link of links) {
      if (link.classList.contains('gallery-current')) {
        link.classList.remove('gallery-current');
      }
    }
    links[i].classList.add('gallery-current');
  }
  links[i].addEventListener('click', makeGallery);
}