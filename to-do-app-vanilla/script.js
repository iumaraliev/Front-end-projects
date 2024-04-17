const container = document.querySelector(".container");
const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".btnAdd");

let content = "";
form.addEventListener("click", (e) => {
  e.preventDefault();
});

btnSubmit.addEventListener("click", add);

function add() {
  content = document.querySelector(".input").value;
  const para = document.createElement("p");
  const node = document.createTextNode(content);
  para.append(node);
  container.appendChild(para);
}
