/* 
! Calculate area and perimeter of circle using let and const
*/

function main() {
  const PI = 3.14;
  let r = 4;

  let area = PI * r * r;
  console.log("Area is: ", area);

  let perimeter = 2 * PI * r;
  console.log("Perimeter is: ", perimeter);
}

main();

/*
!Complete the getGrade(score) function in the editor. It has one parameter: an integer *score*. It must return the letter corresponding grades
*/

function grades(grade) {
  return "FEDCBA"[Math.ceil(parseInt((grade > 0 ? grade - 1 : 0) / 5))];
}

console.log(grades());

/**
 * ! Search special character inside a string using if else
 *
 */
