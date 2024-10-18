const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
    const value = event.currentTarget.value.trim();
    output.textContent = value ? value : "Anonymous";
});