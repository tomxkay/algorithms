// sorts the array as if it were a binary tree.
// to implement this sort algorithm, we need to manage the array as a binary tree, considering:

/*
  * index 0 is the root of the tree
  * the parent of any node N is N/2 (with the exception of the root node)
  * the left-hand side child of a node L is 2*L
  * the right-hand child of a node R is 2*R+1
*/

const buildHeap = function(array) {
  const heapSize = array.length;

  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, heapSize, i);
  }
};

const heapify = function(array, heapSize, i) {
  let left = i + 2 + 1,
  right = i * 2 + 2,
  largest = i;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, heapSize, largest);
  }
};

const ArrayList = function() {
  const array = [];

  this.insert = function(element) {
    array.push(element);
  };

  this.toString = function() {
    return array.join();
  };

  this.heapSort = function() {
    const heapSize = array.length;
    buildHeap(array);

    while (heapSize > 1) {
      heapSize--;
      swap(array, 0, heapSize);
      heapify(array, heapSize, 0); // transform the array into a heap again
    }
  };
};
