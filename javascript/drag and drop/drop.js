//  Drag : dragstart, drag, dragend
// Drop : dragenter, dragover, drag, dragleave

const innerContainer = document.querySelectorAll(".inner-container");
const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number, index) => {
  number.setAttribute("id", `numbers-${index}`);
});

numbers.forEach((number) => {
  number.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
});

numbers.forEach((number) => {
  number.addEventListener("drag", (event) => {
    event.target.style.backgroundColor = "orange";
  });
});

numbers.forEach((number) => {
  number.addEventListener("dragend", (event) => {
    event.target.style.backgroundColor = "#c0c0c0";
  });
});

innerContainer.forEach((inner) => {
  inner.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});

innerContainer.forEach((inner) => {
  inner.addEventListener("drop", (event) => {
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    event.target.appendChild(draggedElement);
  });
});
