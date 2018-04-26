// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {

  let slow = list.getFirst();
  let fast = list.getFirst();

  // advance fast n nodes from slow
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // then increment slow and fast by one node in a while loop
  // when fast.next is null (when fast is the last pointing at the last node)
  // break out of while loop and return slow;
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
