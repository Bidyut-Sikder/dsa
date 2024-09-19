class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    //*traverse means itarating through all elements
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;

    this.length--;
    if (this.head === null) {
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    // console.log(this.head);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (this.length < index || index < 0) return null;
    let counter = 0;
    let current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }
}

let list = new singlyLinkedList();
list.push("bidyut");
list.push("sajeeb");
list.push("rajeeb");

//list.unshift("sikder");

// list.unshift("nalu");

//list.traverse();
//list.shift();
//list.shift();
// list.shift();

console.log(list.get(1));

//console.log(list);
