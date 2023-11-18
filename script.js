"use strict";

// State variables
let count = 5;
let playersGuess;
let playersGuessValue;
let playersGuessArray = [];
let computersNumber = Math.floor(Math.random() * 100) + 1;
console.log(computersNumber);

// Element variables
let countEl = document.querySelector("#count");
let instructionsMessage = document.querySelector("#instructions-message");
let previousGuessesEl = document.querySelector("#previous-guesses");
let faceEl = document.querySelector("#face");
let formContainerEl = document.querySelector(".form-container");
let submitButton = document.querySelector("#button");
let playersGuessInput = document.querySelector("#players-guess-number");
let playAgainButtonEl = document.querySelector(".playAgainButton");

// Logic
function checkGuess() {
  playersGuessValue = Number(playersGuessInput.value);
  playersGuessArray.push(playersGuessValue);

  if (playersGuessValue === computersNumber) {
    instructionsMessage.innerHTML =
      "That was the correct number. I guess that means you win or something..";
    faceEl.innerHTML = "¬_¬";
    faceEl.classList.toggle("face-animated");
    formContainerEl.classList.toggle("form-container-hidden");
    playAgainButtonEl.classList.toggle("playAgainButton-show");
  } else if (playersGuessValue > computersNumber) {
    instructionsMessage.innerHTML = "That was too high. Guess something lower!";
    count -= 1;
  } else if (playersGuessValue < computersNumber) {
    instructionsMessage.innerHTML = "That was too low. Guess something higher!";
    count -= 1;
  }

  countEl.innerHTML = `Guesses left: ${count}`;

  if (count <= 0) {
    instructionsMessage.innerHTML = `You lost... And I win!! The number I was thinking of was ${computersNumber}.`;
    faceEl.innerHTML = "¬‿¬";
    faceEl.classList.toggle("face-animated");
    formContainerEl.classList.toggle("form-container-hidden");
    playAgainButtonEl.classList.toggle("playAgainButton-show");
  }

  previousGuessesEl.innerHTML = `Previous guesses: ${playersGuessArray.join(
    ", "
  )}`;
}

// Event listener
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  checkGuess();
});

playAgainButtonEl.addEventListener("click", function () {
  window.location.reload();
});
