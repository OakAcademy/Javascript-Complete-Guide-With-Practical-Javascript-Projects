'use strict';

// console.log(document.querySelector('.info-text').textContent);

// document.querySelector('.info-text').textContent =
//   'Great, you found the number!';

// document.querySelector('.label-number').textContent = 2;
// document.querySelector('.value-score').textContent = 32;
// document.querySelector('.input-number').value = 15;
// console.log('input value', document.querySelector('.input-number').value);

let hiddenNumber = Math.trunc(Math.random() * 50) + 1;
let scoreValue = 50;
let highScoreValue = 0;

const showInfoText = infoText => {
  document.querySelector('.info-text').textContent = infoText;
};

document.querySelector('.guess').addEventListener('click', function () {
  // console.log(document.querySelector('.input-number').value);
  const inputValue = Number(document.querySelector('.input-number').value);
  console.log(inputValue, typeof inputValue);

  // NO INPUT VALUE
  if (!inputValue) {
    showInfoText('There is no input value!');

    // WIN
  } else if (inputValue === hiddenNumber) {
    document.querySelector('.label-number').textContent = hiddenNumber;
    showInfoText('Great, you found the number!');

    document.querySelector('.label-number').style.backgroundColor = '#00EB1D';
    document.querySelector('.label-number').style.scale = '1.3';

    if (scoreValue > highScoreValue) {
      highScoreValue = scoreValue;
      document.querySelector('.highscore').textContent = highScoreValue;
    }

    // INPUT WRONG
  } else if (inputValue !== hiddenNumber) {
    if (scoreValue > 1) {
      scoreValue--;
      document.querySelector('.value-score').textContent = scoreValue;
      showInfoText(
        `No, number is too ${inputValue > hiddenNumber ? 'high' : 'low'}!`
      );
    } else {
      document.querySelector('.value-score').textContent = 0;
      showInfoText('Lost!');
    }

    // INPUT TOO HIGH
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  scoreValue = 50;
  hiddenNumber = Math.trunc(Math.random() * 50) + 1;

  showInfoText("Let's enter a number...");
  document.querySelector('.value-score').textContent = scoreValue;
  document.querySelector('.label-number').textContent = '?';
  document.querySelector('.input-number').value = '';
  document.querySelector('.label-number').style.backgroundColor = '#ddd';
  document.querySelector('.label-number').style.scale = '1';
});
