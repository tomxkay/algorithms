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

        while (node) {
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

        while (node) {
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

        while (node.next) {
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

        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        const previous = this.getAt(index - 1);
        const sizeOfList = this.size();

        // check for out of bound 
        // and case for this.head === null (dependent of this.size() method)
        if (index > sizeOfList - 1 || index < 0) {
            return null;
        }

        // case to remove first item
        if (index === 0) {
            if (sizeOfList === 1) {

                return this.head = null;
            }

            return this.head = this.head.next;
        }

        // if linklist contains at least 2 items
        if (previous) {

            return previous.next = previous.next.next;
        }

    }

    insertAt(data, index) {
        // get previous node to the index of the to be added node.
        // if the index is out of bounds, add the new node to the end of the list.
        const previous = this.getAt(index - 1) || this.getLast();

        // case when the list is empty
        if (!this.head) {
            return this.head = new Node(data);
        }

        // insert at index 0 when the list has elements
        if (index === 0) {

            return this.head = new Node(data, this.head);
        }

        // default case: create new node with its next property pointing to previous.next 
        // and then setting previous.next the new node.
        previous.next = new Node(data, previous.next);
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
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
