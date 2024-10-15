/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  // iconos
  let suits = ["♥", "♦", "♣", "♠"];

  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // random item
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // random icon and alue
  let randomSuit = getRandomItem(suits);
  let randomValue = getRandomItem(values);

  // Uupdate html
  document.querySelector(".card-title-heart").innerHTML = randomSuit;
  document.querySelector(".card-text-value").innerHTML = randomValue;
  document.querySelector(".card-title-heart2").innerHTML = randomSuit;

  // color change
  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector(".card-title-heart").style.color = "red";
    document.querySelector(".card-title-heart2").style.color = "red";
    document.querySelector(".card-text-value").style.color = "red";
  } else {
    document.querySelector(".card-title-heart").style.color = "black";
    document.querySelector(".card-title-heart2").style.color = "black";
    document.querySelector(".card-text-value").style.color = "black";
  }

  // input values manually
  let cardWidth = document.getElementById("widthInput").value || 18;
  let cardHeight = document.getElementById("heightInput").value || 400;

  // update card with value size
  document.querySelector(".card").style.width = cardWidth + "rem";
  document.querySelector(".card").style.height = cardHeight + "px";
}

window.onload = function() {
  generateCard();

  // button add
  document
    .getElementById("generateCardButton")
    .addEventListener("click", generateCard);

  // timer add
  setInterval(generateCard, 10000);
};
