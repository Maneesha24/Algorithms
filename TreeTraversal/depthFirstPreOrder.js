function depthFirstPreOrder() {
  var data = [];
  let node = this.root;

  function traverse(node) {
    data.push(node.val);
    if (node.length) {
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(node);
  return data;
}
