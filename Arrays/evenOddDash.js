//! Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

let dashedArray = (input) => {
  let stringedArray = input.toString();
  let result = [stringedArray[0]];

  for (let x = 1; x < stringedArray.length; x++) {
    if (stringedArray[x - 1] % 2 === 0 && stringedArray[x] % 2 === 0) {
      result.push("-", stringedArray[x]);
    } else {
      result.push(stringedArray[x]);
    }
  }
  console.log(result.join(""));
};

console.log(dashedArray(1455768));
