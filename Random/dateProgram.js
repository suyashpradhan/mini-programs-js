//!Write a JavaScript program to calculate days left until next Christmas.

function nextChristmas() {
  let christmasDate = new Date(
    "December 25 2021 GMT+0530 (India Standard Time)"
  );
  let christmasHr = christmasDate.getHours();

  let currentDate = new Date();

  console.log(christmasHr);
}

nextChristmas();
