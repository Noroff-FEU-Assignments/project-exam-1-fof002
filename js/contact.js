const email = document.querySelector("#email");
const submitButton = document.querySelector(".submitButton");
const emailError = document.querySelector(".emailError");
const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector(".firstNameError");
const lastName = document.querySelector("#lastname");
const lastNameError = document.querySelector(".lastNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector(".subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector(".messageError");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(firstName, 3)) {
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }
  if (checkLength(lastName, 3)) {
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
  }
  if (checkLength(subject, 3)) {
    subjectError.style.display = "block";
  } else {
    subjectError.style.display = "none";
  }
  if (checkLength(message, 10)) {
    messageError.style.display = "block";
  } else {
    messageError.style.display = "none";
  }
}

function checkLength(input, len) {
  let lengthOfInput = input.value.trim().length;
  if (lengthOfInput < len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;

  const patternMatches = regEx.test(email);

  return patternMatches;
}
