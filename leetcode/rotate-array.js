// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function(nums, k) {
//   // iterate over nums arr up to k times
//     // removed = last number in arr nums.pop()
//     // rotated.unshift(removed)
//   //return nums
  
//   for (let i = 0; i < k; i++) {
//     let removed = nums.pop();
//     nums.unshift(removed);
//   }
  
//   return nums;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // set variable 'mod' to be k % length of array
  //push copy of splice of array from beginning to mod

  let mod = k % nums.length;
  nums.push(...nums.splice(0, nums.length - mod));

  return nums;
};