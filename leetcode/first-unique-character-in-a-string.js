/**
 * Given a string, find the first non-repeating character in it and return it's index. 
 * If it doesn't exist, return -1.
 */

var firstUniqChar = function(s) {
  let sMap = new Map();

  // make map
  for(let i = 0; i < s.length; i++) {
    if(sMap.has(s[i])){
      sMap.set(s[i], 2);
    } else {
      sMap.set(s[i], 1);
    }
  }

  //check if map has non-repeat char from s
  for(let i = 0; i < s.length; i++) {
    if(sMap.get(s[i]) === 1) {
      return i;
    }
  }
  
  return -1;
}