function xmas(rows, upsideDown) {
  // The actual tree
  var tree = [];
  // Spaces to lead each row of asterisks
  var spaces = rows - 1;
  // Start out with the single asterisk atop the tree
  var asterisks = 1;
  // Build each row
  for(var i=0; i<rows; i++) {
    // First row is a single asterisk
    var row = "*";
    // Add a space to the front of the row...
    for(var j=0; j<spaces; j++) {
      row = " " + row;
    }
    // Then decrement the number of spaces to add next time
    spaces--;
    // For each asterisk/row
    for(var k=1; k<asterisks; k++) {
      // Add 2 asterisks to expand the tree
      row += "**";
    }
    // And increase the number of asterisks to add next time
    asterisks++;
    // Finally, add the finished row onto our tree array
    tree[tree.length] = row;
  }
  // Flip the tree if we sent the upsideDown argument to true on function call
  if (upsideDown) {
    tree.reverse();
  }
  // Print the tree to the console!
  for(var m=0; m<tree.length; m++) {
    console.log(tree[m]);
  }
};

// Make me a right-side up tree with 9 rows.
xmas(9, false);