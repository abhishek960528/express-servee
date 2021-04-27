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
printDiamond(10);
