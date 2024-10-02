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
}

let graph = new Graph();

graph.addVertex("bd");
graph.addVertex("india");
graph.addVertex("us");
graph.addVertex("uk");

graph.addEdge("bd", "india");
graph.addEdge("bd", "us");
graph.addEdge("india", "us");
graph.addEdge("india", "uk");

 // graph.removeVertex("india");
  //console.log(graph);
