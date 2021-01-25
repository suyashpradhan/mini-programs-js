//!Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

let input = document.querySelector("#input");
let button = document.querySelector("#button");
let luckyNumber = 7;

button.addEventListener("click", (e) => {
  e.preventDefault();

  let userInput = parseInt(input.value);

  if (userInput === luckyNumber) {
    (document.querySelector("#display").innerHTML =
      "YAY!! you guessed the right number"),
      userInput;
  } else {
    (document.querySelector("#display").innerHTML = "Wrong Guess, Try again"),
      userInput;
  }

  userInput = "";
});
