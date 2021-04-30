const prompt = require("prompt-sync")();

function createSpaces(space) {
  var spaces = "";
  for (i = 1; i < space; i++) {
    spaces += " ";
  }
  return spaces;
}

function addStar(addstar) {
  return (addstar += "* ");
}

function removeStar(removestar) {
  return removestar.substring(0, removestar.length - 2);
}

function printDiamond(rows) {
  var width = rows / 2;

  var star = "";
  for (var i = 0; i < width; i++) {
    var spaces = createSpaces(width - i);
    star = addStar(star);
    console.log(spaces + star);
  }

  console.log(spaces + star);

  for (var i = width - 2; i >= 0; i--) {
    var spaces = createSpaces(width - i);
    star = removeStar(star);
    console.log(spaces + star);
  }
}

const value = prompt("Enter the your desired value  : ");
if (value <= 10 && value >= 2) {
  console.log(`Your desired Output :`);
  printDiamond(value);
} else {
  console.log("Please Enter value greater than 2 or less than 10");
}
