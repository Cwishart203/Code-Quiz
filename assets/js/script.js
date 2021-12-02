// DATA: Global variables
// Global variable for application state
var questions = [
    {
        text: "My Question 1",
        choices: ["user choice 1", "user choice 2", "user choice 3", "user choice 4"],
        answer: "user choice 1"
    },
    {
        text: "My Question 2",
        choices: ["user choice 1", "user choice 2", "user choice 3", "user choice 4"],
        answer: ["user choice 1"]
    },
    {
        text: "My Question 3",
        choices: ["user choice 1", "user choice 2", "user choice 3", "user choice 4"],
        answer: ["user choice 1"]
    },
    {
        text: "My Question 4",
        choices: ["user choice 1", "user choice 2", "user choice 3", "user choice 4"],
        answer: ["user choice 1"]
    },
]

console.log(questions[1].text);
console.log(questions[0].answer);

for (var i = 0; i < questions.length; i++) {
    console.log("i = : ", i);
    console.log(questions[i].text);
    console.log(questions[i].choices);
    console.log(questions[i].answer);
}

quizQuestionIndex = 0;

// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
}

startBtn.addEventListener("click", startQuiz);