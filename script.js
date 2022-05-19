const form = document.getElementById('formulaire')
const firstName = document.getElementById('name')
const lastName = document.getElementById('last-name')
const eMail = document.getElementById('email')
const password = document.getElementById('Password')
const btn =document.getElementById('btn')

const nameValue = firstName.value.trim()

const lastNameValue = lastName.value.trim()

const eMailValue = eMail.value.trim()

const passwordValue = password.value.trim()


form.addEventListener('submit', function(e){

    e.preventDefault();
    console.log("form ok");
if(nameValue==="") {
console.log('erreur');
}else{
    console.log('succes');
}
});
