"use strict";

var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var submit = document.getElementById('submit');
var message = document.getElementById('message');
var formInputs = form.querySelectorAll("input");
var formcontrol = document.getElementsByClassName('form-control');
var data = [];
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkInputs();
  var username = document.querySelector("#username").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  data.push({
    username: username,
    email: email,
    password: password
  });
  console.log(data);
  formInputs.forEach(function (input) {
    if (input.type !== "submit") {
      input.value = "";
      var formControl = input.parentElement;
      formControl.classList.remove('success');
    }
  });
});

function checkInputs() {
  var usernameValue = username.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();
  var password2Value = password2.value.trim();

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
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');
  formControl.classList.add('form-control', 'error');
  small.innerText = message;
}

function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.classList.add('form-control', 'success');
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}