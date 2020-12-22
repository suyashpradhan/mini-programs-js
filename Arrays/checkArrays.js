//!Write a JavaScript function to check whether an `input` is an array or not

let checkArray = (input) => {
  if (Array.isArray(input)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkArray([1, 3, 5]));
console.log(checkArray("Suyash"));
console.log(checkArray(1));
