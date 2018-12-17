const photos = ["./i/airmax-jump.png",
                "./i/airmax-on-foot.png",
                "./i/airmax-playground.png",
                "./i/airmax-top-view.png",
                "./i/airmax.png"
]

const slider = document.getElementById('slider');
let index = 0;
slider.src = photos[index];

setInterval(() => {
  index += 1;
  if (index >= photos.length) {
    index = 0;
  }
  slider.src = photos[index];
}, 5000);
