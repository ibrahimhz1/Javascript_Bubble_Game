var clutter = "";
var timecount = 60;
var hitValue = 0;
var score = 0;

function makeBubbles() {
    for (var i = 1; i < 103; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function clearBubbles() {
    document.querySelector("#pbtm").innerHTML = "";
    clutter = "";
}

function runTimer() {
    var timeInterval = setInterval(function () {
        if (timecount > 0) {
            timecount--;
            document.getElementById("#timer").innerHTML = timecount;
        } else {
            clearTimeout(timeInterval);
            clearBubbles();

            var gameOverHTML = `<div class="gameOver"> <h2>Score : ${score}</h2> <h1>Game Over Buddy</h1> <button id="playAgain"> Play Again 😎 </button> </div>`
            document.querySelector("#pbtm").innerHTML = gameOverHTML;

            document.querySelector("#playAgain").addEventListener("click", function () {
                location.reload();
            })
        }
    }, 1000);
}

function getNewHit() {
    hitValue = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = hitValue;
}

function increaseScore() {
    score += 10;
    document.getElementById("#score").innerHTML = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var selectedValue = Number(dets.target.textContent);
    if (selectedValue == hitValue) {
        increaseScore();
        getNewHit();
        clearBubbles();
        makeBubbles();
    }
});

makeBubbles();
runTimer();
getNewHit();
