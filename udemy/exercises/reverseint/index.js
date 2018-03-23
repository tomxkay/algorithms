// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversedNum = Math.abs(n).toString().split('').reverse().join('');

  return parseInt(reversedNum) * Math.sign(n); // Math.sign() takes a number and return 1 if that number is positive, otherwise -1.
}


// function reverseInt(n) {
//   const reversedNum = Math.abs(n).toString().split('').reverse().join('');

//   if (n < 0) {
//     return parseInt(reversedNum) * -1;
//   } else {
//     return parseInt(reversedNum);
//   }
// }

module.exports = reverseInt;
