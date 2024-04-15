const jokeText = document.querySelector(".joke-text");
const nextBtn = document.querySelector(".nextBtn");
const answerBtn = document.querySelector(".getAnswerBtn");
const answerText = document.querySelector(".answerText");

nextBtn.addEventListener("click", getJokes);

// addEventListener("mousemove", () => {
//   alert("You moved your mouse");
// });

document.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    getJokes();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    getAnswer();
  }
});

answerText.classList.add("answerHidden");

async function getJokes() {
  answerText.classList.add("answerHidden");
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  console.log(data);
  jokeText.textContent = data.setup;
  showAnswer(data.punchline);
}

answerBtn.addEventListener("click", () => {
  answerText.classList.remove("answerHidden");
});

function showAnswer(answer) {
  answerText.textContent = answer;
}

function getAnswer() {
  answerText.classList.remove("answerHidden");
}

getJokes();
