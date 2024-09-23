# Data Structures

## 1 Singly Linked List (push,traverse,pop,shift,unshift ,get, set,insert,remove ,reverse)

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

    let current = previousNode.next; //this.get(index);

    previousNode.next = newNode;
    newNode.next = current;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) return this.shift(index);
    if (index === this.length) return this.pop(index);

    let previousNode = this.get(index - 1);
    let currentNode = previousNode.next;

    previousNode.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let previous = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;

      node.next = previous;

      previous = node;
      node = next;
    }
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

## 2 Doubly Linked List (push,pop,shift,set,insert,remove )

### A Doubly Linked List (DLL) is a type of linked data structure that consists of nodes, where each node has references to both its previous and next nodes. This allows traversal in both directions (forward and backward), unlike a singly linked list, which only allows forward traversal.

## Usage

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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
   
    let previousNode = current.prev;
    let nextNode = current.next;

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
  }
}

let list = new singlyLinkedList();

list.push("bidyut");

console.log(list);
```
## 3 Stack 



## Usage

```js
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
```