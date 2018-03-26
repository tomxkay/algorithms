// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}



// function vowels(str) {
//   let count = 0;
//   const vowelsArr = ['a', 'e', 'i', 'o', 'u'];  
//   for (let letter of str.toLowerCase()) {
//     if (vowelsArr.includes(letter)) {
//       count++;
//     }
//   }

//   return count;
// }


// function vowels(str) {
//   let count = 0;
//   const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
//   for (let letter of str.toLowerCase()) {
//     if (vowelsArr.indexOf(letter) !== -1) {
//       count++;
//     }
//   }

//   return count;
// }



// function vowels(str) {
//   let count = 0;
//   const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i < str.length; i++) {
//     if (vowelsArr.indexOf(str.toLowerCase()[i]) !== -1) {
//       count++;
//     }
//   }

//   return count;
// }






// // my implementation. match() returns an array of found matches and null otherwise. 
// // this may not be the best implementation.
// function vowels(str) {

//   return str.split('').filter((l) => l.match(/[aeiou]/ig)).length;
// }

module.exports = vowels;
