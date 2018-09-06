function depthFirstInOrder() {
  var data = [];
  var node = this.root;
  function traverse() {
    if (node.left) {
      traverse(node.left);
    }
    data.push(node);
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(node);
  return data;
}
