function palindrome(str) {
  //filter non-alphanumeric chars
  let alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let filteredArr = str.toLowerCase().split('').filter(char => alphaNum.includes(char));
  
  //use multiple pointers
  let left = 0;
  let right = filteredArr.length - 1;

  while (left < right) {
    if (filteredArr[left] === filteredArr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}



palindrome("eye");
