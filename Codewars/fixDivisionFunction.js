//!This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

//TODO: TEST CASES

//* assert.strictEqual(solve(2, 1), 2);
//* assert.strictEqual(solve(2, 4), 0.5);
//* assert.strictEqual(solve(42, 0), Infinity);
//* assert.strictEqual(solve(0, 8), 0);
//* assert.strictEqual(solve(7, 2), 3.5);
//* assert.strictEqual(solve(4.2, 1), 4.2);
//* assert.strictEqual(solve(9999, 11), 909);

const solve = (x, y) => {
  if (y > x) {
    return y;
  } else if (y === 0) {
    return y;
  } else {
    return x / y;
  }
};

console.log(solve(2, 4));
