// subtract the number of passes from the inner loop 
// to avoid all unnecessary comparisons made by the inner loop

// helper functions
const swap = function(array, index1, index2) {

  const aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
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

  this.modifiedBubbleSort = function() {
    const length = array.length;

    for (let i=0; i<length; i++) {
      for (let j=0; j<length-1-i; j++) {
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

array.modifiedBubbleSort();
console.log(array.toString());

