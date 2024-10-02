//adjacent matrix
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

  //travese

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


breadthFirstIteration(vertex){


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

// console.log(graph.depthFirstItration("A"));
  //console.log(graph.depthFirstRecursion("A"));
console.log(graph.breadthFirstIteration("A"));

// console.log(graph);
