// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'



// recursive implementation
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2*n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2*n -1) / 2);
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += "#"
  } else {
    level += ' ';
  }

  pyramid(n, row, level)

}

// // iteratable implementation
// function pyramid(n) {
//   const midpoint = Math.floor((2*n-1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column ++) {
      
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }

//     }

//     console.log(level);

//   }
// }




// // my implementation
// function pyramid(n) {

//   const arr = [];
//   let rows = n;
//   let columns = n + (n -1);

//   for (let i = 0; i < n; i++) {
//       arr.push(' '.repeat(i).concat('#'.repeat(columns - (i*2))).concat(' '.repeat(i)));
//   }


//   arr.reverse().forEach((s) => console.log(s));
// }

module.exports = pyramid;
