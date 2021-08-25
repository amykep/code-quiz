// the list of all the scores
// let initialsEl = document.querySelector("#initials");

// // retrive highscores from localstorag
// let scoresEl = localStorage.getItem("allscores");
// scoresEl = JSON.parse(allscores);

// // creat list with the scores and initials
// if (allscores !== null)
// {
//     for (i = 0; i < allscores.length; i++)
//     {
//         let liEl = document.createElement("li")
//         liEl.className = "li";
//         initialsEl.appendChid(liEl);
//     }
// }


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