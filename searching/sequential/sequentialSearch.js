// The most basic and inefficient search algorithm

const ArrayList = function() {

  const array = [];

  this.toString = function() {
    return array.join();
  }

  this.sequentialSearch = function(item) {
    for (let i=0; i<array.length; i++) {
      if (item === array[i]) {
        return i;
      }
    }

    return -1;
  };

}