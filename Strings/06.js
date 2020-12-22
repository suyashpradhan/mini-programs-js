//! Write a JavaScript function to hide email addresses to protect from unauthorized user (eg john_doe@example.com = john...@example.com)

let strFunction = (input) => {
  let splittedText = input.trim().split("@");
  let initials;
  initials = splittedText[0].substring(
    0,
    splittedText[0].length - splittedText[0].length / 2
  );
  return initials + "...@" + splittedText[1];
};
console.log(strFunction("suyashpradhan07@gmail.com"));
