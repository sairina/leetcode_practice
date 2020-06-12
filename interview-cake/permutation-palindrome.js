// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function hasPalindromePermutation(theString) {
  //create a set
  //iterate through string
    //if set has the character in the string
      //delete from set
    //else
      //add to set
  //return true if the size of set is less than 1

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair

  let stringSet = new Set();

  for (let char of theString) {
    if (stringSet.has(char)) {
      stringSet.delete(char);
    } else {
      stringSet.add(char);
    }
  }

  return stringSet.size <= 1;
}

// Tests

// let desc = 'permutation with odd number of chars';
// assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

// desc = 'permutation with even number of chars';
// assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

// desc = 'no permutation with odd number of chars';
// assertEqual(hasPalindromePermutation('aabcd'), false, desc);

// desc = 'no permutation with even number of chars';
// assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

// desc = 'empty string';
// assertEqual(hasPalindromePermutation(''), true, desc);

// desc = 'one character string ';
// assertEqual(hasPalindromePermutation('a'), true, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }