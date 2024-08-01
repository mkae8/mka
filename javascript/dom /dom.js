// const a = document.getElementById("hello");
// a.innerText = "Hello world";
// a.style = "color:red";
// console.log(a);

// const bttnMinus = document.getElementsByClassName("bttnMinus")[0];

// const bttnPlus = document.getElementsByClassName("bttnPlus")[0];

// const input = document.getElementsByTagName("input")[0];

// bttnPlus.addEventListener("click", () => {
//   input.value = parseInt(input.value) + 1;
// });

// bttnMinus.addEventListener("click", () => {
//   input.value = parseInt(input.value) - 1;
// });

const inputOne = document.getElementById("inputOne");

const inputTwo = document.getElementById("inputTwo");

const result = document.getElementById("result");

const resultBttn = document.getElementById("resultBttn");

resultBttn.addEventListener("click", () => {
  result.innerText = parseInt(inputOne.value) * parseInt(inputTwo.value);
});

resultBttn.addEventListener("click", () => {
  const multi = inputOne.value * inputTwo.value;
  result.innerText = multi;
  console.log(multi);
});

resultBttn.addEventListener("click", () => {
  switch (result) {
    case 1:
      inputOne.value + inputTwo.value;
    case 2:
      inputOne.value - inputTwo.value;
    case 3:
      inputOne.value * inputTwo.value;
    case 4:
      inputOne.value / inputTwo.value;
  }
  result.innerText;
});
