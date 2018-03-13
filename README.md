# Dice-Game

## *Overview*
This is a simple dice game created using vanilla JavaScript to update the DOM in real-time.

### *Game Rules*

1. The game consists of 2 players who take turns rolling dice.

1. In each turn, a player rolls the dice as many times as they wish. Each roll gets added to their *_ROUND_* score. However, if either of the player's dice are a 1, they will lose *_ALL_* of their *_ROUND_* score and the next player is up.

1. A player can choose to "Hold" their score at any point during their turn. This will push their current *_ROUND_* score into their *_TOTAL_* score and it becomes the next player's turn.

1. The only way a player's *_TOTAL_* score can be lost is if both dices are a 6 during a turn. The *_TOTAL_* score is reset to 0 and it is the next player's turn.

1. The players can choose what they want their target final score to be in the "Final Score" input field. If they do not specify a score, the game will be played to 100.

### Thanks for playing and enjoy the game!
