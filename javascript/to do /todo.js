const addCardElement = document.getElementsByClassName("addCard");
const modalContainer = document.getElementById("modal-container");
const layer = document.getElementById("layer");

for (let i = 0; i < addCardElement.length; i++) {
  addCardElement[i].addEventListener("click", () => {
    modalContainer.style.display = "flex";
  });
}

layer.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

