const text = document.querySelector(".text");
const btn = document.querySelector("button");

btn.addEventListener("click", getJokes);

async function getJokes() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  console.log(data);
  text.innerHTML = data.setup;
}

getJokes();
