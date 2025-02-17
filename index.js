function validateAge() {
  let ageInput = document.getElementById("age");
  let ageMessage = document.getElementById("messageAge");
  let age = parseInt(ageInput.value);
  if (!isNaN(age) && age >= 18) {
    ageMessage.textContent = "✔ Valid Age";
    ageMessage.style.color = "lightgreen";
    ageInput.style.border = "3px solid lightgreen";
  } else {
    ageMessage.textContent = "✘ You must be at least 18 years old";
    ageMessage.style.color = "red";
    ageInput.style.border = "3px solid red";
  }
}

function validateDate() {
  let dateInput = document.getElementById("date");
  let dateMessage = document.getElementById("messageDate");
  let regexDate = /^\d{2}-\d{2}-\d{4}$/;

  if (regexDate.test(dateInput.value)) {
    dateMessage.textContent = "✔ Valid Date";
    dateMessage.style.color = "lightgreen";
    dateInput.style.border = "3px solid lightgreen";
  } else {
    dateMessage.textContent = "✘ Invalid Format Date (dd-mm-AAAA)";
    dateMessage.style.color = "red";
    dateInput.style.border = "3px solid red";
  }
}
function validateForm(event) {
  validateAge();
  validateDate();
  if (document.querySelectorAll("span[style='color: red;']").length > 0) {
    event.preventDefault();
  }
}
