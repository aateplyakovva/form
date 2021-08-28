function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector('.form__message');

  messageElement.textContent = message;
  messageElement.classList.remove('form__message-success', 'form__message-error');
  messageElement.classList.add(`form__message-${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add('form__input-error');
  inputElement.parentElement.querySelector('.form__input-error-message').textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove('form__input-error');
  inputElement.parentElement.querySelector('.form__input-error-message').textContent = "";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login');
  const createAccountForm = document.querySelector('#createAccount');

  document.querySelector('#linkCreateAccount').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('form-hidden');
    createAccountForm.classList.remove('form-hidden');
  });

  document.querySelector('#linkLogin').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('form-hidden');
    createAccountForm.classList.add('form-hidden');
  });

  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    // perform ajax/fetch login

    setFormMessage(loginForm, 'error', "Invalid username/password combination");
  });
  

  document.querySelectorAll('.form__input').forEach(inputElement => {
    const secondPassword = document.querySelector('#signupPasswordSecons');
    inputElement.addEventListener('blur', e => {
      if (e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length < 8) {
        setInputError(inputElement, 'User must be at least 8 characters in length');
      } else if (e.target.id === 'signupEmail' && !isEmail()) {
        setInputError(inputElement, 'Not a valid email');
      } else if (e.target.id === 'signupPasswordFirst' && e.target.value.length < 6) {
        setInputError(inputElement, 'Password must be at least 6 characters in length');
      } else if (e.target.id === 'signupPasswordFirst' && !secondPassword) {
        setInputError(inputElement, 'Passwords do not match');
      }
    });
    inputElement.addEventListener('input', e => {
      clearInputError(inputElement);
    });
  });

});


