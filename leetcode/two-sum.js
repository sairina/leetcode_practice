/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hashed = {};
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    if (hashed[nums[i]] !== undefined) {
      return [hashed[nums[i]], i];
    }
    
    hashed[complement] = i;
  }
};