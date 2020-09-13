/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  if (s.length === 1) return true;
  
  let arr = s.split(' ');
  let obj = {};
  
  if (arr.length !== pattern.length) return false;
      
  for (let i = 0; i < pattern.length; i++) {
      if (obj[pattern[i]] === undefined) {
          obj[pattern[i]] = arr[i];
      }
  }
  
  if (new Set(Object.values(obj)).size !== Object.values(obj).length) return false;

  for (let j = 0; j < pattern.length; j++) {
      if (obj[pattern[j]] !== arr[j]) {
          return false;
      }
  }
  return true;
  
};