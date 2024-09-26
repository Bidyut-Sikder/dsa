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
    console.log("fd");
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
//heap.insert(200);
//heap.insert(16);
heap.extractMax();
console.log(heap);
