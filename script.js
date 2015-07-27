function xmas(rows, upsideDown) {
  var tree = [];
  var spaces = rows - 1;
  var asterisks = 1;
  for(var i=0; i<rows; i++) {
    var row = "*";
    for(var j=0; j<spaces; j++) {
      row = " " + row;
    }
    spaces--;
    for(var k=1; k<asterisks; k++) {
      row += "**";
    }
    asterisks++;
    tree[tree.length] = row;
  }
  if (upsideDown) {
    tree.reverse();
  }
  for(var m=0; m<tree.length; m++) {
    console.log(tree[m]);
  }
};

xmas(9, false);