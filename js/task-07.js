const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

inputRangeRef.addEventListener('input', (event) => {
    inputTextRef.style.fontSize = event.target.value+'px';
})
