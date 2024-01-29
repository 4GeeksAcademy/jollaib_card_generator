/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let paloArray = ["♦", "♥", "♠", "♣"];
let cardValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let topPalo = document.getElementById("top-icon");
let bottomPalo = document.getElementById("bottom-icon");
let paloIcon = document.getElementsByClassName("palo");
let number = document.getElementById("number");

function randomCard() {
  let randomCardValue = Math.floor(Math.random() * 12);
  let randomPalo = Math.floor(Math.random() * 3);

  console.log(paloArray[randomPalo]);
  let i = 0;
  for (i = 0; i < paloIcon.length; i++) {
    paloIcon[i].textContent = paloArray[randomPalo];
  }
  if (topPalo.textContent == "♦" || topPalo.textContent == "♥") {
    topPalo.style.color = "red";
    bottomPalo.style.color = "red";
  } else {
    topPalo.style.color = "black";
    bottomPalo.style.color = "black";
  }
  number.textContent = cardValue[randomCardValue];
}

let startTimer = false;
let intervalId;

window.onload = function() {
  //write your code here
  randomCard();
};

let buttonChangeCard = document.getElementById("changeCardButton");
buttonChangeCard.addEventListener("click", function() {
  randomCard();
});

let buttonTimer = document.getElementById("timerButton");
buttonTimer.addEventListener("click", function() {
  startTimer = !startTimer;

  if (startTimer) {
    intervalId = setInterval(randomCard, 10000);
    buttonTimer.style.backgroundColor = "green";
    buttonTimer.textContent = "Stop Timer";
  } else {
    clearInterval(intervalId);
    buttonTimer.style.backgroundColor = "red";
    buttonTimer.textContent = "Start Timer";
  }
});

let pokerCard = document.getElementById("pokerCard");
pokerCard.style.height = 600 + "px";
pokerCard.style.width = 400 + "px";
let heightInput = document.getElementById("heightInput");
let widthInput = document.getElementById("widthInput");

heightInput.addEventListener("blur", function() {
  let heightInputValue = heightInput.value;
  pokerCard.style.height = heightInputValue + "px";
});

widthInput.addEventListener("blur", function() {
  let widthInputValue = widthInput.value;
  pokerCard.style.width = widthInputValue + "px";
});
