/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  let arr = S.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!letters.includes(arr[left])) {
      left++;
    } else if (!letters.includes(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]]= [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
};