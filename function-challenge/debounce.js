/*
  allows you to manage the frequency of calls that a function can receives. 
  
  enforces that a function not be called again until a certain amount of time has pased without it being called.

  will prevent a function from running while it is still being called frequently.

  will only run after it has been determined that it is no longer being called, at which point it will run exactly once.

  i.e
    * auto-saving or validating the contents of a text-field if the user "stopped typing".
    * logging where users rest their mouse: the user is no longer moving their mouse, so the last position can be logged.
*/

const debounce = (fn, delay) => {
  let inDebounce;

  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(inDebounce);

    inDebounce = setTimeout(() => fn.apply(context, args), delay);
  };
}