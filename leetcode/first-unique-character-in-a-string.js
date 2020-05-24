/**
 * Given a string, find the first non-repeating character in it and return it's index. 
 * If it doesn't exist, return -1.
 */

var firstUniqChar = function(s) {
  let stringMap = new Map();
  
  // create Map
  // for (let i = 0; i < s.length; i++) {
  //   if(stringMap.has(s[i])) {
  //     stringMap.set(s[i], 2);
  //   } else {
  //     stringMap.set(s[i], 1);
  //   }
  // }
  
  for (let char of s) {
    if(stringMap.has(char)) {
      stringMap.set(char, 2);
    } else {
      stringMap.set(char, 1);
    }
  }
  
  
  // iterate over string
  for (let i = 0; i < s.length; i++) {
    if (stringMap.get(s[i]) === 1) {
      return i;
    }
  }
  
  return -1;
  
};