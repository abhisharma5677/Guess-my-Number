'use strict';

let score = 50;
let highscore = 0;
let magicNumber = Math.trunc(Math.random() * 50) + 1;

document.querySelector('.check').addEventListener('click', function () {
  //guessing the number
  let myNumber = Number(document.querySelector('.guess').value);

  //if nothing has been entered
  if (myNumber === 0) {
    document.querySelector('.message').textContent =
      '😒OOPS nothing has been entered';
  }

  //if guess is correct
  else if (myNumber === magicNumber) {
    document.querySelector('.message').textContent =
      '🥳🥳Bravo U guessed it right...';

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = magicNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //if guess is too high
  else if (myNumber > magicNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈📈TOO HIGH.....';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭You lost the game...';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = '0';
    }
  }

  //if guess too low
  else if (myNumber < magicNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉TOO LOW.....';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭You lost the game...';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = '0';
    }
  }
});

//functionality of AGAIN button.......

document.querySelector('.again').addEventListener('click', function () {
  score = 50;

  magicNumber = Math.trunc(Math.random() * 50) + 1;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;
});
