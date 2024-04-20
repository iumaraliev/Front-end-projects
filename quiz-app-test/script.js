// Start of APP QUIZ DATA

const questions = [
  //   ***************************************************************
  {
    question: "Barmoq bilan bosish (нажимать)",
    answers: [
      { text: "Rub", correct: false },
      { text: "Tap", correct: true },
      { text: "Pluck", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Portlash (взрываться)",
    answers: [
      { text: "Explode", correct: true },
      { text: "Slam", correct: false },
      { text: "Pluck", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Bermoq  (давать)",
    answers: [
      { text: "Close", correct: false },
      { text: "Give", correct: true },
      { text: "Play", correct: false },
    ],
  },
  //   ****************************************************************

  {
    question: "O’qimoq (Изучать)",
    answers: [
      { text: "Sleep", correct: false },
      { text: "Study", correct: true },
      { text: "Think", correct: false },
    ],
  },
  //   ***************************************************************
  //   ***************************************************************
  {
    question: "Tozalamoq (чистить)",
    answers: [
      { text: "Think", correct: false },
      { text: "Study", correct: false },
      { text: "Clean", correct: true },
    ],
  },
  //   ****************************************************************
  {
    question: "Baqirmoq (кричать)",
    answers: [
      { text: "Shout", correct: true },
      { text: "Explode", correct: false },
      { text: "Sneeze", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Uyg’onmoq  (разбудить)",
    answers: [
      { text: "Smell", correct: false },
      { text: "Fly", correct: false },
      { text: "Wake", correct: true },
    ],
  },
  //   ****************************************************************
  {
    question: "Sirpanish (скользить)",
    answers: [
      { text: "Slide", correct: true },
      { text: "Glide", correct: false },
      { text: "Bow", correct: false },
    ],
  },
  //   ***************************************************************
  //   ***************************************************************
  {
    question: "O’tirmoq (Сидеть)",
    answers: [
      { text: "Sit", correct: true },
      { text: "Read", correct: false },
      { text: "Write", correct: false },
    ],
  },
  //   ****************************************************************
  {
    question: "Qaltirash (дрожать)",
    answers: [
      { text: "Shiver", correct: true },
      { text: "Frown", correct: false },
      { text: "Pout", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "To’satdan sinish, Buzilish (щелкнуть)",
    answers: [
      { text: "Clap", correct: false },
      { text: "Slam", correct: false },
      { text: "Snap", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Chuqur nafas olish “uff” tortish (вздыхать)",
    answers: [
      { text: "Shrug", correct: false },
      { text: "Cough", correct: false },
      { text: "Sigh", correct: true },
    ],
  },
  //   ****************************************************************
  {
    question: "Ta’zim qilish (кланяться)",
    answers: [
      { text: "Slide", correct: false },
      { text: "Glide", correct: false },
      { text: "Bow", correct: true },
    ],
  },
  //   ***************************************************************
  //   ***************************************************************
  {
    question: "Yozmoq (Писать)",
    answers: [
      { text: "Dance", correct: false },
      { text: "Write", correct: true },
      { text: "Sing", correct: false },
    ],
  },
  //   ****************************************************************
  {
    question: "Tushurib yubormoq  (уронить)",
    answers: [
      { text: "Throw", correct: false },
      { text: "Drop", correct: true },
      { text: "Catch", correct: false },
    ],
  },
  //   ****************************************************************
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
    question: "Yo’talish (кашлять)",
    answers: [
      { text: "Sneeze", correct: false },
      { text: "Cough", correct: true },
      { text: "Hunch", correct: false },
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
  {
    question: "Hurrak otish (фыркать)",
    answers: [
      { text: "Explode", correct: false },
      { text: "Snort", correct: true },
      { text: "Slam", correct: false },
    ],
  },
  //   ****************************************************************
  //   ****************************************************************
  //   ***************************************************************

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

  //   ***************************************************************
  {
    question: "Pichirlab gapirish (шептать)",
    answers: [
      { text: "Scream", correct: false },
      { text: "Shout", correct: false },
      { text: "Whisper", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  //   ****************************************************************
  {
    question: "Eshitmoq (Слушать)",
    answers: [
      { text: "Talk", correct: false },
      { text: "Listen", correct: true },
      { text: "Jump", correct: false },
    ],
  },
  //   ***************************************************************
  {
    question: "Bukchayib o’tirish (горбиться)",
    answers: [
      { text: "Shrug", correct: false },
      { text: "Sigh", correct: false },
      { text: "Hunch", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Uzish, Yulish",
    answers: [
      { text: "Pluck", correct: true },
      { text: "Rub", correct: false },
      { text: "Tap", correct: false },
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
