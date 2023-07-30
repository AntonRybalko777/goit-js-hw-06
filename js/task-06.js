const input = document.querySelector("#validation-input");

input.addEventListener("blur", handlerValidator);

function handlerValidator(evt) {
  if (
    evt.currentTarget.value.trim().length ===
    Number(evt.currentTarget.dataset.length)
  ) {
    evt.currentTarget.classList.add("valid");
    evt.currentTarget.classList.remove("invalid");
  } else {
    evt.currentTarget.classList.add("invalid");
    evt.currentTarget.classList.remove("valid");
  }
}
