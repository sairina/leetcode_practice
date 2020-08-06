/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

  let duplicates = [];
  let numObj = {};
  for (let num of nums) {
    numObj[num] = numObj[num] + 1 || 1;
  }
  
  for (let key in numObj) {
    if (numObj[key] === 2) {
      duplicates.push(key);
    }
  }
  
  return duplicates;
};