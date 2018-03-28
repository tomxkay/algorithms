// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.data1 = new Stack();
    this.data2 = new Stack();
  }

  add(record) {
    this.data1.push(record);
  }

  remove() {
    while(this.data1.peek()) {
      this.data2.push(this.data1.pop());
    }
    let recordRemoved = this.data2.pop();
    
    while(this.data2.peek()) {
      this.data1.push(this.data2.pop());
    }

    return recordRemoved;
  }

  peek() {
    while(this.data1.peek()) {
      this.data2.push(this.data1.pop());
    }
    let recordPeeked = this.data2.peek();
    
    while(this.data2.peek()) {
      this.data1.push(this.data2.pop());
    }

    return recordPeeked;
  }


}

module.exports = Queue;
