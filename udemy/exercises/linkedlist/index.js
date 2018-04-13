// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while(node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while(node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {

    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while(node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // the list is not empty
      last.next = new Node(data);
    } else {
      // list is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while(node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    
    return null;
  }

}

const list = new LinkedList();
const nodeOne = new Node(1);

list.head = nodeOne;

list.insertFirst(7);
list.insertFirst(6);
list.insertFirst(9);

console.log(list.size());
console.log(list.getLast());

module.exports = { Node, LinkedList };
