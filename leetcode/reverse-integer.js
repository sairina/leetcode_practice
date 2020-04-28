var reverse = function(x) {
  //absval of int, int to string, string to arr, array to reverse, reverse to join
  let reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  
  if (reversedInt > 2**31) return 0;
  
  return reversedInt * Math.sign(x);
}