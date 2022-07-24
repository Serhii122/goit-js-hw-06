const textInput = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  span.innerText = event.currentTarget.value;
  if (event.target.value === "") {
    span.innerText = 'Anonymous';
  }
})

