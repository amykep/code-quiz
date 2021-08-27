// goback button
let goBackEl = document.querySelector("#goback");
goBackEl.addEventListener("click", function ()
{
    location.replace("./index.html");
}
);

// clear highscores button
let clearEl = document.querySelector("#clear");
clearEl.addEventListener("click", function ()
{

    localStorage.clear();
    location.reload();
}
);

// Retreives local stroage 
var highScore = document.querySelector("#highScore");
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null)
{
    for (var i = 0; i < allScores.length; i++)
    {

        var createLi = document.createElement("li");
        createLi.setAttribute("id", "highscore");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}