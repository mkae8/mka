// problem 1 : sum of elements

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// problem 2; maximum elements

// const numbers = [1, 5, 7, 4];
// let max = numbers[0];
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (max < numbers[i + 1]) {
//     max = numbers[i + 1];
//   }
// }
// console.log(max);

//problem 3 reverse array

// const numbers = [10, 3, 5, 7];

// let reverse = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//   reverse.push(numbers[i]);
// }
// console.log(reverse);

// problem 4 even elements

// const numbers = [13, 21, 33, 42];
// let even = [];
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] % 2 === 0) {
//     even.push(numbers[i]);
//   }
// }
// console.log(even);

//  problem 5 remove duplicates

// const numbers = [1, 1, 3, 3, 2, 3, 5, 5];
// let uniq = [];

// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (!uniq.includes(numbers[i])) {
//     uniq.push(numbers[i]);
//   }
// }
// console.log(uniq);

// problem 6 find digit

// const numbers = [2, 3, 4, 5, 6, 8, 7, 9];
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] === 7) {
//     console.log(i);
//   }
// }

// problem 7 multiple of elements

// const numbers = [2, 5, 2, 3];
// let multi = 1;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   multi *= numbers[i];
// }
// console.log(multi);

//

// Bodolgo 1

// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// //   sum = sum + arr[i]
// }
// console.log(sum);

// Bodolgo 2
// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   dundaj = sum / 2;
// }
// console.log(dundaj);

//bodolgo 3

// const arr = [1, 2, 234, 123, 5564, 123, 9, 19, 12, 976];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// bodolgo 4

// const arr = "Hello";
// let reverse = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reverse.push(numbers[i]);
// }
// console.log(reverse);

// push hiigeegui

// const arr = "Hello";
// let reverse = "";

// for (let i = arr.length - 1; i >= 0; i--) {
//   let temp = arr[i];
//   reverse = reverse + temp;
// }
// console.log(reverse);

// bodolgo 5

// const arr = "Hello ";
// let unique;

// for (let i = 0; i < arr.length; i++)
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       console.log(arr[i]);
//       break;
//     }
//   }

// bodolgo 6

// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];

// const arrTwo = [99, 123, 544, 998];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arrTwo.length; j++) {
//     if (arr[i] === arrTwo[j]) console.log(arr[i], arrTwo[j]);
//   }
// }

// bodolgo 7

// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     console.log(arr[i]);
//   }
// }
document.addEventListener("DOMContentLoaded", function() {
    const redNumber = document.getElementById("redNumber");
    const blueNumber = document.getElementById("blueNumber");
    const redBox = document.getElementById("redBox");
    const blueBox = document.getElementById("blueBox");
    const resetBtn = document.getElementById("resetBtn");
  
    let i = 50; 
    redBox.addEventListener("click", () => {
      i = i + 1;
      if (i <= 100) {
        redBox.style.width = `${i}%`;
        redNumber.innerText = i; 
      } else {
        i = 100; // Limit to 100%
      }
    });
  
    blueBox.addEventListener("click", () => {
      i = i + 1;
      if (i <= 100) {
        blueBox.style.width = `${i}%`;
        blueNumber.innerText = i; // Update text content
      } else {
        i = 100; // Limit to 100%
      }
    });
  
    resetBtn.addEventListener("click", () => {
      i = 50; // Reset width percentage
      redBox.style.width = `${i}%`;
      blueBox.style.width = `${i}%`;
      redNumber.innerText = i; // Update text content
      blueNumber.innerText = i; // Update text content
    });
  });