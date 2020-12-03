'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const message = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    message('No Number!');

    // when player guesses correct number
  } else if (guess === secretNum) {
    message('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNum;

    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;

    // when the guess is not the same as the secret number
  } else if (guess !== secretNum) {
    if (score > 1) {
      message(guess > secretNum ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('You Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//  When again button is clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  message('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
