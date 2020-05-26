/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // iterate over nums arr up to k times
    // removed = last number in arr nums.pop()
    // rotated.unshift(removed)
  //return nums
  
  for (let i = 0; i < k; i++) {
    let removed = nums.pop();
    nums.unshift(removed);
  }
  
  return nums;
};