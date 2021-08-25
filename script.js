const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');
const message = document.getElementById('message');
const formInputs = form.querySelectorAll("input");
const formcontrol = document.getElementsByClassName('form-control');
const data = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  data.push({
    username: username,
    email: email,
    password: password,
  });
  console.log(data);
  formInputs.forEach((input) => {
    if (input.type !== "submit") {
      input.value = "";
      const formControl = input.parentElement;
      formControl.classList.remove('success');
    }
  });
});


function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue !== '') {
    setSuccessFor(username);
  }

  if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue !== '') {
    setSuccessFor(password);
  }

  if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords do not match');

  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.add('form-control', 'error');
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.add('form-control', 'success');
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}