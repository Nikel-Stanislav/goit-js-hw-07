const nameInput = document.querySelector(`#name-input`);
let nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener("input", function (event) {
  let inputValue = nameInput.value.trim();
  if (inputValue === "") {
    nameOutput.textContent = "Anonimus";
  } else nameOutput.textContent = inputValue;
  console.log(nameOutput.textContent);
});
