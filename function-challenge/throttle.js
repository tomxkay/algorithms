/*
  throttling is the reduction in rete of a repeating event.

  a wrapper around debounce which makes debounce to call passed function in some period of time.

  throttling is like a chaining debounce.

  restricts the frequency of calls that a funciton receives to a fixed time interval. it is used to ensure that the target function is not invoked more often thatn the specified delay. 

  prevent a function from runnig if it has run recently, regardless of the call frequency.

  i.e 
    * implementatios of v-sync are based on throttling: the screen will only be drawn if 16ms elapsed since the last screen draw. No matter how many times the screen refresh functionality is called, it will only run at most once every 16ms.

*/

const throttle = (fn, limit) => {
  let inThrottle;

  return function() {
    const args = arguments;
    const context = this;

    if (!inThrottle) { // if not in throttle
      fn.apply(context, args); // call the function with context and args
      inThrottle = true; // set in throttle to true
      setTimeout(() => inThrottle = false, limit); // setTimeout to reset in throttle to false
    }
  };
}

// better implementation to ensure that we catch and execute the last invocation and invoke it at the correct time.
const throttle2 = (fn, limit) => {
  let lastFn;
  let lastRan;
  
  return function() {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      fn.apply(context, args);
      lastRan = Date.now();
      
    } else {
      clearTimeout(lastFunc);

      lastFn = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          fn.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}