'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

//Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const resetGame = function () {
    score0.textContent = 0;
    score1.textContent = 0;
    dice.classList.add('hidden');
}
newGame.addEventListener('click', function () {
    resetGame();
});

const swapPlayers = function () {
    if (player1.classList.contains = 'player--active') {
        player1.classList.remove = 'player--active';
        player2.classList.add = 'player--active';
    } else {
        player2.classList.remove = 'player--active';
        player1.classList.add = 'player--active';

    }
}

rollDice.addEventListener('click', function () {
        const diceRoll = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${diceRoll}.png`
        console.log(diceRoll);

        //Implementing rule of 1; if true switch player else add to the current score 
        if (diceRoll !== 1) {
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            // if (activePlayer !== 0) {
            //     player2.classList.add('player--active');
            //     player1.classList.remove('player--active');
            // } else {
            //     player1.classList.add('player--active');
            //     player2.classList.remove('player--active');

            player1.classList.toggle('player--active');
            player2.classList.toggle('player--active');

        };
    }


);
// score0.textContent = number;
// dice.classList.remove('hidden');
// if (number === 1) {
//     dice.src = 'dice-1.png';
// } else if (number === 2) {
//     dice.src = 'dice-2.png';

// } else if (number === 3) {
//     dice.src = 'dice-3.png';

// } else if (number === 4) {
//     dice.src = 'dice-4.png';

// } else if (number === 5) {
//     dice.src = 'dice-5.png';

// } else {
//     dice.src = 'dice-6.png';
// }