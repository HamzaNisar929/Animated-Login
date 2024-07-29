const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const logInBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

logInBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
