// Start of APP QUIZ DATA

const questions = [
  {
    question: "Eshitmoq (Слушать)",
    answers: [
      { text: "Talk", correct: false },
      { text: "Listen", correct: true },
      { text: "Jump", correct: false },
    ],
  },
  {
    question: "Sirpanish (скользить)",
    answers: [
      { text: "Slide", correct: true },
      { text: "Glide", correct: false },
      { text: "Bow", correct: false },
    ],
  },
  {
    question: "Ta’zim qilish (кланяться)",
    answers: [
      { text: "Slide", correct: false },
      { text: "Glide", correct: false },
      { text: "Bow", correct: true },
    ],
  },
  {
    question: "Bosh silkitish (кивать)",
    answers: [
      { text: "Nod", correct: true },
      { text: "Slap", correct: false },
      { text: "Clap", correct: false },
    ],
  },
  //   ***************************************************************
  {
    question: "Qarsak chalish (хлопать)",
    answers: [
      { text: "Nod", correct: false },
      { text: "Clap", correct: true },
      { text: "Snap", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Silkitish, Chayqatish  (трясти)",
    answers: [
      { text: "Spin", correct: false },
      { text: "Roll", correct: false },
      { text: "Shake", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Ko’z qisish (подмигивать)",
    answers: [
      { text: "Wink", correct: true },
      { text: "Hug", correct: false },
      { text: "Kiss", correct: false },
    ],
  },
  //   ****************************************************************

  //   ***************************************************************
  {
    question: "Quchoqlash  (обнимать)",
    answers: [
      { text: "Hag", correct: false },
      { text: "Hug", correct: true },
      { text: "Heg", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Qo`l silkitish  (махать)",
    answers: [
      {
        text: "Wave",
        correct: true,
      },
      { text: "Point", correct: false },
      {
        text: "Flirt",
        correct: false,
      },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Biror kimga yaxshi gapirish  (хвалить)",
    answers: [
      { text: "Wave", correct: false },
      { text: "Point", correct: false },
      { text: "Flirt", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Ushlab olmoq (Ловить)",
    answers: [
      { text: "Throw", correct: false },
      { text: "Catch", correct: true },
      { text: "Drop", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Otmoq (Бросать)",
    answers: [
      {
        text: "Throw",
        correct: true,
      },
      { text: "Catch", correct: false },
      { text: "Drop", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Egilmoq (согнуть)",
    answers: [
      {
        text: "Drop",
        correct: false,
      },
      { text: "Turn", correct: false },
      {
        text: "Bend",
        correct: true,
      },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Tushurib yubormoq  (уронить)",
    answers: [
      { text: "Drop", correct: true },
      { text: "Bend", correct: false },
      { text: "Turn", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Itarish (толкать)",
    answers: [
      { text: "Pull", correct: false },
      { text: "Push", correct: true },
      { text: "Lift", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Tortish (тянуть)",
    answers: [
      { text: "Lift", correct: false },
      { text: "Push", correct: false },
      { text: "Pull", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Ko`tarish (поднимать)",
    answers: [
      { text: "Lift", correct: true },
      { text: "Push", correct: false },
      { text: "Pull", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Tepmoq (пинать)",
    answers: [
      { text: "Kick", correct: true },
      { text: "Taste", correct: false },
      { text: "Punch", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Tamini bilmoq (пробовать)",
    answers: [
      { text: "Taste", correct: true },
      { text: "Kick", correct: false },
      { text: "Punch", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "His qilmoq (чувствовать)",
    answers: [
      {
        text: "Feel",
        correct: true,
      },
      {
        text: "Touch",
        correct: false,
      },
      {
        text: "See",
        correct: false,
      },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Tegib ko`rmoq (трогать)",
    answers: [
      { text: "Touch", correct: true },
      { text: "See", correct: false },
      { text: "Feel", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "I am ________ video!",
    answers: [
      { text: "watch", correct: false },
      { text: "watched", correct: false },
      { text: "watching", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "She is happy. She is ___________",
    answers: [
      { text: "Crying", correct: false },
      { text: "Spinning", correct: false },
      { text: "Laughing", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "O’qimoq (Изучать)",
    answers: [
      { text: "Sleep", correct: false },
      { text: "Study", correct: true },
      { text: "Think", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Tozalamoq (чистить)",
    answers: [
      { text: "Clean", correct: true },
      { text: "Cook", correct: false },
      { text: "Think", correct: false },
    ],
  },
  //   ****************************************************************
];

// End of APP QUIZ DATA

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

startQuiz();

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct == "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
