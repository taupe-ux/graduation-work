const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLogIn(event) {
  event.preventDefault();
  logInForm.classList.add(HIDDEN);
  const username = logInInput.value;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN);
  localStorage.setItem(USERNAME_KEY, username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  logInForm.classList.remove(HIDDEN);
  logInForm.addEventListener("submit", onLogIn);
} else {
  greeting.classList.remove(HIDDEN);
  greeting.innerText = `hello ${savedUsername}`;
  logInForm.addEventListener("submit", onLogIn);
}
