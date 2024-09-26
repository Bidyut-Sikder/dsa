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
}

let heap = new MaxBinaryHeap();
heap.insert(200);
//heap.insert(16);
console.log(heap);
