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
  //   ***************************************************************
  {
    question: "She fainted.",
    answers: [
      { text: "U yiqilib tushdi", correct: false },
      { text: "U xushidan ketdi", correct: true },
      { text: "U sovuq qotdi", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "I flipped the book to look at the back of the book",
    answers: [
      {
        text: "Kitobni orqa tarafini ko'rish uchun, uni o'girdim",
        correct: true,
      },
      { text: "Kitobni orqa tarafini o'girdim", correct: false },
      { text: "Kitobning orqa betigacha varoqlab chiqdim", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "I'll never understand these instructions,' he sighed",
    answers: [
      {
        text: "Men bu ko'rsatmalarni hech qachon tushunmayman dedi u",
        correct: false,
      },
      { text: "Men bu ko'rsatmalarni bilaman dedi u", correct: false },
      {
        text: "Men bu ko'rsatmalarni tushunmayman deb u 'uff' tortdi",
        correct: true,
      },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "I coughed all night long",
    answers: [
      { text: "Kechasi bilan yo'talib chiqdim", correct: true },
      { text: "Kechasi bilan xurrak otib chiqdim", correct: false },
      { text: "Kechasi bilan aksi urib chiqdim", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Do you pluck your eyebrows?",
    answers: [
      { text: "Qoshingni bo'yaysanmi?", correct: false },
      { text: "Qoshingni terdirasanmi?", correct: true },
      { text: "Qoshingni yuvasanmi?", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Close the door carefully, don't slam it.",
    answers: [
      { text: "Eshikni qattiq yopib ket", correct: false },
      { text: "Eshikni qattiq yopib ketding!", correct: false },
      { text: "Eshikni sekinroq yop, qattiq yopma", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "You are squeezing my hand",
    answers: [
      { text: "Sen meni qo'limni qisyapsan", correct: true },
      { text: "Sen meni qo'limni ushlab olgansan", correct: false },
      { text: "Sen meni qo'limga uryapsan", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Ouch! Stop pinching (me)!",
    answers: [
      { text: "Meni chimchilashni bas qil", correct: true },
      { text: "Meni qitiqlashni bas qil", correct: false },
      { text: "Meni urishni bas qil", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Omg, bomb is going to explode",
    answers: [
      { text: "Bomba hozir portlaydi", correct: true },
      { text: "Bomba hozir to'xtaydi", correct: false },
      { text: "Bomba hozir qo'yiladi", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "They hugged each other when they met at the station.",
    answers: [
      {
        text: "Ular bir birini bekatda ko'rishganda quchoqladi",
        correct: true,
      },
      {
        text: "Ular bir birini bekatda ko'rganda suhbatlashishdi",
        correct: false,
      },
      {
        text: "Ular bir birini bekatda ko'rgandi so'rashishdi",
        correct: false,
      },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Don't ________ stones",
    answers: [
      { text: "throw", correct: true },
      { text: "thorw", correct: false },
      { text: "therw", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "He _______ me yesterday",
    answers: [
      { text: "punch", correct: false },
      { text: "punching", correct: false },
      { text: "punched", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "Please, _____ on the TV",
    answers: [
      { text: "flip", correct: false },
      { text: "spin", correct: false },
      { text: "turn", correct: true },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "She is _________ the flower",
    answers: [
      { text: "tasting", correct: false },
      { text: "smelling", correct: true },
      { text: "vomitting", correct: false },
    ],
  },
  //   ****************************************************************
  //   ***************************************************************
  {
    question: "People usually ____ hands when they meet",
    answers: [
      { text: "shake", correct: true },
      { text: "grasp", correct: false },
      { text: "pinch", correct: false },
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
