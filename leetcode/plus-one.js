var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  
  // if we have [9, 9]
  digits.unshift(1);
  return digits;
  
  
  // doesn't work for numbers that are really large
  // let number = parseInt(digits.join(''));
  // let newNum = number + 1;
  // let arr = newNum.toString().split('');
  // return arr.map(n => parseInt(n));
};