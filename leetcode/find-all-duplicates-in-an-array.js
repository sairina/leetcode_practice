/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let dup = [];
  let sorted = nums.sort((a,b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      dup.push(sorted[i]);
    }
  }
  return dup;
};