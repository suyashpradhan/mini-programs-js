//!Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

//^ If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.Note: there will always be exactly one wolf in the array.

//* Test.assertEquals(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Oi! Sheep number 2! You are about to be eaten by a wolf!");
//*  Test.assertEquals(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
//* Test.assertEquals(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
//*  Test.assertEquals(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
//*  Test.assertEquals(warnTheSheep(["sheep", "sheep", "wolf"]),"Pls go //* away and stop eating my sheep"

function warnTheSheep(queue) {
  let storedValue;
  let reversedArr = queue.reverse();
  reversedArr.forEach((item, index) => {
    if (item.includes("wolf") && reversedArr[0] === "wolf") {
      console.log("Pls go away and stop eating my sheep");
    } else if (item.includes("wolf") && reversedArr.includes("sheep")) {
      storedValue = index;
      console.log(storedValue);
    }
  });
}

warnTheSheep(["sheep", "wolf", "sheep"]);
