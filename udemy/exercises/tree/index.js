// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree




// breadth first vs. depth first traversal

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // add root node to array
    const arr = [this.root];

    while (arr.length) {
      // remove the node at index 0
      const node = arr.shift();

      // add its children nodes to the array
      // arr.concat(node.children);
      arr.push(...node.children);

      // call the fn passing in node
      // which ultimately will traverse through 
      // all of the nodes
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];

    // the difference b/t bredth first v. depth first traversal
    // is bredth first add the node's children node to the end of the array
    // and depth first add thenode's children node to the start of the array.
    
    while (arr.length) {
      const node = arr.shift();
      
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
