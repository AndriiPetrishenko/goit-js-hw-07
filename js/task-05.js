const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

function changeOutputText(e) {
    e.currentTarget.value.trim() ?
        outputNameRef.textContent = e.currentTarget.value :
        outputNameRef.textContent = "незнакомец";
}

inputNameRef.addEventListener('input', changeOutputText);