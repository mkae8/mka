const createPost = document.getElementById("createPost");

const modalContaner = document.getElementById("modalContainer");

const layer = document.getElementById("layer");

const modal = document.getElementsByClassName("layer")[0];

const sumbit = document.getElementById("submit");

const input = document.getElementById("input");

const successfully = document.getElementById("successfully");

createPost.addEventListener("click", () => {
  modalContaner.style.display = "flex";
});

layer.addEventListener("click", () => {
  modalContaner.style.display = "none";
});

sumbit.addEventListener("click", () => {
  successfully.style.display = "flex";
});
