// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// let firstCard = 4;
// let secondCard = 10;

// 2. Create a variable, sum, and set it to the sum of the two cards

// let sum = firstCard + secondCard;
// console.log(sum);

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
// if (age <= 21) {
//     console.log("You can not enter the club!");
// } else {
//     console.log("Welcome!");
// }

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
// if (age < 100) {
//     console.log("Not elegible");
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!");
// } else {
//     console.log("Not elegible, you have already gotten one");
// }

//Loops in JS

// for (let i = 10; i<=100; i+=10){
//     console.log(i);
// }

// let cards_ = [7, 3, 9]

// // Create a for loop that logs out all the cards in the array
// // Use cards.length to specify how long the loop should run
// for (let i=0; i<cards_.length; i++){
//   console.log(cards_[i]);
// }

//-----------------------------BLACKJACK----------------------------//

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

// 1. Create a variable called isAlive and assign it to true
// 2. Flip its value to false in the appropriate code block

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

let start = document.getElementById("start-btn");
let cardsEl = document.querySelector("#cards");
let sumEl = document.querySelector("#sum");
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");

// let playerName = "Khushi";
// let playerChips = 145;
// playerEl.textContent = playerName + ": $" + playerChips

//Objects in JS
let player = {
  name: "Khushi",
  chips: 200
}
playerEl.textContent = player.name + ": $" + player.chips

// 2. Use getRandomCard() to set the values of firstCard and secondCard
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  // Generate two random numbers
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  // Create a for loop that renders out all the cards instead of just two
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum:  " + sum;

  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    messageEl.textContent = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "You're out of the game! 😭";
    isAlive = false;
  }
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
let newCardEl = document.getElementById("new-card-btn");

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    messageEl.textContent = "Drawing a new card from the deck!";
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = getRandomCard();
    cards.push(card);
    // 2. Add the new card to the sum variable
    sum += card;
    renderGame();
  }
}
