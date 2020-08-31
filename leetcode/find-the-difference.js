/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

  let obj = {};
  for (let char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let letter of t) {
    if (obj[letter] === undefined) {
      return letter;
    } else {
      obj[letter]--;
    }
  }
  
  for (let key in obj) {
    if (obj[key] < 0) return key;
  }
  
};

