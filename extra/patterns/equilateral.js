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

const printequilateral = (rows) => {
  let star = "";
  for (let initial = 0; initial < rows; initial++) {
    let spaces = createSpaces(rows - initial);
    star = addStar(star);
    console.log(spaces + star);
  }
};

const value = prompt("Enter the value : ");
if (value <= 10 && value >= 2) {
  console.log(`your desired Output :`);
  printequilateral(value);
} else {
  console.log("Please Enter value greater than 2 or less than 10");
}
