//Variables
var currentQuestion = 0;
var timeLeft = 0;
var timer;

//Questions 
var questions = [
    {
        title: "Javascript is an ___ language?",
        choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer: "Object-Oriented"
    },
    {
        title: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        title: " Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["getElementbyid()", "getElementByClassName()", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        title: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        choices: ["Throws an error", "Ignores the statements", "Gives a warning", "None of the above"],
        answer: "Ignores the statements"
    },
    {
        title: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ["document.write()", "console.log()", "windotw.alert()", "All of the above"],
        answer: "All of the above"
    }
]  

function start() {
    
    timeLeft = 75;
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

function endGame() {
    clearInterval(timer);

    var quizResult = `
    <h2>Game Over!</h2>
    <h3>You got a score of ` + timeLeft + `!</h3>
    <input type="text" style="text-transform:uppercase" id="name"  placeholder="Initials" onkeyup="this.value = this.value.toUpperCase();">
    <button onclick="setScore()">Save Score</button>`;

    document.getElementById("quizBody").innerHTML = quizResult;

}


function setScore() {

    localStorage.setItem("highscore", timeLeft);
    localStorage.setItem("highscoreName", document.getElementById('name').value,)

    getScore();
}

function getScore() {

var quizScore = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1> <br>
    <button onclick="clearScore()">Clear Score</button>
    <button onclick="resetGame()">Play Again</button>
    `;

    document.getElementById("quizBody").innerHTML = quizScore;
}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "")

    resetGame();

}

function resetGame() {
    clearInterval(timer); 
    currentQuestion = 0;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizReset = `
    <h1>Javascript Quiz</h1> 
    <h3>Click to start quiz!</h3>
    <button onclick="start()">Start</button>`;

    document.getElementById("quizBody").innerHTML = quizReset;

}

function incorrect() {
    timeLeft -= 15;
    nextQuestion();
}

function correct() {
    nextQuestion();
}


function nextQuestion() {
    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].title + "<h/2><br>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[answ]\">[choice]</button>";
        buttonCode = buttonCode.replace("[choice]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[answ]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[answ]", "incorrect()");
        }
        quizContent += buttonCode

    }
    currentQuestion++;
    document.getElementById("quizBody").innerHTML = quizContent;
}

