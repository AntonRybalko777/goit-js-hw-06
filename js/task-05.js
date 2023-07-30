const elements = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

elements.input.addEventListener("input", handlerInput);

function handlerInput(evt) {
  if (evt.currentTarget.value.trim() === "") {
    elements.output.textContent = "Anonymous";
  } else {
    elements.output.textContent = evt.currentTarget.value.trim();
  }
}
