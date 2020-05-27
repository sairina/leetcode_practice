/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //iterate through nums
    //set currNum to be nums[i]
    //iterate through rest of nums
      //if currNum + j is target
        //return [i, j]
  
  // for (let i = 0; i < nums.length; i++) {
  //   let currNum = nums[i];
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (currNum + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    if(map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
};