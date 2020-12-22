//! Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

let returnElements = (input, index) => {
  if (index == null) {
    return input[0];
  } else {
    return input.slice(0, index);
  }
};

console.log(returnElements([1, 4, 7, 10], -1));
