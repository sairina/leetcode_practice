/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  
  let sPtr = 0;
  let tPtr = 0;
  let str = '';
  
  while (tPtr < t.length) {
    if (s[sPtr] === t[tPtr]) {
      str += t[tPtr];
      sPtr++;
      tPtr++;
    } else {
      tPtr++;
    }
  }
  
  return str === s;
};