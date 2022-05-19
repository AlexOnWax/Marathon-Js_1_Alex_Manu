const formulaire = document.getElementById('formulaire')
const firstName = document.getElementById('name')
const lastName = document.getElementById('last-name')
const eMail = document.getElementById('email')
const password = document.getElementById('Password')
const btn =document.getElementById('btn')

const nameValue = firstName.value.trim()

const lastNameValue = lastName.value.trim()

const eMailValue = eMail.value.trim()

const passwordValue = password.value.trim()


formulaire.addEventListener('submit', function(e) {
e.preventDefault();

  




if(nameValue.length < 2 || nameValue.length > 10) {
  console.log("erreur");
}else{
  console.log('succes');
}





  });


if (nameValue === ""){
    console.log('erreur');
}else if (lastNameValue === ""){
    console.log('erreur');
}else if (eMailValue === ""){
  console.log('erreur');}
  else if (passwordValue === ""){
    console.log('erreur');}
