const form = document.getElementById("miFormulario");
const div = document.querySelector(".text");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector(".input").value;
  console.log(input);
  div.textContent = ` " ${input} " `;
});
