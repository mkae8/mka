const boards = [
  { id: "toDo", title: "To do " },
  { id: "inProgress", title: "In progress" },
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
  boardsContainer.innerHTML += `<div class="board" ondragover="dragOver(event)" ondrop="drop(event)">
      <div class="header">
        <h3>${title}</h3>
        <p id="counter"${id}>1</p>
      </div>
      <div class="tasks" id="${id}">
      </div>
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

const getNewTask = (title, description, priority, id) => {
  return `
  <div class="task" id= "${id}" draggable="true" ondragstart="drag(event)" >
      <div id= "checked">&#10003;</div>
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

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const statusSelect = document.getElementById("status");
const prioritySelect = document.getElementById("priority");

const titleValidation = document.getElementById("title-validation");
const descriptionValidation = document.getElementById("description-validation");

const toDoContainer = document.getElementById("toDo");
const inProgressContainer = document.getElementById("inProgress");
const stuckContainer = document.getElementById("stuck");
const doneContainer = document.getElementById("done");

const renderTasks = () => {
  toDoContainer.innerHTML = "";
  doneContainer.innerHTML = "";
  stuckContainer.innerHTML = "";
  inProgressContainer.innerHTML = "";

  taskData.forEach((task) => {
    const newTask = getNewTask(
      task.title,
      task.description,
      task.priority,
      task.id
    );
    switch (task.status) {
      case "toDo":
        toDoContainer.innerHTML += newTask;
        break;
      case "done":
        doneContainer.innerHTML += newTask;
        break;
      case "stuck":
        stuckContainer.innerHTML += newTask;
        break;
      case "inProgress":
        inProgressContainer.innerHTML += newTask;
        break;
    }
  });
};

const addNewTask = () => {
  const newTask = {
    id: Date.now(),
    title: titleInput.value,
    status: statusSelect.value,
    description: descriptionInput.value,
  };

  let isValid = true;

  if (!newTask.title) {
    titleValidation.style.display = "block";
    titleInput.style.border = "1px solid red";
    isValid = false;
  }
  if (!newTask.description) {
    descriptionValidation.style.display = "block";
    descriptionInput.style.border = "1px solid red";
    isValid = false;
  }
  if (!isValid) return;
  taskData.push(newTask);
  renderTasks();
  modalContainer.style.display = "none";
};

const validationInputs = [
  { input: titleInput, validation: titleValidation },
  { input: descriptionInput, validation: descriptionValidation },
];

validationInputs.forEach(({ input, validation }) => {
  input.addEventListener("keypress", () => {
    validation.style.display = "none";
    input.style.border = "1px solid black";
  });
});

const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};

const dragOver = (event) => {
  event.preventDefault();
};

const drop = (event) => {
  const draggedItemId = event.dataTransfer.getData("text");
  const draggedItem = document.getElementById("draggedItemId");


  
};
