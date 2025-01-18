const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements.email;
  const password = e.target.elements.password;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    return alert("All form fields must be filled in");
  }
  const formLog = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formLog);
  form.reset();
});
