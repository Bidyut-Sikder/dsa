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

//console.log(queue);
