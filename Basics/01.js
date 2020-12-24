//!Write a JavaScript program to display the current day and time in the following format.

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();

console.log("Today is", days[day]);
console.log(`Time is ${hour}: ${minute}: ${seconds}`);
