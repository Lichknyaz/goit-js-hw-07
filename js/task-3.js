const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
const header = document.querySelector("h1");

const wrapperDiv = document.createElement("div");

textInput.parentNode.insertBefore(wrapperDiv, textInput);
wrapperDiv.appendChild(textInput);
wrapperDiv.appendChild(header);

wrapperDiv.classList.add("wrapper");

textInput.addEventListener("input", (event) => {
    const value = event.currentTarget.value.trim();
    output.textContent = value ? value : "Anonymous";
});