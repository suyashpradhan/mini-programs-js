//!Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

//^ Test Cases

//* 90 <= score <= 100   'A'
//* 80 <= score < 90     'B'
//* 70 <= score < 80     'C'
//* 60 <= score < 70	 'D'
//* 0 <= score < 60      'F'

//? Constraints
//? Test.assertEquals(getGrade(95,90,93), 'A')
//? Test.assertEquals(getGrade(100,85,96), 'A')

//? Test.assertEquals(getGrade(70,70,100), 'B')
//? Test.assertEquals(getGrade(82,85,87), 'B')

//? Test.assertEquals(getGrade(70,70,70), 'C')
//? Test.assertEquals(getGrade(75,70,79), 'C')

//? Test.assertEquals(getGrade(65,70,59), 'D')
//? Test.assertEquals(getGrade(66,62,68), 'D')

//? Test.assertEquals(getGrade(44,55,52), 'F')
//? Test.assertEquals(getGrade(48,55,52), 'F')

function getGrade(s1, s2, s3) {
  let grade = Math.floor((s1 + s2 + s3) / 3).toFixed(2);

  if (grade >= 90 && grade <= 100) {
    return "A";
  } else if (grade >= 80 && grade <= 90) {
    return "B";
  } else if (grade >= 70 && grade <= 80) {
    return "C";
  } else if (grade >= 60 && grade <= 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(44, 55, 52));
