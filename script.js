let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");
const validationOutput = document.querySelector("#password-validation");
const btn = document.querySelector("#btn");

// Validate:
// Does password1 is == to password2? If not print text
btn.addEventListener("click", (e) => {
  if (password1.value != "" || password2.value != "") {
    if (password1.value != password2.value) {
      validationOutput.textContent = "* Passwords do not match!";
    } else {
      e.preventDefault();
      validationOutput.textContent = "";
    }
  }
});
