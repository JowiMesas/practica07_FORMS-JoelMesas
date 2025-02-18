document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let checkboxes = document.querySelectorAll('input[name="options"]');
  let select = document.getElementById("select");
  let messageName = document.getElementById("messageName");
  let messageEmail = document.getElementById("messageEmail");
  let messageCheckbox = document.getElementById("messageCheckbox");
  let messageSelect = document.getElementById("messageSelect");

  function validateName() {
    if (name.value.length < 3 || name.value.length > 5) {
      name.setCustomValidity("Must contain between 3 and 5 letters");
      messageName.textContent = "✘ Must contain between 3 and 5 letters";
      messageName.style.color = "red";
      name.style.border = "3px solid red";
    } else {
      name.setCustomValidity("");
      messageName.textContent = "✔ Valid";
      messageName.style.color = "lightgreen";
      name.style.border = "3px solid lightgreen";
    }
    name.reportValidity();
  }

  function validateEmail() {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email.value.trim())) {
      email.setCustomValidity("Email Invalid Format");
      messageEmail.textContent = "✘ Email Invalid";
      messageEmail.style.color = "red";
      email.style.border = "3px solid red";
    } else {
      email.setCustomValidity("");
      messageEmail.textContent = "✔ Email Valid";
      messageEmail.style.color = "lightgreen";
      email.style.border = "3px solid lightgreen";
    }
    email.reportValidity();
  }

  function validateCheckboxes() {
    let checked = document.querySelectorAll(
      'input[name="options"]:checked'
    ).length;
    if (checked !== 2) {
      messageCheckbox.textContent = "✘ You must select exactly 2 options";
      messageCheckbox.style.color = "red";
    } else {
      messageCheckbox.textContent = "✔ Valid";
      messageCheckbox.style.color = "lightgreen";
    }
  }

  function validateSelect() {
    if (select.selectedOptions.length !== 2) {
      messageSelect.textContent = "✘ You must select exactly 2 options";
      messageSelect.style.color = "red";
      select.style.border = "3px solid red";
    } else {
      messageSelect.textContent = "✔ Is valid";
      messageSelect.style.color = "lightgreen";
      select.style.border = "3px solid lightgreen";
    }
  }

  // Eventos para validación en tiempo real
  name.addEventListener("input", validateName);
  email.addEventListener("input", validateEmail);
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", validateCheckboxes)
  );
  select.addEventListener("change", validateSelect);

  // Validación en el submit
  form.addEventListener("submit", function (event) {
    validateName();
    validateEmail();
    validateCheckboxes();
    validateSelect();

    let isValid =
      name.checkValidity() &&
      email.checkValidity() &&
      document.querySelectorAll('input[name="options"]:checked').length === 2 &&
      select.selectedOptions.length === 2;

    if (!isValid) {
      event.preventDefault();
    }
  });
});
