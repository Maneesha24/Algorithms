class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class StackArray {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if(!this.head.next){
      this.head = null;
      return;
    }
    this.head = this.head.next;
    this.length--;
}

module.exports = { Node, StackArray };
