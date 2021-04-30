function createSpaces(n) {
  var spaces = "";
  for (i = 1; i < n; i++) {
    spaces += " ";
  }

  return spaces;
}

function addStar(s) {
  return (s += "* ");
}

function removeStar(s) {
  return s.substring(0, s.length - 2);
}

function printequilateral(rows) {
  var star = "";
  for (var i = 0; i < rows; i++) {
    var spaces = createSpaces(rows - i);
    star = addStar(star);
    console.log(spaces + star);
  }
}
export default printequilateral;
