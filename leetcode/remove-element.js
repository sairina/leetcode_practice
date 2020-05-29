// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//   // left pointer at 0
  
//   // fast pointer iterates over array starting at 0
//     // if fast pointer is not val
//       // swap
//       //increase left pointer
  
//   let left = 0;
  
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== val) {
//       [nums[right], nums[left]] = [nums[left], nums[right]];
//       left++;
//     }
//   }
  
//   return left;
// };

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // iterate over nums backwards
    // if element is val
      // splice
  // return length
  
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  
  return nums.length;
};