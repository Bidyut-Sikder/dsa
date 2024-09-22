class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let popNode = this.tail;
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;
    }
    this.length--;
    return popNode;
  }

  shift() {
    let oldNode = this.head;
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldNode.next;
      oldNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldNode;
  }
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let current = this.head;

    if (index < this.length / 2) {
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, value) {
    let current = this.get(index);

    if (current != null) {
      current.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    (previousNode.next = newNode), (newNode.prev = previousNode);
    newNode.next = previousNode.next;
    previousNode.prev = newNode;

    this.length++;

    return true;
    // console.log(newNode);
  }
  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    let current = this.get(index);
    // console.log(current);
    let previousNode = current.prev;
    let nextNode = current.next;

    previousNode.next = nextNode;
    nextNode.prev = previousNode;



  }
}

let list = new DoublyLinkedList();

list.push("9");
list.push("99");
list.push("100");
list.push("107");

console.log(list.remove(1));
console.log(list);














