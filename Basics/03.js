//!Write a JavaScript program to get the current date(dd-mm-yyyy, mm/dd/yyyy)

let dateObj = new Date("December 1 2020");
let date = dateObj.getDate();
let month = dateObj.getMonth() + 1;
let year = dateObj.getFullYear();

date = date < 10 ? "0" + date : date;
month = month < 10 ? "0" + month : month;

dateObj = date + "-" + month + "-" + year;
console.log(dateObj);

dateObj = date + "/" + month + "/" + year;
console.log(dateObj);

dateObj = month + "." + date + "." + year;
console.log(dateObj);
