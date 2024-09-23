//Stack

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //push() //!todo: this push mehtod pushes data to the begining like unshift.
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let node = this.first;
      this.first = newNode;
      this.first.next = node;
    }

    this.size++;
  }
  //pop() //!todo: this pop mehtod pops out data from the end .

  pop() {
    if (!this.first) return null;

    let poppedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = poppedNode.next;
    this.size--;
    return poppedNode.val;
  }
}

const stack = new Stack();

stack.push("bidyut");
stack.push("sikder");
stack.push("tonmoy");
stack.push("kumar");
console.log(stack.pop());

//console.log(stack);
