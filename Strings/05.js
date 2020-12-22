//! Write a JavaScript function to extract a specified number of characters from a string (Suyash Pradhan) ---> Suyash P

let strFunction = (input) => {
  let arr = input.trim().split(" ");
  let word = arr[0] + " " + arr[1].substr(0, 1) + ".";
  return word;
};
console.log(strFunction("Suyash Pradhan"));
