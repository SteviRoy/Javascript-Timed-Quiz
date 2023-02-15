// Initial values for the quiz
let score = 0;
let questionIndex = 0;
let time = questions.length * 15;

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