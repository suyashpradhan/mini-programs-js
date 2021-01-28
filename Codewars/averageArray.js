//!Write a function which calculates the average of the numbers in a given list.

function average(array) {
  let sum = 0;
  let avg;
  for (const iterator in array) {
    sum += array[iterator];
    avg = sum / array.length;
  }

  return avg.toFixed(2);
}

console.log(average([1, 2, 3, 4]));
