//!Write a JavaScript function to parameterize a string (eg. john doe is a software developer --> john-doe-is-a-software-developer)

let parameterizeFunction = (input) => {
  let str = input.trim().split(" ");
  let result = str.join("-").toLowerCase();
  return result;
};

console.log(parameterizeFunction("John Doe is a software developer"));
