// a combinatorial problem.

// given a fixed-size knapsack with a capacity to carry W amount of weight and a set of items that have a value
// and weight, find the best soluction in a way to fill the knapsack with the most valuable items so that
// the total weight is less than or equal to W.

// whole item version.

function knapSack(capacity, weights, values, n) {
  var i,
    w,
    a,
    b,
    kS = [];

  for (i = 0; i <= n; i++) {
    kS[i] = [];
  }

  for (i = 0; i <= n; i++) {
    for (w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        b = kS[i - 1][w];
        kS[i][w] = a > b ? a : b;
      } else {
        kS[i][w] = kS[i - 1][w];
      }
    }
  }

  return kS[n][capacity];
}

function findValues(n, capacity, kS, weights, values) {
  var i = n,
    k = capacity;
  console.log("Items that are part of the solution:");
  while (i > 0 && k > 0) {
    if (kS[i][k] !== kS[i - 1][k]) {
      console.log(
        "item " +
          i +
          " can be part of solution w,v: " +
          weights[i - 1] +
          "," +
          values[i - 1]
      );
      i--;
      k = k - kS[i][k];
    } else {
      i--;
    }
  }
}

var values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;

// call findValue() here
console.log(knapSack(capacity, weights, values, n));
