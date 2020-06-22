/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  //set count var
  //set maxCount var
  //iterate through array
    //if element is 1
      //add to count
        //if count is greater than maxCount
          //maxCount set to count !! USE Math.max(count,maxCount);
    //else
      //reset count to 0
  //return maxCount
  
  let count = 0;
  let maxCount = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 0;
    }
  }
  return maxCount;
};