const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  const valueTrim = e.target.value.trim();

  nameOutput.textContent = valueTrim === "" ? "Anonymous" : valueTrim;
});
