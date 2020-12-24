//!Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

str = "The Quick Brown Fox";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let result = [];

for (let x = 0; x < str.length; x++) {
  if (upper.indexOf(str[x]) !== -1) {
    result.push(str[x].toLowerCase());
  } else if (lower.indexOf(str[x]) !== -1) {
    result.push(str[x].toUpperCase());
  } else {
    result.push(str[x]);
  }
}

console.log(result.join(""));
