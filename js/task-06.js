const inputValidationRef = document.querySelector('#validation-input');
const dataLength = Number(inputValidationRef.getAttribute('data-length'));

function validateInput(e) {
    if (e.currentTarget.value.length === dataLength) {
        inputValidationRef.classList.add('valid');
        inputValidationRef.classList.remove('invalid');
    }
    else {
        inputValidationRef.classList.remove('valid');
        inputValidationRef.classList.add('invalid');
    }
        
}

inputValidationRef.addEventListener('blur',validateInput);