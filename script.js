const formulaire = document.getElementById('formulaire')
const firstName = document.getElementById('name')
const lastName = document.getElementById('last-name')
const eMail = document.getElementById('email')
const password = document.getElementById('Password')
const btn =document.getElementById('btn')
const paragraphe = document.getElementById('text-explication')
const nameValue = firstName.value.trim()

const lastNameValue = lastName.value.trim()

const eMailValue = eMail.value.trim()

const passwordValue = password.value.trim()



formulaire.addEventListener('submit', function(e) {
e.preventDefault();



});

if (nameValue === ""){
  let error = document.createElement("SPAN");

  // span.setAttribute("class", messageErreur);
  error = document.createTextNode("cannot be empty");
   formulaire.insertBefore(error,firstName.nextSibling);


}else if (lastNameValue === ""){
    console.log('erreur');
    alert("erreur")
}else if (eMailValue === ""){
  console.log('erreur');
  alert("erreur")
}
  else if (passwordValue === ""){
    console.log('erreur');
    alert("erreur")
  }


