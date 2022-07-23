const textInput = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
});

textInput.addEventListener("blur", (event) => {
  if (textInput.value === "") {
    span.textContent = "Anonymous";
  }
});