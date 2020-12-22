//!Write a JavaScript function to capitalize the first letter of a string.(eg : first sentence --> First sentence)

let firstCapitalLetter = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

console.log(firstCapitalLetter("suyash is noob"));
