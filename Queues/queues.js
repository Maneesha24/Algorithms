class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enQueue(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
     this.tail= newNode;
    }
    return this.length++;
  }

  deQueue(){
    if(!this.head){
      return;
    }
    if(!this.head.next){
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
    return this.length--;

  }
}
