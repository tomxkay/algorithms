// better performance than selection sorting algorithm.
// builds the final sorted array one item at a time.

function ArrayList() {
  
  const array = [];

  this.insert = function(item) {
    array.push(item);
  };

  this.toString = function() {
    return array.join();
  };

  this.insertionSort = function() {
    const length = array.length;
    let j, temp;

    for (let i=1; i<length; i++) {
      j = i;
      temp = array[i];

      while (j>0 && array[j-1] > temp) {
        array[j] = array[j-1];
        j--;
      }

      array[j] = temp;
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

const array = createNonSortedArray(7);
console.log(array.toString());

array.insertionSort();
console.log(array.toString());