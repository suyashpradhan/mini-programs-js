//!You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around! Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail). Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

//? Test.describe("Basic tests",_=>{
//? Test.assertSimilar(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
//? Test.assertSimilar(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
//? Test.assertSimilar(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
//? Test.assertSimilar(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
//? Test.assertSimilar(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);

function fixTheMeerkat(arr) {
  let newArr = [];

  let storedValue = arr.pop();
  let storedValue2 = arr.pop();
  let storedValu3 = arr.pop();
  newArr.push(storedValue, storedValue2, storedValu3);

  /* return [arr[2], arr[1], arr[0]]; */
}

console.log(fixTheMeerkat(["tail", "body", "head"]));
