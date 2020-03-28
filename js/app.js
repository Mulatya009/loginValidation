//variables
const loginBtn = document.getElementById('signin'),
      email = document.querySelector('#emailaddress'),
      password = document.querySelector('#password'),
      loginForm = document.getElementById('loginForm');



//event-listeners
eventListeners();

function eventListeners(){
    //app init
    document.addEventListener('DOMContentLoaded', appInit);

    //validate form fields
    email.addEventListener('blur', validateField);
    password.addEventListener('blur', validateField);

    //
    loginForm.addEventListener('submit', login);

}



//functions

//app initialization
function appInit(){
    loginBtn.disabled = true;
    loginBtn.style.cursor = 'not-allowed';
}

function login(e){
    e.preventDefault();

    //show spinner
    const spinner = document.querySelector('#process');
    
    spinner.style.display = 'block';
    setTimeout(function(){
        spinner.style.display = 'none';
    }, 3000);

}


//validate fields
function validateField(){
    let errors;

    //validate the length
    validateLength(this);

    //validate email
    if(this.type === 'email'){
        validateEmail(this);
    }

    //check for errors in the fields
    errors = document.querySelectorAll('.error');

    //check for empty fields
    if(email.value !== "" && password.value !== "")
        if(errors.length == 0){
            //enable button
            loginBtn.disabled = false;
            loginBtn.style.cursor = 'pointer';
        } else {
            loginBtn.disabled = true;
        }
}

//validate length of the fields
function validateLength(field){
   if(field.value.length > 0){
        field.style.borderColor = 'green';
        field.classList.remove('error');
   } else {
        field.style.borderColor = 'red';
        field.classList.add('error');
   }

}

//validate email
function validateEmail(field){
    let emailText = field.value;
    //check for @ sign
    if(emailText.indexOf('@') !== -1){
        field.style.borderColor = 'green';
        field.classList.remove('error');
   } else {
        field.style.borderColor = 'red';
        field.classList.add('error');
   }

}