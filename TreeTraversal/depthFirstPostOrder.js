function depthFirstPostOrder(){
  var data = [];
  var node = this.root;
  function traverse(){
    if(node.left){
      traverse(node.left);
    }
    if(node.right){
      traverse(node.right);
    }
    data.push(node.value);
  }
  traverse(node);
  return data;
}
