//! Write a JavaScript function to clone an array

function cloneArray(arr) {
  return arr.slice(0);
}

console.log(cloneArray([1, 3, 5]));
console.log(cloneArray([1, 3, 10, 12]));
