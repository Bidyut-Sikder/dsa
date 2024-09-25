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
    let newNode = new Node(value);

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
    return current
   
  }
}

const tree = new BinarySearchTree();

tree.insert(20);
tree.insert(34);
tree.insert(18);
tree.insert(16);

