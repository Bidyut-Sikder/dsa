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

### Excels in Insertion and Deletion.

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
  //pop() //!todo: this pop mehtod pops out data from the begining .//this pop is not like the normal array pop mehtod.

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

## 4 Queue

### Excels in Insertion and Deletion.

## Usage

```js
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
```

## 5 Binary Search Tree (insert, find)

## Usage

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node();

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (current.value < value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  find(value) {
    let current = this.root;

    let found = false;
    while (current && !found) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }
  //tree traverse
  breadthFirst() {
    let current = this.root;
    let visited = [];
    let queue = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      visited.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }
  depthFirst() {
    //depth first pre order
    let current = this.root;
    let visited = [];
    function checking(node) {
      visited.push(node.value);
      if (node.left) checking(node.left);
      if (node.right) checking(node.right);
    }
    checking(current);
    return visited;
  }

  depthFirstPostOrder() {
    let current = this.root;
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(current);
    return visited;
  }
  depthFirstInorder() {
    let current = this.root;
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
}

const tree = new BinarySearchTree();

console.log(tree);
```

## 6 Binary Heap

## Usage

```js
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let elementIndex = this.values.length - 1;
    let element = this.values[elementIndex];
    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parant = this.values[parentIndex];

      if (element <= parant) break;
      this.values[elementIndex] = parant;
      this.values[parentIndex] = element;
      elementIndex = parentIndex;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();

    console.log(this.values);
    return max;
  }
  sinkDown() {
    let inx = 0;
    let element = this.values[0];
    let length = this.values.length;
    let leftChild;
    let rightChild;

    while (true) {
      let leftChildIndex = 2 * inx + 1;
      let rightChildIndex = 2 * inx + 2;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && element < rightChild) ||
          (swap !== null && leftChild < rightChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[inx] = this.values[swap];
      this.values[swap] = element;
      inx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(200);
//heap.insert(16);
console.log(heap);
```

## 7 Prority Queue

### severe prority starts from 1

## Usage

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(element, priority) {
    let newNode = new Node(element, priority);

    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let elementIndex = this.values.length - 1;
    let element = this.values[elementIndex];
    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parant = this.values[parentIndex];

      if (element.priority >= parant.priority) break;
      this.values[elementIndex] = parant;
      this.values[parentIndex] = element;
      elementIndex = parentIndex;
    }
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let inx = 0;
    let element = this.values[0];
    let length = this.values.length;
    let leftChild;
    let rightChild;

    while (true) {
      let leftChildIndex = 2 * inx + 1;
      let rightChildIndex = 2 * inx + 2;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && element.priority < rightChild.priority) ||
          (swap !== null && leftChild.priority < rightChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[inx] = this.values[swap];
      this.values[swap] = element;
      inx = swap;
    }
  }
}

let queue = new PriorityQueue();

queue.enqueue("common cold", 5);
queue.enqueue("faver ", 3);
queue.enqueue("corona ", 1);
queue.enqueue("flu ", 2);

console.log(queue.dequeue());
```

## 8 Hash Table

### A hash table is a data structure that stores key-value pairs in an array using a hash function to

## Usage

```js
class HashTable {
  constructor(size = 4) {
    this.mapKey = new Array(size);
  }

  _hashKey(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let charValue = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + charValue) % this.mapKey.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hashKey(key);

    if (!this.mapKey[index]) {
      this.mapKey[index] = [];
    }
    this.mapKey[index].push([key, value]);
  }
  get(key) {
    let index = this._hashKey(key);

    if (this.mapKey[index]) {
      for (let i = 0; i < this.mapKey[index].length; i++) {
        if (this.mapKey[index][i][0] === key) {
          return this.mapKey[index][i][1];
        }
      }
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.mapKey.length; i++) {
      if (this.mapKey[i]) {
        for (let j = 0; j < this.mapKey[i].length; j++) {
          if (!keys.includes(this.mapKey[i][j][0])) {
            keys.push(this.mapKey[i][j][0]);
          }
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.mapKey.length; i++) {
      if (this.mapKey[i]) {
        for (let j = 0; j < this.mapKey[i].length; j++) {
          if (!values.includes(this.mapKey[i][j][1])) {
            values.push(this.mapKey[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}

let ht = new HashTable();

ht.set("name", "bidyut");
ht.set("name", "bidyut");
ht.set("name", "bidyut");

ht.set("roll", "20");
ht.set("house", "tungipara");
ht.set("address", "salukha");
ht.set("phone", "011223234");

// ht.set('arr','roy')

// console.log(ht.values());
// console.log(ht.keys());

//console.log(ht);

console.log(ht);
```

## 9 Graphs

### A graph is a non-linear data structure consisting of nodes or vertices connected by edges. Each node may have multiple edges connected to it, and each edge may connect two nodes.

## Usage

```js
//adjacent list
class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacentList[vertex2].push(vertex1);
    this.adjacentList[vertex1].push(vertex2);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(
      (item) => item !== vertex2
    );

    this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(
      (item) => item !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacentList[vertex].length) {
      let otherVertex = this.adjacentList[vertex].pop();

      this.removeEdge(vertex, otherVertex);
    }
    delete this.adjacentList[vertex];
  }
  depthFirstItration(vertex) {
    let stack = [vertex];
    let result = [];
    let currentVertex;
    let visited = [];
    visited[vertex] = true;
    while (stack.length) {
      if (!vertex) return null;
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacentList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          stack.push(element);
        }
      });
    }
    return result;
  }
  depthFirstRecursion(vertex) {
    let result = [];
    let visited = [];
    let adjacentList = this.adjacentList;

    function recursion(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacentList[vertex].forEach((element) => {
        if (!visited[element]) {
          return recursion(element);
        }
      });
    }
    recursion(vertex);
    return result;
  }

  breadthFirstIteration(vertex) {
    let queque = [vertex];
    let result = [];
    let visited = [];
    let currentVertex;
    visited[vertex] = true;
    while (queque.length) {
      currentVertex = queque.shift();
      result.push(currentVertex);

      this.adjacentList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          queque.push(element);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// graph.removeVertex("india");
console.log(graph);
```

## 10 Dijkstra's Algorithm

### Dijkstra's algorithm is a well-known algorithm in graph theory for finding the shortest paths between nodes in a graph.

## Usage

```js
//dijkstr's algorithm

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    if (!this.values[val]) this.values.push({ val, priority });

    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class weightedGraph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacentList[vertex1].push({ node: vertex2, weight });
    this.adjacentList[vertex2].push({ node: vertex1, weight });
  }

  dijkstras(start, finish) {
    //starting point =A
    //ending point =E

    const nodes = new PriorityQueue();

    const distances = {};
    const previous = {};
    let smallest;
    let path = [];

    //build up initial state
    for (const vertex in this.adjacentList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //as long as there is somthing to visit

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      //  console.log(smallest)
      if (smallest === finish) {
        // console.log("done");

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        // console.log(this.adjacentList[smallest])
        for (const neighbor in this.adjacentList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacentList[smallest][neighbor];
          // calculate new distance to neiboring node
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            //updating new smallest deistance to neighbor
            distances[nextNode.node] = candidate;
            //updating previous -how we got to neigbhor

            previous[nextNode.node] = smallest;

            //enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    // return path
    return path.concat(smallest).reverse();
  }
}

const djk = new weightedGraph();

djk.addVertex("A");
djk.addVertex("B");
djk.addVertex("C");
djk.addVertex("D");
djk.addVertex("E");
djk.addVertex("F");

djk.addEdge("A", "B", 4);
djk.addEdge("A", "C", 2);
djk.addEdge("B", "E", 3);
djk.addEdge("C", "D", 2);
djk.addEdge("C", "F", 4);
djk.addEdge("D", "E", 3);
djk.addEdge("D", "F", 1);
djk.addEdge("E", "F", 1);

//console.log(djk.adjacentList['D']);
console.log(djk.dijkstras("A", "E"));
```

## 11 Dynamic Programming

### Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems, solving each subproblem only once, and storing the solutions to subproblems to avoid redundant computation.


## Usage

```js

//there are two ways of dynamic programming

//memoization
//tabulation

function fib(n) {
  if(n<=2)return 1
  return fib(n-1)+fib(n-2)
}

//memoization

//{ 0: 0, 1: 1, 2: 1 }
function fib(n, memo = {}) {
  if (memo[n]) return memo[n];

  if(n<=2) return 1

  let res = fib(n - 1, memo) + fib(n - 2, memo);

  console.log(memo);
  memo[n] = res;
  return res;
}

//tabulation //bottom -up approach

// function fib(n) {
//   if (n <= 2) return 1;

//   let arr = [0, 1, 1];

//   for (let i = 3; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   console.log(arr);
//   return arr[n];
// }

console.log(fib(100));


```
