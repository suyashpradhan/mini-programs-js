//! Calculate mean of an array and return the average rounded down to its nearest integer

function getAverage(marks) {
  let total = 0;

  marks.forEach((item) => {
    total += item;
  });
  return Math.floor(total / marks.length);
}

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
