/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let length = 0;
  
  //trim whitespace first
  //turn string into array
  let arr = s.trim().split(' ');
  
  //find last element in array
  let last = arr[arr.length - 1];
  
  //find length of element
  for (let i = 0; i < last.length; i++) {
    length += 1;
  }
  
  //return length of last element
  return length;
};