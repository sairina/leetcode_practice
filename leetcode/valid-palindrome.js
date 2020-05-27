/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  //make everything lowercase
  //make pointers
  //while left is smaller than right
    //if it's alphanumeric and equal
      //move pointers left and right
    //else return false
  //return true
  
  let alphaNum = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let lowerCaseArr = s.toLowerCase().split('').filter(char => alphaNum.includes(char));
  console.log(lowerCaseArr);
  let left = 0;
  let right = lowerCaseArr.length - 1;
  
  while (left < right) {
    if (lowerCaseArr[left] === lowerCaseArr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};