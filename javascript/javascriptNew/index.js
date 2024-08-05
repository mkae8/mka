// const func = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };
// func([1, 2, 3, 5]);

// const array = (arr) => {
//   arr.forEach((element) => {
//     console.log(element);
//   });
// };
// array([1, 2, 3, 5]);

// do while

const weathers = [
  {
    city: "New York",
    temperature: 28,
    weather: "Sunny",
    icon: "sun",
    day: "day",
    time: new Date().toLocaleTimeString("en-US"),
  },
  {
    city: "London",
    temperature: 18,
    weather: "Cloudy",
    icon: "cloudy",
    day: "night",
    time: new Date().toLocaleTimeString("en-GB"),
  },
  {
    city: "Tokyo",
    temperature: 30,
    weather: "Rainy",
    icon: "rainy",
    day: "day",
    time: new Date().toLocaleTimeString("ja-JP"),
  },
  {
    city: "Sydney",
    temperature: 22,
    weather: "Partly Cloudy",
    icon: "cloudy",
    day: "day",
    time: new Date().toLocaleTimeString("en-AU"),
  },
  {
    city: "Paris",
    temperature: 25,
    weather: "Clear",
    icon: "moon",
    day: "night",
    time: new Date().toLocaleTimeString("fr-FR"),
  },
];

const weatherBoards = document.getElementById("weatherBoards");

weatherBoards.forEach({ city, temperature, weathers, icon, day });

// const boardsContainer = document.getElementById("boards");
// const statusContainer = document.getElementById("status");
// const pririotyContainer = document.getElementById("priority");

// boards.forEach(({ id, title }) => {
//   boardsContainer.innerHTML += `<div class="board">
//       <div class="header">
//         <h3>${title}</h3>
//         <p id="counter"${id}>1</p>
//       </div>
//       <div class="tasks" id="${id}"></div>
//       <button id="active-modal" onclick="activeModal()">
//         <span>+ </span> Add card
//       </button>
//     </div>
// `;
//   statusContainer.innerHTML += `<option value="${id}">${title}</option>`;
// });
