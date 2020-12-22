//! Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

let dashedArray = (input) => {
  let stringedArray = input.toString();
  let result = [stringedArray];
  return result;
};

console.log(dashedArray(214567));
