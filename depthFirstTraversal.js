/*
Pre-Order
Process the node, then recursively call the ethod on the left subtree,
and then the right subtree.
*/

const preorderTraverse = (node, array) => {
  array.push(node.value)
  if (node.left) {
    preorderTraverse(node.left, array);
  }
  if (node.right) {
    preorderTraverse(node.right, array);
  }
  return array;
};

/*
In-Order
Recursively call the method on the left subtree, then process the node,
and then call the method on the right subtree.
*/

const inorderTraverse = (node, array) => {
  if (node.left) {
    inorderTraverse(node.left, array);
  }
  array.push(node.value);
  if (node.right) {
    inorderTraverse(node.right, array);
  }
  return array;
};

/*
Post-Order
Recursively call the method on the left subtree, then call the method on the
right subtree, and then process the node.
*/

const postorderTraverse = (node, array) => {
  if (node.left) {
    postorderTraverse(node.left, array);
  }
  if (node.right) {
    postorderTraverse(node.right, array);
  }
  array.push(node.value);
  return array;
};
