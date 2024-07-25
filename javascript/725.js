const redNumber = document.getElementById("redNumber");

const blueNumber = document.getElementById("blueNumber");

const btn = document.getElementById("resetBtn");

const redBox = document.getElementById("redBox");

const blueBox = document.getElementById("blueBox");

let i = 50;
let j = 50;

redBox.addEventListener("click", () => {
  if (i < 100) {
    i = i + 5;
    j = j - 5;
    redBox.style.width = `${i}%`;
    blueBox.style.width = `${j}%`;
    redNumber.innerText = i;
    blueNumber.innerText = j;
  } else {
    redNumber.innerText = "Winner";
  }
});

blueBox.addEventListener("click", () => {
  if (j < 100) {
    j = j + 5;
    i = i - 5;
    redBox.style.width = `${i}%`;
    blueBox.style.width = `${j}%`;
    redNumber.innerText = i;
    blueNumber.innerText = j;
  } else {
    blueNumber.innerText = "Winner";
  }
});

btn.addEventListener("click", () => {
  i = 50;
  j = 50;
  redBox.style.width = `${50}%`;
  blueBox.style.width = `${50}%`;
  redNumber.innerText = i;
  blueNumber.innerText = j;
});

document.addEventListener("keyup", (event) => {
  if (event.key === "a") {
    if (i < 100) {
      i = i + 5;
      j = j - 5;
      redBox.style.width = `${i}%`;
      blueBox.style.width = `${j}%`;
      redNumber.innerText = i;
      blueNumber.innerText = j;
    } else {
      redNumber.innerText = "Winner";
    }
  } else if (event.key === "l") {
    if (j < 100) {
      j = j + 5;
      i = i - 5;
      redBox.style.width = `${i}%`;
      blueBox.style.width = `${j}%`;
      redNumber.innerText = i;
      blueNumber.innerText = j;
    } else {
      blueNumber.innerText = "Winner";
    }
  }
});
