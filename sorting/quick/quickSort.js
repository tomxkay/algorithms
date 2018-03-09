// probably the most used sorting algorithm.
// has a complexity of O(n log n) and usually performs better than like complexity sorting algorithms.

// uses the divide-and-conquer approach, divinging the original array into smaller ones (but without splitting them as the merge sort does) to do the sorting.

const quick = function(array, left, right) {
  let index;

  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index-1) {
      quick(array, left, index-1);
    }

    if (index < right) {
      quick(array, index, right);
    }

  }
};

const partition = function(array, left, right) {

  let pivot = array[Math.floor((right + left) / 2)], // value to middle-ish element
  i = left,
  j = right;

  while (i <= j) { // while the left and right pointers do not cross each other, execute the partition operation.
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j); // swap positions
      i++;
      j--;
    }
  }

  return i; // return the index of the left pointer that will be used to create the subarrays
}

const swap = function(array, index1, index2) {

  [array[index1], array[index2]] = [array[index2], array[index1]]
};


const ArrayList = function() {
  let array = [];

  this.insert = function(element) {
    array.push(element);
  }

  this.toString = function() {
    return array.join();
  }

  this.quickSort = function() {
    quick(array, 0, array.length -1);
  };

}

const array = new ArrayList();

array.insert(9);
array.insert(12);
array.insert(91);
array.insert(1);
array.insert(44);
array.insert(24);
array.insert(3);
array.insert(19);

console.log(array.toString());
array.quickSort();
console.log(array.toString());
