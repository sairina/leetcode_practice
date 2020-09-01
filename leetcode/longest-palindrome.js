/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

  if (isPalindrome(s) === true) {
    return s.length;
  } else {
    const [value, count] = isPalindrome(s);
    return s.length - (count - 1);
  }
};

function isPalindrome(str) {
  let obj = palindromeObj(str);
  let count = 0;
  
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      count += 1;
    }
  }
  
  return count > 1 ? [false, count] : true;
  
}

function palindromeObj(str) {
  let obj = {};
  for (let letter of str) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  return obj;
}