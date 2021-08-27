// declare variables
var wrapperEl = document.querySelector("wrapper");
var timerEl = document.querySelector("#timer");
const codeQuestionsEl = document.querySelector("#quizquestions");
var qchoicesEl = document.querySelector("#qchoices");
var startQuizEl = document.querySelector("#startquiz");

var secondsLeft = 35;
var timeInterval = 0;
var penalty = 10;
var questionIndex = 0
var choicesList = document.createElement("ul");



var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
];


// Triggers timer on button and shows user a display of questions on the screen
startQuizEl.addEventListener("click", function ()
{
    if (timeInterval === 0)
    {
        timerEl.textContent = "Time: " + secondsLeft;

        timeInterval = setInterval(function ()
        {
            secondsLeft--;
            timerEl.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0)
            {
                clearInterval(timeInterval);
                timerEl.textContent = "Time's up!";
            }
        }, 1000);
    }
    startQuizEl.style.display = "none";
    render(questionIndex);
}
);

function processQuestion(newChoice)
{
    var listItem = document.createElement("li");
    listItem.textContent = newChoice;
    listItem.className = "li";
    codeQuestionsEl.appendChild(choicesList);
    choicesList.appendChild(listItem);
    listItem.addEventListener("click", (check));
}

// append quiz questionstimer
function render(param)
{
    codeQuestionsEl.innerHTML = "";
    choicesList.innerHTML = "";

    var questionTitle = questions[param].title;
    var questionChoices = questions[param].choices;
    codeQuestionsEl.textContent = questionTitle;
    codeQuestionsEl.className = "qchoices";

    // append quiz choices
    questionChoices.forEach(processQuestion)
}


// compare choices with answer
function check(event)
{
    var evaluation = document.createElement("div");

    if (event.target.matches("li"))
    {

        if (event.target.textContent == questions[questionIndex].answer)
        {
            score++
            evaluation.textContent = "Correct, the answer is " + questions[questionIndex].answer;
        }
        else
        {
            secondsLeft = secondsLeft - penalty;
            evaluation.textContent = "Incorrect, the correct answer is " + questions[questionIndex].answer;
        }
    }
    questionIndex++;
    if ((questionIndex) == questions.length)
    {
        codeQuestionsEl.innerHTML = "<h2>End of quiz! You received a score of  </h2>" + secondsLeft;

    }
    else
    {
        render(questionIndex);
    }

    codeQuestionsEl.appendChild(evaluation);
}