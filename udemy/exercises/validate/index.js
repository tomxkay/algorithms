// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

  // break case: test for invalid bst
  if (min !== null && node.data < min) {
    return false;
  }
  if (max !== null && node.data > max) {
    return false;
  }

  // recursively traverse the bst
  if (node.left && !validate(node.left, min, node.data)) {

    return false;
  }
  if (node.right && !validate(node.right, node.data, max)) {

    return false;
  }

  // if it hasn't failed by this point, it is a valid bst
  return true;
}




// function validate(node, min = null, max = null) {

//   // break case: test for invalid bst
//   if (min !== null && node.data < min) {
//     return false;
//   }
//   if (max !== null && node.data > max) {
//     return false;
//   }

//   // recursively traverse the bst
//   if (node.left) {

//     return validate(node.left, min, node.data);
//   }
//   if (node.right) {

//     return validate(node.right, node.data, max);
//   }

//   // if it hasn't failed by this point, it is a valid bst
//   return true;
// }

module.exports = validate;
