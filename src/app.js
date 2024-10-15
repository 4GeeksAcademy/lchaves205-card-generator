/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Array of card suits
  let suits = ["♥", "♦", "♣", "♠"];

  // Array of card values
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

  // generate the random item
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let randomSuit = getRandomItem(suits);
  let randomValue = getRandomItem(values);

  //update card values in htlm
  document.querySelector(".card-title-heart").innerHTML = randomSuit;
  document.querySelector(".card-text-value").innerHTML = randomValue;
  document.querySelector(".card-title-heart2").innerHTML = randomSuit;

  //to change colors
  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector(".card-title-heart").style.color = "red";
    document.querySelector(".card-title-heart2").style.color = "red";
    document.querySelector(".card-text-value").style.color = "red";
  } else {
    document.querySelector(".card-title-heart").style.color = "black";
    document.querySelector(".card-title-heart2").style.color = "black";
    document.querySelector(".card-text-value").style.color = "black";
  }
};
