const elements = {
  span: document.querySelector("#value"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

elements.decrementBtn.addEventListener("click", handlerDecrement);
elements.incrementBtn.addEventListener("click", handlerIncrement);

function handlerDecrement() {
  counterValue -= 1;
  elements.span.textContent = counterValue;
}
function handlerIncrement() {
  counterValue += 1;
  elements.span.textContent = counterValue;
}
