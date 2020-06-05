/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  //set arr length to be current arr.length
  //iterate backwards
    //if zero
      //shift to the right
      //add zero to that index AKA splice
  //set arr length to the var above
  
  let currentLeng = arr.length;
  
  for (let i = currentLeng - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
    }
  }
  
  arr.length = currentLeng;
};