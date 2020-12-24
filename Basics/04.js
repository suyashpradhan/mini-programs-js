//!Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

let areaFunction = (one, two, three) => {
  let perimeter = (one + two + three) / 2;
  let area = Math.sqrt(
    perimeter * (perimeter - one) * (perimeter - two) * (perimeter - three)
  );

  return area;
};

console.log(areaFunction(5, 6, 7));
