// the Fibonacci sequence of 1 or 2 is 1
// the Fibonacci sequence of n (for n > 2) is the Fibonacci of (n-1) + Fibonacci of (n-2)

function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonacci(num -1 ) + fibonacci(num -2);
}

// to implement the Fibonacci function in a nonrecursive way
function fib(num) {
  let n1 = 1,
  n2 = 1,
  n = 1;

  for (let i=3; i<num; i++) {
    n = n1+n2;
    n1 = n2;
    n2 = n;
  }

  return n;
}



for (let i=2; i<10;i++) {
  console.log(fibonacci(i));
}

