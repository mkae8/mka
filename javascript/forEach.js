// -------> Bodlogo 0
// const firstLetter = (friuts) => {
//   let arr = [];
//   friuts.forEach((el) => {
//     arr.push(el[0]);
//   });
//   return arr;
// };
// const fruits = ["apple", "banana", "cherry"];
// const result = firstLetter(fruits);
// console.log(result);

// -------> Bodlogo 1

// arry iin elementuudiin niilber oldog function

// const sum = (arr) => {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// };
// const arr = [22, 4452, 2456, 9887];
// const result = sum(arr);
// console.log(result);

//-------> Bodlogo 2

// fruit iin elementuudiin urtiig oldog function

// const elLenght = (fruits) => {
//   let temp = [];
//   fruits.forEach((element) => {
//     temp.push(element.lenght);
//   });
//   return temp;
// };
// const fruits = ["apple", "banana", "cherry"];
// const result = elLenght(fruits);
// console.log(fruits);

// --------> Bodlogo 3

// numbers iin tegsh tsipriig oldog function

// const even = (number) => {
//   let evenNumbers = [];
//   number.forEach((element) => {
//     if (element % 2 === 0) {
//       evenNumbers.push(element);
//     }
//   });
//   return evenNumbers;
// };
// const number = [2, 5, 7, 9, 11, 24];
// const result = even(number);
// console.log(result);

// -------> Bodlogo 4

// toonuudiin kavdratiig oldog function

// const zereg = (number) => {
//   let temp = [];
//   number.forEach((element) => {
//     temp.push(element * element);
//   });
//   return temp;
// };
// const number = [1, 2, 3, 4, 5];
// const result = zereg(number);
// console.log(result);

// ------> Bodlogo 5

// jimsnii elementuudiin goliin usgiig oldog function

// const midLetter = (fruits) => {
//   let temp = [];
//   fruits.forEach((element) => {
//     temp.push(element[Math.floor((element.length - 1) / 2)]);
//   });
//   return temp;
// };

// const fruits = ["bye", "banana", "wowos"];
// const result = midLetter(fruits);
// console.log(result);

//--------> bodlogo 1

//Tus buriin kvadratiig olj butsaa (map)

// const numbers = [1, 2, 3, 4, 5];
// const zereg = numbers.map((element) => {
//   let zereguud = element * element;
//   return zereguud;
// });
// console.log(zereg);

// ---------> bodlogo 2

// too tus buriin 20%tai tentseh utgiig uurt n nemj butsaa

// const prices = [100, 200, 300, 400];
// const huvi = prices.map((el) => {
//   let huviBodolt = el + (el / 100) * 20;
//   return huviBodolt;
// });
// console.log(huvi);

// ---------> bodlogo 3

// too tus buriin 10% iin hongololtiig olj butsaa

// const prices = [100, 200, 300, 400];

// const huvi = prices.map((el) => {
//   let huviBodolt = el - (el / 100) * 10;
//   return huviBodolt;
// });
// console.log(huvi);

// ---------> bodlogo 4

// 3 iin too hed deh index gedgiig ol

// const number = [1, 2, 3, 4, 5];
// const findIndex = number.filter((index) => typeof index !== "string");
// console.log(findIndex);

// --------> bodlogo 5

// 3 aas busad toonuudiig avah

// const number = [1, 2, 3, 4, 5];
// const findIndex = number.filter((el, ind) => el !== 3);
// console.log(findIndex);

// --------> bodlogo 6

// sondgoi toonuudiig ol

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const odd = number.filter((el) => el % 2 !== 0);
// console.log(odd);

// --------> bodlogo 7

// J usgeer ehelsen nersiig olj butsaa   filter

// const names = ["John", "Jane", "Alice", "Bob"];

// const nameFirstJ = names.filter((el) => el.startsWith("J"));
// console.log(nameFirstJ);

// --------> Bodlogo 1

// ner bolon nasiig tus tusad n arrayd hadgal

// map, function, find,

// const arr = [
//   ["Alice", 30],
//   ["Bob", 25],
//   [33, 54],
// ];
// const names = [];
// const ages = [];
// arr.forEach((person) => {
//   person.forEach((item) => {
//     if (typeof item === "string") {
//       names.push(item);
//     } else {
//       ages.push(item);
//     }
//   });
// });
// console.log({ ages, names });

// ---------> bodlogo 2

// sorog toog oloh

// const numbers = [3, -7, -1, 8, -3];
// const negative = [];

// numbers.forEach((number, index) => {
//   if (number < 0) {
//     negative.push(index);
//   }
// });

// console.log(negative);

// ----------> bodlogo 3

// hamgiin ehnii odd toog oloh

// const number = [2, 4, 6, 7, 8, 9];

// const odd = number.find((el) => el % 2 !== 0);

// console.log(odd);

// ----------> bodlogo 4

// n toonoos ih toonuudiig hevle n=5

// const number = [1, 5, 8, 10];

// const max = number.filter((el) => el > 5);

// console.log(max);

// ---------> bodlogo 5
// 30 nastai taarsan array iin index bolon elementiig hevle

// const data = [
//   ["Bob", 25],
//   ["Alice", 30],
//   ["John", 54],
// ];

// let ageIndex, itemId, username;

// data.forEach((item, id) => {
//   item.forEach((el, index, array) => {
//     if (el === 30) {
//       ageIndex = index;
//       itemId = id;
//       username = array.find((item) => typeof item === "string");
//     }
//   });
// });
// console.log(ageIndex, username);

// ---------> bodlogo 6

// ["hello", "world"] --> ['hello!', 'world!']

// const data = ["hello", "world"].map((item) => item + "!");
// console.log(data);

// --------> bodlog 7

// const data = ["abc", "def"].map((item) => item.reverse);
// console.log(data);
