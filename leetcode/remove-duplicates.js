// var removeDuplicates = function(nums) {
//   let left = 0;
  
//   for(let right = 1; right < nums.length; right++){
//     if (nums[left] !== nums[right]) { //if not equal, increment left; set left equal to right val
//       left++;
//       nums[left] = nums[right];
//     }
//     // otherwise, keep going through array length
//   }
//   return left + 1;
  
// };

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  // create left and right pointers
  // while right is less than length of array
    // if left pointer is not equal right pointer
      // increase left
      // set left element to what the right is
    // increase right
  
  //return nums
  
  let left = 0;
  let right = 1;
  
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
    right++;
  }
  
  return left + 1;
}
