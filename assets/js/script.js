// declare variables
let wrapperEl = document.querySelector("wrapper");
let timerEl = document.querySelector("#timer");
const codeQuestionsEl = document.querySelector("#quizquestions");
let qchoicesEl = document.querySelector("#qchoices");
let startQuizEl = document.querySelector("#startquiz");

let secondsLeft = 35;
let timeInterval = 0;
let penalty = 10;

// Triggers timer on button, shows user a display of questions on the screen
startQuizEl.addEventListener("click", function ()
{
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

    // }
    // render(questionIndex);
});

let questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parenthese'
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log'
    }
];





// append quiz questions
let questionIndex = function ()
{
    for (i = 0; i < questions.length; i++)
    {
        let questionTitle = questions[questionIndex].title;
        let questionChoices = questions[questionIndex].choices;

        // append quiz titles
        codeQuestionsEl.textContent = questionTitle;

        // append quiz choices
        questionChoices.forEach(function ()
        {
            let choicesList = document.createElement("ul");
            let listItem = document.createElement("li");
            listItem.textContent = newItem;
            listItem.className = "li";
            codeQuestionsEl.appendChild(choicesList);
            choicesList.appendChild(listItem);
            listItem.addEventListener("click", (compare));
        }
        )

        // compare choices with answer
        for (let i = o; i < questions.length; i++)
        {
            let questionTitleEl = document.createElement("questions.value")

        }
    }

    // create new li for every question choice
    let choicesLiEl = document.createElement("li");
    choicesLiEl.className = "li";
    codeQuestions.appendChild(choicesLiEl);
}