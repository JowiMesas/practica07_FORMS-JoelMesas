document.getElementById("form").addEventListener("submit", function (event) {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let checkboxes = document.querySelectorAll('input[name="options"]:checked');
  let select = document.getElementById("select");
  let messageName = document.getElementById("messageName");
  let messageEmail = document.getElementById("messageEmail");
  let messageCheckbox = document.getElementById("messageCheckbox");
  let messageSelect = document.getElementById("messageSelect");

  let isValid = true;

  if (name.value.length < 3 || name.value.length > 5) {
    name.setCustomValidity("Must contain between 3 and 5 letters");
    messageName.textContent = "✘ Must contain between 3 and 5 letters";
    messageName.style.color = "red";
    name.style.border = "3px solid red";
    isValid = false;
  } else {
    name.setCustomValidity("");
    messageName.textContent = "✔ Valid";
    messageName.style.color = "lightgreen";
    name.style.border = "3px solid lightgreen";
  }
  name.reportValidity();
  if (!email.checkValidity()) {
    email.setCustomValidity("Email Invalid Format");
    messageEmail.textContent = "✘ Email Invalid";
    messageEmail.style.color = "red";
    messageEmail.style.border = "3px solid red";
    isValid = false;
  } else {
    email.setCustomValidity("");
    messageEmail.textContent = "✔ Email Valid";
    messageEmail.style.color = "lightgreen";
    messageEmail.style.border = "3px solid lightgreen";
  }
  email.reportValidity();
  if (checkboxes.length !== 2) {
    messageCheckbox.textContent = "✘ You must select exactly 2 options";
    messageCheckbox.style.color = "red";
    messageCheckbox.style.border = "3px solid red";
    isValid = false;
  } else {
    messageCheckbox.textContent = "✘ You must select exactly 2 options";
    messageCheckbox.style.color = "lightgreen";
    messageCheckbox.style.border = "3px solid lightgreen";
  }
  if (select.selectedOptions.length !== 2) {
    messageCheckbox.textContent = "✘ You must select exactly 2 options";
  }
});
