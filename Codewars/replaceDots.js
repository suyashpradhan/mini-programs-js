//!The code provided is supposed replace all the dots . in the specified String str with dashes -

//^ Test Cases
//^ Fix the bug so we can all go home early.

//?String str will never be null.

function replaceDots(str) {
  return str.split(".").join("-");
}

console.log(replaceDots("one.two.three"));
