// // Card element

const CardElement = ({ id, title, description, priority, status }) => `
<div class="card" draggable="true" data-id="${id}">
  ${
    status === "done"
      ? `<div class="checked"><i class="fas fa-check"></i></div>`
      : `<div class="done" onclick="handleMakeDone('${id}')"><i class="fas fa-check"></i></div>`
  }
  <div class="details">
    <h4>${title}</h4>
    <p>${description}</p>
    <div class="priority">${priority}</div>
  </div>
  <div class="actions">
    <div class="remove" onclick="handleRemove('${id}')">
      <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="edit" onclick="handleEdit('${id}')">
      <i class="fa-solid fa-pen-to-square"></i>
    </div>
  </div>
</div>
`;

// Render function

const render = () => {
  const sections = {
    todo: [],
    inprogress: [],
    stuck: [],
    done: [],
  };

  data.forEach((item) => sections[item.status].push(CardElement(item)));

  // Sorting tasks by priority
  const sortTasks = (tasks) =>
    tasks.sort((a, b) => {
      const priorityMap = { High: 3, Medium: 2, Low: 1 };
      return (priorityMap[b.priority] || 1) - (priorityMap[a.priority] || 1);
    });

  Object.keys(sections).forEach((status) => {
    sections[status] = sortTasks(sections[status]);
    document.querySelector(`#${status}`).innerHTML = sections[status].join("");
    document.querySelector(`#${status}-count`).textContent =
      sections[status].length;
  });

  // Add Drag and Drop functionality to cards
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData(
        "text/plain",
        event.target.getAttribute("data-id")
      );
    });
  });
};

// Event handler functions
const handleRemove = (id) => setData(data.filter((item) => item.id !== id));
const handleMakeDone = (id) =>
  setData(
    data.map((item) => (item.id === id ? { ...item, status: "done" } : item))
  );
const handleEdit = (id) => {
  // Implement edit functionality
};
