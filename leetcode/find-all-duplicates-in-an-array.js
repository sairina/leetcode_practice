/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let duplicates = [];
  let sorted = nums.sort((a,b) => a - b);
  let left = 0;
  let right = 1;
  
  while (right < sorted.length) {
    if (sorted[left] !== sorted[right]) {
      left++;
      right++;
    } else {
      duplicates.push(sorted[left]);
      left += 2;
      right += 2;
    }
  }
  return duplicates;
};