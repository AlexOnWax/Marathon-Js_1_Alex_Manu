const formulaire = document.getElementById("formulaire");
const firstName = document.getElementById("name");
const lastName = document.getElementById("last-name");
const eMail = document.getElementById("email");
const password = document.getElementById("Password");
const btn = document.getElementById("btn");
const paragraphe = document.getElementById("text-explication");
const nameValue = firstName.value;
const inputs = document.querySelectorAll(".input");
const lastNameValue = lastName.value;
const error1 = document.querySelector(".error1");
const errors = document.querySelectorAll(".invisible");
const eMailValue = eMail.value;
const passwordValue = password.value;

function inputValidation() {
  var i = -1;
  inputs.forEach((input) => {
    i++;
    input.addEventListener("input", () => {
      input.setCustomValidity("");
      input.checkValidity();
    });

    if (input.validity.valueMissing) {
      const message = document.createTextNode(`${input.id} cannot be empty`);
      errors[i].replaceChildren(message);
      errors[i].classList.add("help");
      input.classList.add("error");
      input.style.background =
        "url('images/icon-error.svg') no-repeat right 10px center ";
    } else if (input.validity.typeMismatch) {
      const message = document.createTextNode(
        `Looks like this is not an email`
      );
      errors[i].replaceChildren(message);
      errors[i].classList.add("help");
      input.classList.add("error");
    } else {
      const message = document.createTextNode("");
      errors[i].replaceChildren(message);
      errors[i].classList.add("help");
      input.classList.remove("error");
    }
  });
}

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  inputValidation();
});
