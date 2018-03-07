// better performance than the insertion sorting algorithm.

// the merge sort gives a good performance with a complexity of O(n longn)

// the idea is to divide the original array into smaller arrays until each small array has only one
// position and then merge these smaller arrays into bigger ones until we have a single
// array at the end that is sorted.


const mergeSortRec = function(array) {
  const length = array.length;

  if (length === 1) {
    return array;
  }

  let mid = Math.floor(length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, length);

  return merge(mergeSortRec(left), mergeSortRec(right));
};

var merge = function(left, right) {
  var result = [],
    il = 0,
    ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
};

const ArrayList = function() {
  let array = [];

  this.insert = function(item) {
    array.push(item);
  };

  this.toString = function() {
    return array.join();
  };

  this.mergeSort = function() {
    array = mergeSortRec(array);
  };
};

function createNonSortedArray(size) {
  const array = new ArrayList();

  for (let i = size; i > 0; i--) {
    array.insert(i);
  }

  return array;
}

const array = createNonSortedArray(10);
console.log(array.toString());

array.mergeSort();
console.log(array.toString());
