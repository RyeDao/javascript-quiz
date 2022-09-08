//Variables
var currentQuestion = 0;
var timeLeft = 0;
var timer;

//Questions 
var questions = [
    {
        title: "Question A",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "Question B",
        choices: ["A", "B", "C", "D"],
        answer: "B"
    },
    {
        title: " Arrays in ",
        choices: ["A", "B", "C", "D"],
        answer: "C"
    },
    {
        title: "Question D",
        choices: ["A", "B", "C", "D"],
        answer: "D"
    },
    {
        title: "Question AA",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    }
]  

function start() {
    
    timeLeft = 30;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }

    }, 1000);

    nextQuestion();
}
