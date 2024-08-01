const threeImage = ["./dota.jpg", "./dota2.jpg", "./dota3.jpg"];

const prevous = document.getElementsByClassName("prevous")[0];

const image = document.getElementById("image");

const next = document.getElementsByClassName("next")[0];

let i = 0;
image.src = threeImage[0];

next.addEventListener("click", () => {
  if (i < threeImage.length - 1) {
    i = i + 1;
    image.src = threeImage[i];
  } else {
    i = 0;
    image.src = threeImage[i];
  }
});

prevous.addEventListener("click", () => {
  if (i < threeImage.length - 1) {
    i = i - 1;
    image.src = threeImage[i];
  } else {
    i = 0;
    i = threeImage.length - 1;
  }
});


