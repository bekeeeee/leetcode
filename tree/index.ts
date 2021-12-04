class NodeOfTree<T> {
  value;
  left: NodeOfTree<T> | null;
  right: NodeOfTree<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: NodeOfTree<T> | null;
  constructor() {
    this.root = null;
  }
  insert(value: T) {
    var newNode = new NodeOfTree<T>(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (1) {
      if (value < current.value) {
        if (current.left === null) current.left = newNode;
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) current.right = newNode;
        current = current.right;
      } else return this;
    }
  }

  find(value: T) {
    var newNode = new NodeOfTree<T>(value);
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left === null) return false;

        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) return false;
        current = current.right;
      } else return current;
    }
  }
}

let tree = new BinarySearchTree<number>();
tree.insert(5);
tree.insert(7);
tree.insert(4);
tree.insert(2);

console.log(tree.find(43));
console.log(tree.find(5));
console.log(tree.find(7));
console.log(tree.find(4));
console.log(tree.find(2));

// console.log(tree);
