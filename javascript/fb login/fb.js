const signUpButton = document.getElementById("signup");
const logInButton = document.getElementById("login");

// signUpButton.addEventListener("click", () => {
//   window.location.href = "./sing-up.html";
// });

// logInButton.addEventListener("click", () => {
//   window.location.href = "./login.html";
// });

const username = document.getElementById("username");
const password = document.getElementById("password");

logInButton.addEventListener("click", () => {
  if (!username.value || !password.value) {
    alert("fill the inputs");
    return;
  }
  const dbPassword = window.localStorage.getItem(username.value);
  if (!dbPassword) {
    alert("password or username wrong");
    return;
  }

  if (password.value == dbPassword) {
    window.localStorage.setItem("token", true);
    alert("succesfully logged in ");
    window.location.href = "./home.html";
  }
});
