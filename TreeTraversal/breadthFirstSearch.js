function breadthFirstSearch() {
  const data = [];
  const queue = [];
  var node = this.root;
  queue.push(node);
  while (queue.length) {
    node = queue.shift();
    data.push(node);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.shift(node.right);
    }
  }
  return data;
}
