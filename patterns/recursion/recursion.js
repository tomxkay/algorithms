// recursion is a method to solve problems that consists of 
// solving smaller portions of the same problem until you solve the original larger problem.
// it usually involves calling the functioin itself.

// a method or function is recursive if it can call itself directly.
function recursiveFunction(someParam) {
  recursiveFunction(someParam);
}

// a function is also called recursive if it can call itself indirectly
function recursiveFunction1(someParam) {
  recursiveFunction2(someParam);
}

function recursiveFunction2(someParam) {
  recursiveFunction1(someParam);
}

