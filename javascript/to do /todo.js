const boards = [
  { id: "toDo", title: "To do " },
  { id: "inProgres", title: "In progress" },
  { id: "stuck", title: "Stuck" },
  { id: "done", title: "Done" },
];

const pririoties = [
  { title: "Low", value: "low" },
  { title: "Medium", value: "medium" },
  { title: "High", value: "high" },
];

const boardsContainer = document.getElementById("boards");
const statusContainer = document.getElementById("status");
const pririotyContainer = document.getElementById("priority");

boards.forEach(({ id, title }) => {
  boardsContainer.innerHTML += `<div class="board">
      <div class="header">
        <h3>${title}</h3>
        <p id="counter"${id}>1</p>
      </div>
      <div class="tasks" id="${id}"></div>
      <button id="active-modal" onclick="activeModal()">
        <span>+ </span> Add card
      </button>
    </div>
`;
  statusContainer.innerHTML += `<option value="${id}">${title}</option>`;
});
pririoties.forEach(({ title, value }) => {
  pririotyContainer.innerHTML += `
   <option value="${value}">${title}</option>
  `;
});

const modalContainer = document.getElementById("modal-container");

const activeModal = () => {
  modalContainer.style.display = "block";
};

const removeModal = () => {
  modalContainer.style.display = "none";
};

const addNewTaskButton = document.getElementById("add-new-task");

const taskData = [];

const getNewData = (title, description, priority, id) => {
  return `
  <div class="task" id= "${id}">
      <div>&#10003;</div>
      <div class="task-text-container">
        <div class="task-line">
          <h3>${title}</h3>
          <button>X</button>
        </div>
        <div class="task-line">
          <p>${description}</p>
          <button>E</button>
        </div>
        <div class="task-priority">${priority}</div>
      </div>
    </div></div>`;
};

const tittleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const statusSelect = document.getElementById("status");
const prioritySelect = document.getElementById("priority");

const addNewTask = () => {};
