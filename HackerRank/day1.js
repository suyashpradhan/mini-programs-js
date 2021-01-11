/* 
!Complete the following functions in the editor below: getArea(length, width): Calculate and return the area of a rectangle having sides and .getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides and.
*/

/* function getArea(length, width) {
  return length * width;
}

function getPerimeter(length, width) {
  return 2 * (length + width);
}

console.log(getArea(3, 4.5));
console.log(getPerimeter(3, 4.5)); */

//!Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

//?Iterative Approach
function factorial(n) {
  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer = answer * i;
  }

  return answer;
}

//?Recursive Approach
function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));
console.log(factorialRecursive(6));

let user = {
  name: "Coder Jain",
};

let userList = [user];
user = null;

console.log(userList);
