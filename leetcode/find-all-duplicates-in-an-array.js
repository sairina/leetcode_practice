/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        duplicates.push(nums[i]);
      }
    }
  }
  return duplicates.sort((a, b) => a - b);
};