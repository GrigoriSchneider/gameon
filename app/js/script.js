// DOM
const headerNavBtn = document.querySelector('#header__container-nav-btn');
const headerNav = document.querySelector('#header__nav');

const form = document.querySelector('.form');
const closeBtn = document.querySelector('.close');
const heroBtn = document.querySelector('.hero__btn');
const hero = document.querySelector('#hero');


const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');

const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');

const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

const formLocation = document.getElementById('form__location');

let successCount = 0;
const formContentBody = document.querySelector('.form__content-body');

// Error for form Validation
let firstNameError = true;
let lastNameError = true;
let emailError = true;
let birthdateError = true;
let attendedError = true;
let locationError = true;
let termsConditionError = true;

// open & close navigation mobile
headerNavBtn.addEventListener('click', ($event) => {
    $event.preventDefault();
    if (headerNav.style.display === 'none') {
        headerNav.style.display = 'flex';
    } else {
        headerNav.style.display = 'none';
    }
});



// Form close

closeBtn.addEventListener('click', ($event) => {
    $event.preventDefault();
    if (form.style.display === 'flex') {
        form.style.display = 'none';
        hero.style.display = 'flex';
    }
    else {
        form.style.display = 'none';
    }

});



// Form open
heroBtn.addEventListener('click', ($event) => {
    $event.preventDefault();
    if (form.style.display = 'none') {
        form.style.display = 'flex';
        hero.style.display = 'none';
    }
});

// Form sign up // successCount

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values  from the inputs
    let firstnameValueLength = firstname.value.length;
    let lastnameValue = lastname.value.trim();
    let emailValue = email.value.trim();
    let birthdateValue = birthdate.value;
    let quantityValue = quantity.value;
    let location1Value = location1.checked;
    let location2Value = location2.checked;
    let location3Value = location3.checked;
    let location4Value = location4.checked;
    let location5Value = location5.checked;
    let location6Value = location6.checked;

    const checkbox1Value = checkbox1.checked;

    // Firstname error
    if (firstnameValueLength < 2) {
        // show error
        // add error class
        setErrorFor(firstname, 'Please enter 2+ characters for name field');
    } else {
        // add success class
        setSuccessFor(firstname);
        firstNameError = false;

    }

    // Lastname error
    if (lastnameValue === '') {
        // show error
        // add error class
        setErrorFor(lastname, 'Please enter 2+ characters for name field');

    } else {
        // add success class
        setSuccessFor(lastname);
        lastNameError = false;

    }

    // Email error
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');

    } else {
        setSuccessFor(email);
        emailError = false;

    }

    // Birthdate error
    if (birthdateValue === '') {
        setErrorFor(birthdate, 'You must enter your date of birth');

    } else {
        setSuccessFor(birthdate);
        birthdateError = false;

    }

    // quantaty error
    if (quantityValue === '') {
        setErrorFor(quantity, 'Enter the number of tournaments you attended');

    } else {
        setSuccessFor(quantity);
        attendedError = false;

    }

    // // location error
    if (location1Value == false &&
        location2Value == false &&
        location3Value == false &&
        location4Value == false &&
        location5Value == false &&
        location6Value == false) {
        setErrorForLocation('You must chose one option')
    } else {
        setSuccessForLocation(' ');
        locationError = false;

    }

    // Checkbox1 error // terms & condition
    if (checkbox1Value === false) {
        setErrorFor(checkbox1, 'You must check to agree to terms and conditions');
    } else {
        setSuccessFor(checkbox1);
        termsConditionError = false;


        successSubmitMessage();

    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';

};


function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';

}

// Error Location
function setErrorForLocation(message) {

    const small = formLocation.querySelector('#locationsmall');

    // add error message inside small
    small.innerText = message;

    // add error class
    formLocation.className = 'form__location error';

};

// Success Location
function setSuccessForLocation(message) {
    const small = formLocation.querySelector('#locationsmall');

    // add error message inside small
    small.innerText = message;
    formLocation.className = 'form__location success';

};


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// Successfunction HTML
function successSubmitMessage() {

    console.log('funktion wird aufgerufen')
    console.log(firstNameError);
    console.log(lastNameError);
    console.log(emailError);
    console.log(birthdateError);
    console.log(attendedError);
    console.log(locationError);
    console.log(termsConditionError);


    // let emailError = true;
    // let birthdateError = true;
    // let attendedErro =true;
    // let locationError = true;
    // let termsConditionError = true;

    if (firstNameError || lastNameError || lastNameError || emailError || birthdateError || attendedError || locationError || termsConditionError == false) {

        formContentBody.innerHTML = '<h5>Thank you for submitting your registration details</h5>' +
            '<button class="signupclose__btn">Close</button>';

        const signUpCloseBtn = document.querySelector('.signupclose__btn');
        // Form close signUpBtnClose
        signUpCloseBtn.addEventListener('click', ($event) => {
            $event.preventDefault();
            if (form.style.display === 'flex') {
                form.style.display = 'none';
                hero.style.display = 'flex';
            }
            else {
                form.style.display = 'none';
            }

        });
    } else {
        return false;
    }
};
