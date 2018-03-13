var scores, roundScore, activePlayer, isPlaying;

init();

var lastDice;

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isPlaying) {
    // 1. Random Number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display Result
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
    document.getElementById("dice-1").src = "./assets/images/dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "./assets/images/dice-" + dice2 + ".png";


    // 3. Update the round score IF both dices WERE NOT a 1 AND reset total score if both dices WERE a 6
    if (dice1 === 6 && dice2 === 6) {
      //player loses score
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = '0';
      nextPlayer();
    } else if (dice1 !== 1 && dice2 !== 1) {
      // Add score
      roundScore += dice1 + dice2;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      // Next Player
      nextPlayer();
    }
  };
});


document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isPlaying) {
    // Add current score to the player's global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    var userScoreInput = document.querySelector(".final-score").value;
    var winningScore;

    // Check to see if user changed the final score
    // Undefined, 0, null, or "" are coerced to false
    // Anything else is coerced to true
    if (userScoreInput) {
      winningScore = userScoreInput;
    } else {
      winningScore = 100;
    }

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.getElementById("name-" + activePlayer).textContent = "WINNER!";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      isPlaying = false;
    } else {
      // Switch to next Player
      nextPlayer();
    };
  };
});

function nextPlayer() {
  document.getElementById("current-" + activePlayer).textContent = "0";
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.getElementById("dice-1").style.display = "none ";
  document.getElementById("dice-2").style.display = "none";

};

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  isPlaying = true;

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
