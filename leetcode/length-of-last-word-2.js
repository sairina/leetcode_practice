/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  //trim whitespace first
  //turn string into array
  let arr = s.trim().split(' ');

  //return length of last element
  return arr.length ? arr[arr.length - 1].length : 0;
};