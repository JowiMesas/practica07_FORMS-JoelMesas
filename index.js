document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let ageInput = document.getElementById("age");
  let ageMessage = document.getElementById("messageAge");
  let dateInput = document.getElementById("date");
  let dateMessage = document.getElementById("messageDate");

  function validateAge() {
      let age = parseInt(ageInput.value);

      if (!isNaN(age) && age >= 18) {
          ageInput.setCustomValidity("");
          ageMessage.textContent = "✔ Valid Age";
          ageMessage.style.color = "lightgreen";
          ageInput.style.border = "3px solid lightgreen";
      } else {
          ageInput.setCustomValidity("You must be at least 18 years old");
          ageMessage.textContent = "✘ You must be at least 18 years old";
          ageMessage.style.color = "red";
          ageInput.style.border = "3px solid red";
      }
      ageInput.reportValidity();
  }

  function validateDate() {
      let regexDate = /^\d{2}-\d{2}-\d{4}$/;

      if (regexDate.test(dateInput.value)) {
          dateInput.setCustomValidity("");
          dateMessage.textContent = "✔ Valid Date";
          dateMessage.style.color = "lightgreen";
          dateInput.style.border = "3px solid lightgreen";
      } else {
          dateInput.setCustomValidity("Invalid Date Format (dd-mm-AAAA)");
          dateMessage.textContent = "✘ Invalid Format Date (dd-mm-AAAA)";
          dateMessage.style.color = "red";
          dateInput.style.border = "3px solid red";
      }
      dateInput.reportValidity();
  }

  function validateForm(event) {
      validateAge();
      validateDate();

      if (!ageInput.checkValidity() || !dateInput.checkValidity()) {
          event.preventDefault();
      }
  }

  ageInput.addEventListener("input", validateAge);
  dateInput.addEventListener("input", validateDate);
  form.addEventListener("submit", validateForm);
});
