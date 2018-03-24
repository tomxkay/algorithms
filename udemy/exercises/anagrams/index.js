// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



// helper function to clean string by removing punctuations and sorting it in alphabetical order.
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
  

}




// function buildCharMap(str) {
//   const re = /[^\w]/g;
//   const charMap = {};

//   const cleanString = str.replace(re, '').toLowerCase();

//   for (let char of cleanString) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);


//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (prop in charMapA) {
//     if (charMapA[prop] !== charMapB[prop]) {
//       return false;
//     }
//   }

//   return true;

// }

module.exports = anagrams;
