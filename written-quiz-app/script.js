const question = document.querySelector(".question");
const btnSubmit = document.querySelector(".btnSubmit");
const answer = document.querySelector(".answer");
//****************************************/
const questions = [
  {
    question: "Uxlamoq (спать)",
    answer: "sleep",
  },
  {
    question: "Mushtlab urish  (Ударить)",
    answer: "punch",
  },
];
//****************************************/
let score = 0;
let currentQuestion = 0;
let currentQuestionIndex = 0;
function ShowAnswer() {
  let questionNumber = currentQuestion;
  question.innerHTML = `${questionNumber + 1}. ${
    questions[currentQuestion].question
  }`;
  currentQuestion += 1;
}
ShowAnswer();
btnSubmit.addEventListener("click", () => {
  if (
    document.querySelector(".input").value ==
    questions[currentQuestionIndex].answer
  ) {
    answer.textContent = "Correct";
    answer.classList.remove("hidden");
    score += 1;
  } else {
    answer.textContent = questions[currentQuestionIndex].answer;
    answer.classList.remove("hidden");
  }
  ShowAnswer();
});
