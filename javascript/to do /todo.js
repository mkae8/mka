const addCard = document.getElementsByClassName("addCard");
const modalContainer = document.getElementById("modal-container");
const layer = document.getElementById("layer");

const check = {
  title: "",
  description: "",
  taskStatus: "",
  priority: "",
};

for (let i = 0; i < addCard.length; i++) {
  addCard[i].addEventListener("click", () => {
    modalContainer.style.display = "flex";
  });
}

layer.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

const title = document.getElementById("title");
const description = document.getElementById("description");
const taskStatus = document.getElementById("status");
const priority = document.getElementById("priority");
const addTaskButton = document.getElementById("addTask");
const cards = document.querySelectorAll(".cards");

const boardContent = document.querySelectorAll(".boardContent");
addTaskButton.addEventListener("click", () => {
  (check.title = title.value),
    (check.description = description.value),
    (check.taskStatus = taskStatus.value),
    (check.priority = priority.value);

  const task = taskCreator(
    check.title,
    check.description,
    check.taskStatus,
    check.priority
  );
  switch (check.taskStatus) {
    case "todo":
      cards[0].innerHTML += task;
      break;
    case "inprogress":
      cards[1].innerHTML = cards[1].innerHTML + task;
      break;
    case "stuck":
      cards[2].innerHTML = cards[2].innerHTML + task;
      break;
    case "done":
      cards[3].innerHTML = cards[3].innerHTML + task;
      break;
  }
  modalContainer.style.display = "none";
});

const toDoMain = document.querySelectorAll(".to-do-Main")[0];

const taskCreator = (title, description, taskStatus, priority) => {
  return `<div class="taskContent">
            <div id="doneBttn">
              <i class="fa-solid fa-check"></i>
            </div>
            <div id="contentDetails">
              <div class="title">${title}</div>
              <div class="contentText">${description}</div>
              <div class="highBtn">${priority}</div>

            </div>
            <div id="actionBttn">
              <i class="fa-solid fa-xmark"></i>
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
          </div>`;
};
