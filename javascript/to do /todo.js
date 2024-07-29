// const addCardElement = document.getElementsByClassName("addCard");
// const modalContainer = document.getElementById("modal-container");
// const layer = document.getElementById("layer");

// const check = {
//   title: "",
//   description: "",
//   taskStatus: "",
//   priority: "",
// };

// for (let i = 0; i < addCardElement.length; i++) {
//   addCardElement[i].addEventListener("click", () => {
//     modalContainer.style.display = "flex";
//   });
// }

// layer.addEventListener("click", () => {
//   modalContainer.style.display = "none";
// });

// const title = document.getElementById("title");

// const description = document.getElementById("description");

// const taskStatus = document.getElementById("taskStatus");

// const priority = document.getElementById("priority");

// const addTaskButton = document.getElementById("addTask");

// addTaskButton.addEventListener("click", () => {
//   (check.title = title.value),
//     (check.description = description.value),
//     (check.taskStatus = taskStatus.value),
//     (check.priority = priority.value),
//     console.log(check);

//   const task = taskCreator(
//     check.title,
//     check.description,
//     check.taskStatus,
//     check.priority
//   );
//   const baigaaym = toDoMain.innerHTML;
//   toDoMain.innerHTML = baigaaym + task;
// });

// const toDoMain = document.getElementsByClassName("to-do-Main")[0];

// const taskCreator = (title, description, taskStatus, priority) => {
//   return `<div id="todoContent">
//             <div id="doneBttn">
//               <i class="fa-solid fa-check"></i>
//             </div>
//             <div id="contentDetails">
//               <div class="title">${title}</div>
//               <div class="contentText">${description}</div>
//               <div class="highBtn">${priority}</div>

//             </div>
//             <div id="actionBttn">
//               <i class="fa-solid fa-xmark"></i>
//               <i class="fa-solid fa-pen-to-square"></i>
//             </div>
//           </div>`;
// };

// Get references to DOM elements
const addCardElements = document.getElementsByClassName("addCard");
const modalContainer = document.getElementById("modal-container");
const layer = document.getElementById("layer");

const check = {
  title: "",
  description: "",
  taskStatus: "",
  priority: "",
};

// Show modal on click of add card elements
Array.from(addCardElements).forEach((addCardElement) => {
  addCardElement.addEventListener("click", () => {
    modalContainer.style.display = "flex";
  });
});

// Hide modal on click of the layer
layer.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

// Get form fields
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const taskStatusInput = document.getElementById("taskStatus");
const priorityInput = document.getElementById("priority");

const addTaskButton = document.getElementById("addTask");

// Add task on button click
addTaskButton.addEventListener("click", () => {
  // Update check object with form values
  check.title = titleInput.value;
  check.description = descriptionInput.value;
  check.taskStatus = taskStatusInput.value;
  check.priority = priorityInput.value;

  console.log(check);

  // Create task HTML and add to the to-do list
  const task = taskCreator(
    check.title,
    check.description,
    check.taskStatus,
    check.priority
  );
  const toDoMain = document.getElementsByClassName("to-do-Main")[0];
  toDoMain.innerHTML += task;

  // Reset form fields and close modal
  titleInput.value = "";
  descriptionInput.value = "";
  taskStatusInput.value = "";
  priorityInput.value = "";
  modalContainer.style.display = "none";
});

// Function to create task HTML
const taskCreator = (title, description, taskStatus, priority) => {
  return `
    <div class="todoContent">
      <div class="doneBttn">
        <i class="fa-solid fa-check"></i>
      </div>
      <div class="contentDetails">
        <div class="title">${title}</div>
        <div class="contentText">${description}</div>
        <div class="highBtn">${priority}</div>
      </div>
      <div class="actionBttn">
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
    </div>`;
};
