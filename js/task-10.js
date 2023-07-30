function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  container: document.querySelector("#boxes"),
};

const wrapper = document.createElement("div");

const boxesCreate = () => createBoxes(Number(elements.input.value));
elements.createBtn.addEventListener("click", boxesCreate);

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    wrapper.innerHTML = "";
    let widthEl = 20;
    for (let i = 0; i < amount; i++) {
      widthEl += 10;
      let div = document.createElement("div");
      div.style.width = `${widthEl}px`;
      div.style.height = `${widthEl}px`;
      div.style.backgroundColor = getRandomHexColor();
      wrapper.append(div);
    }
    elements.container.append(wrapper);
  } else {
    alert("Введіть значення від 1 до 100");
  }
}

elements.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  wrapper.innerHTML = "";
  widthEl = 20;
}
