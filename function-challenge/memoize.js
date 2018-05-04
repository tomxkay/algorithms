// an optimization technique used primarily to speed up computer programs by storing
// the results of expensive function calls and returning the cached
// result when the same inputs occur again.

const memoization = (fn) => {
  const cache = {}; // initialze cache object and keep private through closure.

  return function(...args) {
    if (cache[args]) { // if result of args is in cache, return it.
      return cache[args];
    }

    // otherwise,
    const result = fn.apply(this, args); // call fn and store in result variable
    cache[args] = result; // update cache map with result
    return result; // then return it
  };
}