const form = document.querySelector("form")
const password1El = document.querySelector("#password1")
const password2El = document.querySelector("#password2")
const messageContainer = document.querySelector(".message-container")
const message = document.querySelector("#message")


let isValid = false
let passwordMatch = false
function validateForm(){
// using contrait API
isValid = form.checkValidity()
console.log(isValid);
//style main message error

if (!isValid) {
message.textContent ="Please fillout all fields"
message.style.color = "rgb(211, 41, 41)"
messageContainer.style.borderColor = "rgb(211, 41, 41)"
return;
}
//check matched password
if (password1El.value === password2El.value) {
    passwordMatch=true
    password1El.style.borderColor = "rgb(93, 214, 129)"
    password2El.style.borderColor = "rgb(93, 214, 129)"
}
else{
    passwordMatch=false
    message.textContent="Make sure passwords match"
    message.style.color = "rgb(211, 41, 41)"
    messageContainer.style.borderColor = "rgb(211, 41, 41)"
    password1El.style.borderColor ="rgb(211, 41, 41)"
    password2El.style.borderColor ="rgb(211, 41, 41)"
    return;

}
//if form is valid and password match
if(isValid && passwordMatch){
message.textContent = "Successfully registred!"
message.style.color ="rgb(93, 214, 129)"
messageContainer.style.borderColor ="rgb(93, 214, 129)"
}
}
function storeFormData(){
    const user = {
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value,
    }
    //do something with user Data
    console.log(user);
}

function submitFormData(e){
    e.preventDefault();
    // validate form
    validateForm()
    //submit valid data
    if(isValid && passwordMatch){
    storeFormData()
    }
}
//event listner
form.addEventListener("submit",submitFormData)