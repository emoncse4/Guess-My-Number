'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (value) {
  document.querySelector('.number').textContent = value;
};

const backgroundColor = function (value) {
  document.querySelector('body').style.backgroundColor = value;
};

const displayWidth = function (value) {
  document.querySelector('.number').style.width = value;
};

const displayScore = function (value) {
  document.querySelector('.score').textContent = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayNumber(secretNumber);
    backgroundColor('#60b347');
    displayWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  displayWidth('15rem');
});
