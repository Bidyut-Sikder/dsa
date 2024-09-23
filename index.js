//Queues

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    let removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;
    --this.size;
    return removedNode;
  }
}

//[1,2,3,4]

let queue = new Queue();

queue.enqueue("bidyut");
queue.enqueue("sikder");
queue.enqueue("roy");

console.log(queue.dequeue());
