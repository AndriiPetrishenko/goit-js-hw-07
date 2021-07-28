const inputControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function changeTextFont(e) {

     textRef.style.fontSize = e.currentTarget.value + 'px';
}

inputControlRef.addEventListener('input', changeTextFont);