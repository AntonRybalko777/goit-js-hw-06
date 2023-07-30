const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerForm);
function handlerForm(evt) {
  evt.preventDefault();
  if (form.elements.email.value === "" || form.elements.password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const obj = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(obj);
    evt.currentTarget.reset();
  }
}
