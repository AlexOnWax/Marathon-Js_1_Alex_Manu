const formulaire = document.getElementById("formulaire");
const firstName = document.getElementById("name");
const lastName = document.getElementById("last-name");
const eMail = document.getElementById("email");
const password = document.getElementById("Password");
const btn = document.getElementById("btn");
const paragraphe = document.getElementById("text-explication");
const nameValue = firstName.value.trim();
const inputs = document.querySelectorAll(".input");
const lastNameValue = lastName.value.trim();
const error1 =document.querySelector(".error1")
const errors = document.querySelectorAll(".invisible");
const eMailValue = eMail.value.trim();

const passwordValue = password.value.trim();






// for (input of inputs) {
//   i=-1
//  formulaire.addEventListener("submit", function (e) {
//     e.preventDefault();
//  i++
//     if (inputs[i].value === "") {
//       span = document.createElement("SPAN");
//       span = document.createTextNode(`${inputs[i].id} cannot be empty`);
//       errors[i].appendChild(span)
//     }
//   });

// }

// const nameInput = document.querySelector('input');
formulaire.addEventListener("submit", function (e) {
  
  e.preventDefault();
  
  firstName.addEventListener('input', () => {
    firstName.setCustomValidity('');
    firstName.checkValidity();
  });
  


firstName.addEventListener('invalid', () => {
  if(firstName.value === '') {
    firstName.setCustomValidity('Enter your username!');
  } else {
    firstName.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});

})


















// formulaire.addEventListener('submit', function(e) {
//   e.preventDefault();

//   if (nameValue === ""){
//     let error = document.createElement("SPAN");
//     error = document.createTextNode("First name Cannot be empty");
//     formulaire.replaceChild(error,firstName.nextSibling);

//   }else if (lastNameValue === ""){
//     let error = document.createElement("SPAN");
//     error = document.createTextNode("Last Name cannot be empty");
//     formulaire.replaceChild(error,lastName.nextSibling);

//   }else if (eMailValue === ""){
//     let error = document.createElement("SPAN");
//     error = document.createTextNode("cannot be empty");
//     formulaire.replaceChild(error,eMail.nextSibling);

//   }
//     else if (passwordValue === ""){
//       let error = document.createElement("SPAN");
//       error = document.createTextNode("Password cannot be empty");
//       formulaire.replaceChild(error,password.nextSibling);
//     }

//;
