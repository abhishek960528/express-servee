const prompt = require("prompt-sync")();

const createSpaces = (space) => {
  let spaces = "";
  for (initial = 1; initial < space; initial++) {
    spaces += " ";
  }
  return spaces;
};

const addStar = (addstar) => {
  return (addstar += "* ");
};

const removeStar = (removestar) => {
  return removestar.substring(0, removestar.length - 2);
};

const printDiamond = (rows) => {
  let width = rows / 2;

  let star = "";
  for (let initial = 0; initial < width; initial++) {
    let spaces = createSpaces(width - initial);
    star = addStar(star);
    console.log(spaces + star);
  }

  console.log(spaces + star);

  for (let initial = width - 2; initial >= 0; initial--) {
    let spaces = createSpaces(width - initial);
    star = removeStar(star);
    console.log(spaces + star);
  }
};

const value = prompt("Enter the your desired value  : ");
if (value <= 10 && value >= 2) {
  console.log(`Your desired Output :`);
  printDiamond(value);
} else {
  console.log("Please Enter value greater than 2 or less than 10");
}
