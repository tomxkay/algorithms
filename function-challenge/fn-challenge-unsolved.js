////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/////////                                                         //////////      
/////////            Credit goes to Douglas Crockford             //////////
/////////     Course: The Good Parts of JavaScript and the Web    //////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


// write an identity function that takes an argument
// and returns that argument
/*
  identity(3); // --> 3
*/
function identity(x) {

}

// write three binary functions (functions that takes two arguments)
// that take two numbers and return their sum,
// difference, and product.
/*
  add(3, 4); // --> 7
  sub(3, 4); // --> -1
  mul(3, 4); // --> 12
*/
function add(first, second) {

}

function sub(first, second) {

}

function mul(first, second) {

}

// write a function identifyf that takes an argument
// and returns a function that returns that argument.
/*
  var three = identityf(3);
  three(); // --> 3
*/
function identityf(x) {

}

// write a function addf that adds from two invocations.
/*
  addf(3)(4); // --> 7
*/
function addf() {

}

// write a function liftf that takes a binary function, 
// and makes  it callable with two invocations
/*
  addf(3)(4); // --> 7
  liftf(mul)(5)(6); // --> 30
*/
function liftf(binary) {

}

// write a function curry that takes a binary function
// and an argument, and returns a function that
// can take a second argument.
/*
  var add3 = curry(add, 3);
  add3(4); // --> 7
  curry(mul, 5)(6); // --> 30
*/
function curry(binary, first) {

}

// without writing any new functions,
// show three ways to create the inc function,
// which adds 1 to a number passed to it.


// write a function twice that takes a binary
// function and returns a unary function that
// passes its argument to the binary function twice.
/*
  add(11, 11); // --> 22
  var doubl = twice(add);
  doubl(11); // --> 22
  var square = twice(mul);
  square(11); // --> 121
*/
function twice(binary) {

}

// write reverse, a function that reverses
// the arguments of a binary function
/*
  var reverseSub = reverse(sub);
  reverseSub(3,4); // --> 1
*/
function reverse(binary) {

}

// write a function composeu that takes two unary functions
// and returns a unary function that calls them both.
/*
  composeu(doubl, square)(5); // --> 100
*/
function composeu(f, g) {

}

// write a function composeb that takes
// two binary functions and returns a function
// that calls them both.
/*
  composeb(add, mul)(2, 3, 7); // --> 35
*/
function composeb(f, g) {

}

// write a limit function that allows a binary
// function to be called a limited number of times.
/*
  var add_ltd = limit(add, 1);
  add_ltd(3, 4); // --> 7
  add_ltd(3, 5); // --> undefined
*/
function limit(binary, count) {

}

// write a from function that produces
// a generator that will produce a series of values.
/*
  var index = from(0);
  index(); // 0
  index(); // 1
  index(); // 2
*/  
function from(start) {

}

// write a to function that takes a generator and an end value,
// and returns a generator that will produce numbers up to
// that limit.
/*
  var index = to(from(1), 3);
  index(); // 1
  index(); // 2
  index(); // undefined
*/
function to(gen, end) {

}

// write a fromTo function that produces a generator
// that will produce values in a range
/*
  var index = fromTo(0, 3);
  index(); // 0
  index(); // 1
  index(); // 2
  index(); // undefined
*/
function fromTo(start, end) {

}

// write an element function that takes an array
// and a generator and returns a generator that will
// produce elements from the array.
/*
  var ele = element(["a", "b", "c", "d"], fromTo(1, 3));
  ele(); // 'b'
  ele(); // 'c'
  ele(); // undefined
*/
function element(array, gen) {

}

// modify the element function so that the generator argument is optional.
// if a generator is not provided, then each of the elements of the array
// will be produced.
/*
  var ele = element(["a", "b", "c", "d"]);
  ele(); // 'a'
  ele(); // 'b'
  ele(); // 'c'
  ele(); // 'd'
  ele(); // undefined
*/
function element(array, gen) {

}

// write a collection function that takes a generator
// and an array and produces a function that will
// collect the results in the array
/*
  var array = [],
  col = collect(fromTo(0, 2), array);

  col(); // 0
  col(); // 1
  col(); // undefined
  col(); // [0, 1]
*/
function collect(gen, array) {

}

// write a filter function that takes a generator and
// a predicate (a function that returns a boolean)
// and produces a generator that produces
// only the values approved by the predicate
/*
  var fil = filter(fromTo(0, 5), function third(value) {
    return value % 3 === 0;
  });

  fil(); // 0
  fil(); // 3
  fil(); // undefined
*/
function filter(gen, predicate) {

}

// write a concat function that takes two generators
// and produces a generator that combines the sequences.
/*
  var con = concat(fromTo(0, 3), fromTo(0, 2));

  con(); // 0
  con(); // 1
  con(); // 2
  con(); // 0
  con(); // 1
  con(); // undefined
*/
function concat(gen1, gen2) {

}


// make a function gensymf that makes a
// function that generates unique symbols
/*
  var geng = gensymf("G"),
  genh = gensymf("H");

  geng(); // 'G1'
  genh(); // 'H1'
  geng(); // 'G2'
  genh(); // 'H2'
*/
function gensymf(prefix) {

}

// make a function fibonaccif that when
// passed two previous fibonacci sequence
// returns a generator that will
// return the next fibonacci number.
/*
  var fib = fibonaccif(0, 1);

  fib(); // 0
  fib(); // 1
  fib(); // 1
  fib(); // 2
  fib(); // 3
  fib(); // 5
*/
function fibonaccif(a, b) {

}


/////////////////////////////////////////////////////////
///   From here onwards, incorporate functional       ///
///   and object oriented programming if applicable   ///
/////////////////////////////////////////////////////////

// write a counter function that returns an object containing
// two functions that implement an up/down counter,
// hiding the counter.
/*
  var object = counter(10),
  up = object.up,
  down = object.down;

  up(); // 11
  down(); // 10
  down(); // 9
  up(); // 10
*/
function counter(n) {

}

// make a revocable function that takes a binary function,
// and returns an object containing an invoke function
// that can invoke the binary function, and a revoke
// function that disables the invoke function.
/*
  var rev = revocable(add),
  add_rev = rev.invoke;
  add_rev(3, 4); // 7
  rev.revoke();
  add_rev(5, 7); // undefined
*/
function revocable(binary) {

}

// write a function m that takes a value
// and an optional source string and
// returns them in an object.
/*
  JSON.stringify(m(1)); // {"value": 1, "source": "1"}
  JSON.stringify(m(Math.PI, "pi")); // {"value": 3.14159..., "source": "pi"}
*/
function m(value, sorce) {

}

// write a function addm that takes two m objects and
// returns an m object.
/*
  JSON.stringify(addm(m(3), m(4))); // {"value": 7, "source": "(3+4)"}
  JSON.stringify(addm(m(1), m(Math.PI, "pi"))); // {"value": 4.114159..., "source": "(1+pi)"}
*/
function addm(a, b) {

}

// write a function liftm that takes
// a binary function and a string
// and returns a function that acts on m objects.
/*
  var addm = liftm(add, "+");
  JSON.stringify(addm(m(3), m(4))); // {"value": 7, "source": "(3+4)"}
  JSON.stringify(liftm(mul, "*")(m(3), m(4))); // {"value": 12, "source": "(3*4)"}
*/
function liftm(binary, op) {

}

// modify function liftm so that
// the functions it produces can accept
// arguments that are either numbers or m objects.
/*
  var addm = liftm(add, "+");
  JSON.stringify(addm(3, 4)); // {"value": 7, "source": "(3+4)"}
*/
function liftm(binary, op) {

}

// write a function exp that
// evaluates simple array expressions.
/*
  var sae = [mul, 5, 11];
  exp(sae); // 55
  exp(42); // 42
*/
function exp(value) {

}

// modify exp to evaluate nested array expressions.
/*
  var nae = [Math.sqrt, [add, [square, 3], [square, 4]]];
  exp(nae); // 5
*/
function exp(value) {

}

// write a function addg that adds from many invocations, 
// untils it sees an empty invocation
/*
  addg(); // undefined
  addg(2)(); // 2
  addg(2)(7)(); // 9
  addg(3)(0)(4)(); // 7
  addg(1)(2)(4)(8)(); // 15
*/
function addg(first) {

}

// write a function liftg that will
// take a binary funciton and apply it
// to many invocations.
/*
  liftg(mul)(); // undefined;
  liftg(mul)(3)(); // 3
  liftg(mul)(3)(0)(4)(); // 0
  liftg(mul)(1)(2)(4)(8)(); // 64
*/
function liftg(binary) {

}

// write a function arrayg that will build an array
// from many invocations.
/*
  arrayg(); // []
  arrayg(3)(); // [3]
  arrayg(3)(4)(5)(); // ][3, 4, 5]
*/
function arrayg(first) {

}

// make a function continuize that takes
// a unary function, and returns a function
// that takes a callback and an argument.
/*
  sqrtc = continuize(Math.sqrt);
  sqrtc(console.log, 81); // 9
*/
function continuize(any) {

}





/*

Below are a few "hard" to (correctly) implement functions due 
to security exploitation nuances of JS

  |
  |
  |
  v

*/


// make an array wrapper object with methods get, store, and append,
// such that an attacker cannot access to the private array.
/*
  myvector = vector();
  myvector.append(7);
  myvector.store(1, 8);
  myvector.get(0); // 7
  myvector.get(1); // 8
*/
function vector() {

}

// make a function that makes a publish/subscribe object.
// it will reliably deliver all publications to 
// all subscribers in the right order.
/*
  my_pubsub = pubsub();
  my_pubsub.subscribe(console.log);
  my_pubsub.subscribe(function(s) {
    console.log(s.toUpperCase());
  });
  my_pubsub.publish('It works!'); // console.log('It works!')
*/
function pubsub() {

}




