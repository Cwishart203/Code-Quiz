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
    {
        text: "My Question 5",
        choices: ["user choice 1", "user choice 2", "user choice 3", "user choice 4"],
        answer: ["user choice 1"]
    },
]


// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
}

startBtn.addEventListener("click", startQuiz);