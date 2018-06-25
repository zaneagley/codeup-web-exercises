(function () {



    // Utilizing multiple selectors for reference and variety testing.

var p1Button = document.querySelector("#player1Increase");  // Player 1 and 2 buttons to
var p2Button = document.getElementById("player2Increase");  // increase score.
var p1Score = 0; // Starting Score
var p2Score = 0;
var p1ScoreDisplay = document.querySelector("#p1Display");  // Player 1 and 2 Total
var p2ScoreDisplay = document.querySelector("#p2Display");  // Score Numbers
var gameover = false;
var resetButton = document.getElementById("reset");         // Resets the total score and game.
var scoreRequiredToWin = document.querySelector("input[type='number']");  //Allows adjustment of total winning score.
var winningScore = 5; //Default Winning Score
var winningScoreNumDisplay = document.getElementById("scoreNum");  // Displays the score to win number.




p1Button.addEventListener("click", function () {

    if (!gameover) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("win");
            console.log("Game Over.  Player 1 wins!!");
            gameover = true;
        }
        p1ScoreDisplay.textContent = p1Score;
    }

});

p2Button.addEventListener("click", function () {
    if (!gameover) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("win");
            console.log("Game Over.  Player 2 wins!!");
            gameover = true;
        }
        p2ScoreDisplay.textContent = p2Score;
    }
});

resetButton.addEventListener("click", reset);



function reset() {
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove("win");
    p2ScoreDisplay.classList.remove("win");
    gameover = false;
}



scoreRequiredToWin.addEventListener("change", function () {
    winningScoreNumDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})




})();