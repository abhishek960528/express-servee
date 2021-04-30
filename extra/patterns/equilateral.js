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

function printequilateral(rows) {
  var star = "";
  for (var i = 0; i < rows; i++) {
    var spaces = createSpaces(rows - i);
    star = addStar(star);
    console.log(spaces + star);
  }
}

const value = prompt("Enter the value : ");
if (value <= 10 && value >= 2) {
  console.log(`Desired Output :`);
  printequilateral(value);
} else {
  console.log("Please Enter value greater than 2 or less than 10");
}
