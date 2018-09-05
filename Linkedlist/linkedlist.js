class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  unShift(data) {
    const node = new Node(data);
    var initialHead = this.head;
    if (!this.head) {
      this.head = node;
    }
    node.next = initialHead;
    this.head = node;
  }

  size(){
    let counter = 0;
    let node = this.head;
    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }

  clear(){
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
