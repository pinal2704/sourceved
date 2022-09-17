'use strict';


//const player0El = document.querySelector('.player--0');
//const player1El = document.querySelector('.player--1');
//const diceEl = document.querySelector('.dice');
//const btnNew = document.querySelector('.btn--new');
//const btnRoll = document.querySelector('.btn--roll');
//const btnHold = document.querySelector('.btn--hold');

//const score0El = document.querySelector('#score--0');
//const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add('hidden');


//const diseEl = document.querySelector('.dice');
//const btnRoll = document.querySelector('.btn--roll');     


btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
        
});


//btnRoll.addEventListener('click', function () {

//    const dice = Math.trunc(Math.random()* 6) + 1;

//    console.log(dice);
//    console.log(diseEl.src);

//    //diseEl.src = `dice-${dise}.png`;
//    diseEl.src = `dice-${dice}.png`;
//    console.log(diseEl.src);


//});
