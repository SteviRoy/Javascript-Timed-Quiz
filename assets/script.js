
//  Questions
const questions = [
{
  question: "What is the keyword used to declare a variable in JavaScript?",
  answers: [
    "var",
    "let",
    "const",
    "variable"
  ],
  correctAnswer: "var"
},
{
  question: "Which of the following is not a valid JavaScript data type?",
  answers: [
    "Number",
    "String",
    "Boolean",
    "Objects"
  ],
  correctAnswer: "Objects"
},
{
  question: "What is the result of 2 / 2 in JavaScript?",
  answers: [
    "4",
    "22",
    "undefined",
    "1"
  ],
  correctAnswer: "1"
},
{
  question: "What is the syntax for an if statement in JavaScript?",
  answers: [
    "if (condition) { statement; }",
    "if condition statement",
    "if (condition); statement;",
    "if ().statement[]"
  ],
  correctAnswer: "if (condition) { statement; }"
},
{
  question: "What is the value of x after executing the following code: var x = 10; x = x + 5;",
  answers: [
    "10",
    "15",
    "5",
    "25"
  ],
  correctAnswer: "15"
}
];

// Initial values for the quiz
let score = 0;
let questionIndex = 0;
let time = questions.length * 5;

// Elements from the HTML
const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const endContainer = document.getElementById("end");
const highScoresContainer = document.getElementById("high-scores-container");
const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const finalScoreEl = document.getElementById("final-score");
const initialsEl = document.getElementById("initials");
const startBtn = document.getElementById("start");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");

 // Start the quiz when the start button is clicked
 startBtn.addEventListener("click", startQuiz);
  
 // Save the high score and initials when the save button is clicked
 saveBtn.addEventListener("click", saveScore);
 
 // Clear the high scores when the clear button is clicked
 clearBtn.addEventListener("click", clearScores);
 
 // Start the quiz
 function startQuiz() {
   startContainer.style.display = "none";
   quizContainer.style.display = "list-item";
   renderQuestion();
   renderTimer();
}

 // Render the current question
 function renderQuestion() {
  let currentQuestion = questions[questionIndex];
  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = "";
  currentQuestion
  .answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", selectAnswer);
      answersEl.appendChild(button);
      });
}
// Select an answer and move on to the next question or show the end screen
function selectAnswer(event) {
  const selectedAnswer = event.target.textContent;
    if (selectedAnswer === questions[questionIndex].correctAnswer) {
    score++;
    }
    if (questionIndex === questions.length - 1) {
    quizContainer.style.display = "none";
    endContainer.style.display = "block";
    finalScoreEl.textContent = "Your final score is " + score + " out of " + questions.length;
    clearInterval(timerInterval);
    } else {
    questionIndex++;
    renderQuestion();
    }
  }

  // Render the timer for the quiz
  function renderTimer() {
    timerInterval = setInterval(function() {
    time--;
    timerEl.textContent = "Time: " + time;
    if (time <= 0) {
    quizContainer.style.display = "none";
    endContainer.style.display = "block";
    clearInterval(timerInterval);
    }
    }, 1000);
    }

    
  // Save the high score and initials
  function saveScore() {
    const initials = initialsEl.value;
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const newScore = {
      score: score,
      initials: initials
  };
  highScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  endContainer.style.display = "none";
  highScoresContainer.style.display = "block";
  renderHighScores();
  }

  // Render the high scores
function renderHighScores() {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.sort((a, b) => b.score - a.score);
  highScores.forEach((highScore, index) => {
  const li = document.createElement("li");
  li.textContent = (index + 1) + ". " + highScore.initials + " - " + highScore.score;
  highScoresContainer.appendChild(li);
  });
  }
  
  // Clear the high scores
  function clearScores() {
  localStorage.removeItem("highScores");
  while (highScoresContainer.firstChild) {
  highScoresContainer.removeChild(highScoresContainer.firstChild);
  }
  }