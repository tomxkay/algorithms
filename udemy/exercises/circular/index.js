// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {

  let slow = list.getFirst();
  let fast = list.getFirst();

  // using the same algorithm to find the midpoint,
  // if slow and fast points to the same node 
  // after the first iteration, it is a circular linkedlist.
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
        if (slow === fast) {
          return true;
        }
  }

  // if the while loop breaks,
  // it means that the linkedlist is not cirlular.
  return false;
}

module.exports = circular;
