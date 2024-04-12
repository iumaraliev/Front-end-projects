// Start of APP QUIZ DATA

const questions = [
  {
    question: "He is chewing something",
    answers: [
      { text: "U nimadir yeyapti", correct: false },
      { text: "U nimadir chaynayapti", correct: true },
      { text: "U nimadir qilyapti", correct: false },
    ],
  },
  {
    question: "Do not touch my phone!",
    answers: [
      { text: "Telefonimga tegma!", correct: true },
      { text: "Telefonimga qarab tur", correct: false },
      { text: "Telefonimni tushurib yuborma", correct: false },
    ],
  },
  {
    question: "He is frowning at me!",
    answers: [
      { text: "U menga yelkasini qisyapti", correct: false },
      { text: "U menga qarab labini qiyshaytiryapti", correct: false },
      { text: "U menga qarab qoshini uchuryapti", correct: true },
    ],
  },
  {
    question: "He bites his fingernails",
    answers: [
      { text: "U tirnoqlarini tishlaydi", correct: true },
      { text: "U barmoqlarini tishlaydi", correct: false },
      { text: "U barmoqlarini bo'yaydi", correct: false },
    ],
  },
  //   ***************************************************************
  {
    question: "She yawned and rubbed her eyes",
    answers: [
      { text: "U hurrak tortdi va ko'zlarini yumdi", correct: false },
      { text: "U esnadi va ko'zlarini ishqaladi", correct: true },
      { text: "U esnadi va ko'zlarini yumdi", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Don't shrug your shoulder! I know you know it!",
    answers: [
      { text: "Yelkangni qisma! Bismasligingni bilaman", correct: false },
      { text: "Yelkangni qimirlatma! Baribir bilmaysan", correct: false },
      { text: "Yelkangni qisma! Bilishingni bilaman", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "The poor dog - it's shivering!",
    answers: [
      { text: "Bechora it - qaltirayapti", correct: true },
      { text: "Bechora it - sovuq qotibdi", correct: false },
      { text: "Bechora it - kasal yotibdi", correct: false },
    ],
  },
  //   ****************************************************************

  //   ***************************************************************
  {
    question: "When I clap my hands, you stand up",
    answers: [
      { text: "Qo'limni ko'targanimda, siz o'tirasiz", correct: false },
      { text: "Qarsak chalganimda, o'rningizdan turasiz", correct: true },
      { text: "Qarsak chalganimda, o'tirasiz", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "She dropped her umbrella and bent down to pick it up.",
    answers: [
      {
        text: "U soyabonini tushirib yubordi va olish uchun egildi",
        correct: true,
      },
      { text: "U egildi va soyabonini tushirib yubordi", correct: false },
      {
        text: "Uning soyaboni yerda yotardi va u uni yerdan oldi",
        correct: false,
      },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "He nodded his head",
    answers: [
      { text: "U boshini burdi", correct: false },
      { text: "U boshini aylantirdi", correct: false },
      { text: "U boshini tepadan pastga qimirlatdi", correct: true },
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
