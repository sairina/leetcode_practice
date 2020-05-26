/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let noDuplicates = [...new Set(nums)]; //copy of nums, but as a Set
  return noDuplicates.length !== nums.length;
  
//   let freq = {};
  
//   for (let num of nums) {
//     if (freq[num] === undefined){
//       freq[num] = 1;
//     } else {
//       freq[num]++;
//     }
//   }
  
//   for (let key in freq) {
//     if (freq[key] > 1) {
//       return true;
//     }
//   }
  
//   return false;
};