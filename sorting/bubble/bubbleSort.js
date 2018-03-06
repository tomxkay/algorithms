// create an array (list) to represent the data structure that we want to sort and search.

// the bubble sort is the simplest and slowest of the sorting algorithms.
// it is one of the worst-case sorting algorithms with respect to runtime.

// the bubble sort algorithm compares every two adjacent items and swaps them if the first one is bigger than the second one.


// helper functions
const swap = function(array, index1, index2) {

  const aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
}

const swapEs6 = (array, index1, index2) => {

  [array[index1], array[index2]] = [array[index2], array[index1]];
}


// main implementation
function ArrayList() {
  
  const array = [];

  this.insert = function(item) {
    array.push(item);
  };

  this.toString = function() {
    return array.join();
  };

  this.bubbleSort = function() {
    const length = array.length;

    for (let i=0; i<length; i++) {
      for (let j=0; j<length-1; j++) {
        if (array[j] > array[j+1]) {
          swap(array, j, j+1);
        }
      }
    }
  };
}


function createNonSortedArray(size) {
  const array = new ArrayList();

  for (let i=size; i>0; i--) {
    array.insert(i);
  }

  return array;
}

const array = createNonSortedArray(5);
console.log(array.toString());

array.bubbleSort();
console.log(array.toString());

