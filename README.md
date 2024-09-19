# Data Structures

## 1 Singly Linked List (push,traverse,pop,shift,unshift ,get, set,insert)

### A Singly Linked List is a linear data structure made up of nodes, where each node contains two parts [val,next]

### Head -> [Data | Next] -> [Data | Next] -> null

## Usage

```js
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
      current = current.next;
    }
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
  set(index, value) {
    let foundNode = this.get(index);
    console.log(foundNode);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
   insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);

    let current =previousNode.next //this.get(index);

    previousNode.next = newNode;
    newNode.next = current;

    this.length++;
    return true;
  }
}

let list = new singlyLinkedList();

list.push("bidyut");
list.push("hii");

list.push("hidi3232i");

list.pop();
list.pop();
list.pop();
list.push(2345);
list.push(23);
list.pop();
list.pop();
list.pop();
console.log(list);
```
