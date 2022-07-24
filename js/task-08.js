const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const names = ["email", "password"];
    const object = {};
    for (const element in elements){
        if (!names.includes(element)){
            continue;
        }
        if (elements[element].value === ''){
            alert("Please fill in all the fields!");
            return false;
        }
        object[element] = elements[element].value;
    }
    console.log(object);
    event.currentTarget.reset();
})