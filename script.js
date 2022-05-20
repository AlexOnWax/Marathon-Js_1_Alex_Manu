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
const error1 =document.querySelector(".error1")
const errors = document.querySelectorAll(".invisible");
const eMailValue = eMail.value;

const passwordValue = password.value;






// paragraphe.addEventListener('click', () => {
//   const error1 =document.querySelector(".error1")

//   const erortest = document.createTextNode('Please enter your name.')
//        error1.replaceChildren(erortest)
//         error1.classList.add('help')
// })




formulaire.addEventListener("submit", function (e) {

  for (let i=; i<= inputs.length; i++) {

  
  const error1 =document.querySelector(".error1")

  e.preventDefault();
  
  firstName.addEventListener('input', () => {
    firstName.setCustomValidity('');
    firstName.checkValidity();
  });

 
     if(firstName.value === '') {
      const error1 =document.querySelector(".error1")
    const erortest = document.createTextNode(`${inputs[i]} cannot be empty`)
      error1.replaceChildren(erortest)
        error1.classList.add('help')
       
     } else {
     
     }

    
    })
    


