var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

document.querySelector(".btn-roll").addEventListener("click", function() {

  // 1. Random Number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display Result

  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block"
  diceDOM.src = "./assets/images/dice-" + dice + ".png";

  // 3. Update the round score IF the dice was NOT a 1
  if (dice !== 1) {
    // Add Score
    document.querySelector("#current-" + activePlayer).textContent = dice;
    roundScore += dice;
  } else {
    // Next Player
    document.querySelector("#current-" + activePlayer).textContent = 0;
  }

});
