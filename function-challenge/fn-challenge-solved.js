// write an identity function that takes an argument
// and returns that argument
function identity(x) {
  return x;
}

identity(3); // --> 3

// write three binary functions (functions that takes two arguments)
// that take two numbers and return their sum,
// difference, and product.
function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

// write a function identifyf that takes an argument
// and returns a function that returns that argument.
function identityf(x) {
  return function() {
    return x;
  };
}

var three = identityf(3);
three(); // --> 3

// write a function addf that adds from two invocations.
function addf() {
  return function(first) {
    return function(second) {
      return first + second;
    };
  };
}

addf(3)(4); // --> 7

// write a function liftf that takes
// a binary function, and
// makes  it callable with two invocations
function liftf(binary) {
  return function(first) {
    return function(second) {
      return binary(first, second);
    };
  };
}

var addf = liftf(add);
addf(3)(4); // --> 7
liftf(mul)(5)(6); // --> 30

// write a function curry that takes a binary function
// and an argument, and returns a function that
// can take a second argument.
function curry(binary, first) {
  return function(second) {
    return binary(first, second);
  };
}

function curry(binary, first) {
  return liftf(binary)(first);
}

// multiple args
function curry(func, ...first) {
  return function(...second) {
    return func(...first, ...second);
  };
}

var add3 = curry(add, 3);
add3(4); // --> 7
curry(mul, 5)(6); // --> 30

// without writing any new functions,
// show three ways to create the inc function.
var inc = addf(1);
var inc = liftf(add)(1);
var inc = curry(add, 1);

// write a function twice that takes a binary
// function and returns a unary function that
// passes its argument to the binary function twice.
function twice(binary) {
  return function(x) {
    return binary(x, x);
  };
}

add(11, 11); // --> 22
var doubl = twice(add);
doubl(11); // --> 22
var square = twice(mul);
square(11); // --> 121

// write reverse, a function that reverses
// the arguments of a binary function
function reverse(binary) {
  return function(first, second) {
    return binary(second, first);
  };
}

// multiple args
function reverse(func) {
  return function(...args) {
    return func(...args.reverse());
  };
}

// write a function composeu that takes two unary functions
// and returns a unary function that calls them both.
function composeu(f, g) {
  return function(x) {
    return g(f(x));
  };
}

composeu(doubl, square)(5); // --> 100

// write a function composeb that takes
// two binary functions and returns a function
// that calls them both.
function composeb(f, g) {
  return function(x, y, z) {
    return g(f(x, y), z);
  };
}

composeb(add, mul)(2, 3, 7); // --> 35

// write a limit function that allows a binary
// function to be called a limited number of times.
function limit(binary, count) {
  return function(x, y) {
    if (count >= 1) {
      count -= 1;
      return binary(x, y);
    }
    return undefined;
  };
}
function limit(binary, count) {
  let i = 0;
  return function(x, y) {
    return i <= count ? binary(x, y) : undefined;
  };
}

var add_ltd = limit(add, 1);
add_ltd(3, 4); // --> 7
add_ltd(3, 5); // --> undefined

// write a from function that produces
// a generator that will produce a series of values.
function from(start) {
  return function() {
    return start++;
  };
}

function from(start) {
  return function() {
    var next = start;
    start += 1;
    return next;
  };
}

var index = from(0);
index(); // 0
index(); // 1
index(); // 2

// write a to function that takes a generator and an end value,
// and returns a generator that will produce numbers up to
// that limit.
function to(gen, end) {
  return function() {
    let value = gen();
    return value < end ? value : undefined;
  };
}

var index = to(from(1), 3);
index(); // 1
index(); // 2
index(); // undefined

// write a fromTo function that produces a generator
// that will produce values in a range
function fromTo(start, end) {
  return to(from(start), end);
}

var index = fromTo(0, 3);
index(); // 0
index(); // 1
index(); // 2
index(); // undefined

// write an element function that takes an array
// and a generator and returns a generator that will
// produce elements from the array.
function element(array, gen) {
  return function() {
    var index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}

var ele = element(["a", "b", "c", "d"], fromTo(1, 3));
ele(); // 'b'
ele(); // 'c'
ele(); // undefined

// modify the element function so that the generator argument is optional.
// if a generator is not provided, then each of the elements of the array
// will be produced.
function element(array, gen = fromTo(0, array.length)) {
  return function() {
    var index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}

function element(array, gen) {
  gen = gen || fromTo(0, array.length);
  return function() {
    var index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}

var ele = element(["a", "b", "c", "d"]);
ele(); // 'a'
ele(); // 'b'
ele(); // 'c'
ele(); // 'd'
ele(); // undefined

// write a collection function that takes a generator
// and an array and produces a function that will
// collect the results in the array
function collect(gen, array) {
  return function() {
    let element = gen();
    if (element !== undefined) {
      array.push(element);
    } else {
      return array;
    }
    return element;
  };
}

var array = [],
  col = collect(fromTo(0, 2), array);

col(); // 0
col(); // 1
col(); // undefined
col(); // [0, 1]

// write a filter function that takes a generator and
// a predicate (a function that returns a boolean)
// and produces a generator that produces
// only the values approved by the predicate
function filter(gen, predicate) {
  return function() {
    var value = gen();

    while (value !== undefined && !predicate(value)) {
      value = gen();
    }

    return value;
  };
}

function filter(gen, predicate) {
  return function() {
    var value;
    do {
      value = gen();
    } while (value !== undefined && !predicate(value));

    return value;
  };
}

function filter(gen, predicate) {
  return function recur() {
    var value = gen();

    if (value === undefined || predicate(value)) {
      return value;
    }

    return recur();
  };
}

var fil = filter(fromTo(0, 5), function third(value) {
  return value % 3 === 0;
});

fil(); // 0
fil(); // 3
fil(); // undefined

// write a concat function that takes two generators
// and produces a generator that combines the sequences.
function concat(gen1, gen2) {
  return function() {
    var value = gen1();
    if (value !== undefined) {
      return value;
    }

    gen1 = gen2;
    return gen1();
  };
}

function concat(...gens) {
  var next = element(gens),
    gen = next();
  return function recur() {
    var value = gen();
    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }
    return value;
  };
}

var con = concat(fromTo(0, 3), fromTo(0, 2));

con(); // 0
con(); // 1
con(); // 2
con(); // 0
con(); // 1
con(); // undefined

// make a function gensymf that makes a
// function that generates unique symbols
function gensymf(prefix) {
  var gen = from(1);
  return function() {
    return `${prefix}${gen()}`;
  };
}

function gensymf(prefix) {
  var number = 0;
  return function() {
    number += 1;
    return prefix + number;
  };
}

function gensymf(unary, seed) {
  return function(prexif) {
    var number = seed;
    return function() {
      number = unary(number);
      return prefix + number;
    };
  };
}

var geng = gensymf("G"),
  genh = gensymf("H");

geng(); // 'G1'
genh(); // 'H1'
geng(); // 'G2'
genh(); // 'H2'

// make a function fibonaccif that
// returns a generator that will
// return the next fibonacci number.
function fibonaccif(a, b) {
  var i = 0;
  return function() {
    var next;
    switch (i) {
      case 0:
        i = 1;
        return a;
      case 1:
        i = 2;
        return b;
      default:
        next = a + b;
        a = b;
        b = next;
        return next;
    }
  };
}

function fibonaccif(a, b) {
  return function() {
    var next = a;
    a = b;
    b += next;
    return next;
  };
}

function fibonaccif(a, b) {
  return concat(
    concat(limit(identifyf(a), 1), limit(identityf(b), 1)),
    function fibonacci() {
      var next = a + b;
      a = b;
      b = next;
      return next;
    }
  );
}

function fibonaccif(a, b) {
  return concat(element([a, b]), function fibonacci() {
    var next = a + b;
    a = b;
    b = next;
    return next;
  });
}

var fib = fibonaccif(0, 1);

fib(); // 0
fib(); // 1
fib(); // 1
fib(); // 2
fib(); // 3
fib(); // 5

// write a counter function that returns an object containing
// two functions that implement an up/down counter,
// hiding the counter.
function counter(n) {
  return {
    up: function() {
      return (n += 1);
    },
    down: function() {
      return (n -= 1);
    }
  };
}

var object = counter(10),
  up = object.up,
  down = object.down;

up(); // 11
down(); // 10
down(); // 9
up(); // 10

// make a revocable function that takes a binary function,
// and returns an object containing an invoke function
// that can invoke the binary function, and a revoke
// function that disables the invoke function.
function revocable(binary) {
  var revoked = false;
  return {
    invoke: function(first, second) {
      if (revoked) {
        return undefined;
      }
      return binary(first, second);
    },
    revoke: function() {
      revoked = true;
    }
  };
}

function revocable(binary) {
  return {
    invoke: function(first, second) {
      if (binary !== undefined) {
        return binary(first, second);
      }
    },
    revoke: function() {
      binary = undefined;
    }
  };
}

var rev = revocable(add),
  add_rev = rev.invoke;
add_rev(3, 4); // 7
rev.revoke();
add_rev(5, 7); // undefined

// write a function m that takes a value
// and an optional source string and
// returns them in an object.
function m(value, source = value) {
  return {
    value: value,
    source: source.toString()
  };
}

function m(value, source) {
  return {
    value: value,
    source: typeof source === "string" ? source : String(value)
  };
}

JSON.stringify(m(1)); // {"value": 1, "source": "1"}
JSON.stringify(m(Math.PI, "pi")); // {"value": 3.14159..., "source": "pi"}

// write a function addm that takes two m objects and
// returns an m object.
function addm(a, b) {
  return m(a.value + b.value, `(${a.source}+${b.source})`);
}

JSON.stringify(addm(m(3), m(4))); // {"value": 7, "source": "(3+4)"}
JSON.stringify(addm(m(1), m(Math.PI, "pi"))); // {"value": 4.114159..., "source": "(1+pi)"}

// write a function liftm that takes
// a binary function and a string
// and returns a function that acts on m objects.
function liftm(binary, op) {
  return function(a, b) {
    return m(binary(a.value, b.value), "(" + a.source + op + b.source + ")");
  };
}

var addm = liftm(add, "+");
JSON.stringify(addm(m(3), m(4))); // {"value": 7, "source": "(3+4)"}
JSON.stringify(liftm(mul, "*")(m(3), m(4))); // {"value": 12, "source": "(3*4)"}

// modify function liftm so that
// the functions it produces can accept
// arguments that are either numbers or m objects.
function liftm(binary, op) {
  return function(a, b) {
    return m(
      binary(
        typeof a === "number" ? a : a.value,
        typeof b === "number" ? b : b.value
      ),
      "(" +
        (typeof a === "number" ? a : a.source) +
        op +
        (typeof b === "number" ? b : b.source) +
        ")"
    );
  };
}

function liftm(binary, op) {
  return function(a, b) {
    if (typeof a === "number") {
      a = m(a);
    }
    if (typeof b === "number") {
      b = m(b);
    }
    return m(binary(a.value, b.value), "(" + a.source + op + b.source + ")");
  };
}

var addm = liftm(add, "+");
JSON.stringify(addm(3, 4)); // {"value": 7, "source": "(3+4)"}

// write a function exp that
// evaluates simple array expressions.
function exp(value) {
  return Array.isArray(value) ? value[0](...value.slice(1)) : value;
}

function exp(value) {
  return Array.isArray(value) ? value[0](value[1], value[2]) : value;
}

var sae = [mul, 5, 11];
exp(sae); // 55
exp(42); // 42

// modify exp to evaluate nested array expressions.
function exp(value) {
  return Array.isArray(value) ? value[0](exp(value[1]), exp(value[2])) : value;
}

var nae = [Math.sqrt, [add, [square, 3], [square, 4]]];
exp(nae); // 5

// write a function addg that adds from many invocations, 
// untils it sees an empty invocation
function addg(first) {
  function more(next) {
    if (next === undefined) {
      return first;
    }
    first += next;
    return more;
  }
  if (first !== undefined) {
    return more;
  }
}

function addg(first) {
  function more(next) {
    // if next is undefined, return first, breaking out of recursion.
    if (next === undefined) {
      return first;
    }
    // if next is not undefined, add to first and return more
    // to check again.
    first += next;
    return more;
  }

  // if first is undefined, return undefined, else return more
  if (first !== undefined) {
    return more;
  }
}

addg(); // undefined
addg(2)(); // 2
addg(2)(7)(); // 9
addg(3)(0)(4)(); // 7
addg(1)(2)(4)(8)(); // 15


// write a function liftg that will
// take a binary funciton and apply it
// to many invocations.
function liftg(binary) {
  return function(first) {
    function more(next) {
      if (next === undefined) {
        return first;
      }
      first = binary(first, next);
      return more;
    }
    // if first is undefined, return underfined,
    // otherwise return more and start recursion.
    if (first !== undefined) {
      return more;
    }
  };
}

function liftg(binary) {
  return function(first) {
    if (first === undefined) {
      return first;
    }
    return function more(next) {
      if (next === undefined) {
        return first;
      }
      first = binary(first, next);
      return more;
    }
  };
}

liftg(mul)(); // undefined;
liftg(mul)(3)(); // 3
liftg(mul)(3)(0)(4)(); // 0
liftg(mul)(1)(2)(4)(8)(); // 64


// write a function arrayg that will build an array
// from many invocations.
function arrayg(first) {
  var arr = [];
  if (first === undefined) {
    return arr;
  }
  arr.push(first);
  return function more(next) {
    if (next === undefined) {
      return arr;
    }
    arr.push(next);
    return more;
  };
}

function arrayg(first) {
  var arr = [];
  function more(next) {
    if (next === undefined) {
      return array;
    }
    array.push(next);
    return more;
  }
  return more(first);
}

function arrayg(first) {
  if (first === undefined) {
    return [];
  }
  return liftg(
    function(array, value) {
      array.push(value);
      return array;
    }
  )([first]);
}

arrayg(); // []
arrayg(3)(); // [3]
arrayg(3)(4)(5)(); // ][3, 4, 5]


// make a function continuize that takes
// a unary function, and returns a function
// that takes a callback and an argument.
function continuize(unary) {
  return function(callback, arg) {
    return callback(unary(arg));
  };
}

// for mulitple args
function continuize(any) {
  return function(callback, ...x) {
    return callback(any(...x));
  };
}

sqrtc = continuize(Math.sqrt);
sqrtc(console.log, 81); // 9


// building a better constructor
function constructor(init) {
  var that = other_constructor(init),
    member,
    method = function() {
      // init, member, method
    };
  that.method = method;
  return that;
}

function constructor(spec) {
  let { member } = spec;
  const { other } = other_constructor(spec);
  const method = function() {
    // spec, member, other, method
  };
  return Object.freeze({
    method,
    other
  });
}


// make an array wrapper object with methods get, store, and append,
// such that an attacker cannot access to the private array.
function vector() {
  var array = [];

  return {
    get: function(index) {
      return array[index];
    },
    store: function(index, value) {
      array[index] = value;
    },
    append: function(value) {
      array.push(value);
    }
  };
}

myvector = vector();
myvector.append(7);
myvector.store(1, 8);
myvector.get(0); // 7
myvector.get(1); // 8

// security exploitation of vector
/*
var stash;
myvector.store('push', function() {
  stash = this;
});
myvector.append(); // stash is array
*/


// make a function that makes a publish/subscribe object.
// it will reliably deliver all publications to 
// all subscribers in the right order.
function pubsub() {
  var subscribers = [];
  return Object.freeze({ // to prevent reinitialization/tampering of methods
    subscribe: function(subscriber) {
      subscribers.push(subscriber);
    },
    publish: function(publication) {
      subscribers.forEach(function(s) {
        setTimeout(function() { // cause everything to get lined up in the timer queue, to keep things in order
          s(publication);
        }, 0);
      });
    }
  });
}

my_pubsub = pubsub();
my_pubsub.subscribe(console.log);
my_pubsub.subscribe(function(s) {
  console.log(s.toUpperCase());
});
my_pubsub.publish('It works!'); // console.log('It works!')

// exploiting pubsub security loophole
/*
my_pubsub.subscribe(); // passing undefined 
my_pubsub.publish = undefined;
my_pubsub.subscribe(function() {
  this.length = 0; // access private array and set length to 0
});

*/
