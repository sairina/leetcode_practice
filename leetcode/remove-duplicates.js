var removeDuplicates = function(nums) {
  let left = 0;
  
  for(let right = 1; right < nums.length; right++){
    if (nums[left] !== nums[right]) { //if not equal, increment left; set left equal to right val
      left++;
      nums[left] = nums[right];
    }
    // otherwise, keep going through array length
  }
  return left + 1;
  
};