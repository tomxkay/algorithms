// better performance than the bubble sorting algorithm.
// in-place comparison sort algorithm.

const swap = function(array, index1, index2) {

  const aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
}




function ArrayList() {
  
  const array = [];

  this.insert = function(item) {
    array.push(item);
  };

  this.toString = function() {
    return array.join();
  };

  this.selectionSort = function() {
    const length = array.length;
    let indexMin;

    for (let i=0; i<length; i++) {
      indexMin = i;
      for (let j=i; j<length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(array, i, indexMin);
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

array.selectionSort();
console.log(array.toString());
