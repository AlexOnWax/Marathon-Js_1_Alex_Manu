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

const eMailValue = eMail.value.trim();

const passwordValue = password.value.trim();






for (input of inputs) {
  i=0
  i++
 formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

    if (inputs[i].value === "") {
      span = document.createElement("SPAN");
      span = document.createTextNode(`${inputs[i].id} cannot be empty`);
      formulaire.replaceChildren(span);
    }
  });

}




















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

//   });
