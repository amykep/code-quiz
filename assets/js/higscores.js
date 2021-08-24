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