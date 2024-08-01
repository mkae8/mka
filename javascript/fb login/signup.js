// document ees barij avah
const usernameInput = document.getElementById("usernameInput");
const passwordInputFirst = document.getElementById("passwordInputFirst");
const passwordInputSecond = document.getElementById("passwordInputSecond");
const registerButton = document.getElementById("register");

// regbutton deer darhad edge shalgah

registerButton.addEventListener("click", () => {
  if (
    // ali neg n unen bhd true butsaana `||`
    !usernameInput.value ||
    !passwordInputFirst.value ||
    !passwordInputSecond.value
  ) {
    alert("Ali neg n hooson baina");
    return;
  }

  if (passwordInputFirst.value != passwordInputSecond.value) {
    console.log(passwordInputSecond.value);
    alert("Hoyor password taarahq bn");
    return;
  }
  //  localStorage deer datag hadgalah
  window.localStorage.setItem(usernameInput.value, passwordInputFirst.value);
  // oruulsan html ruu shiljih
  alert("success");
  window.location.href = "./login.html";
});
