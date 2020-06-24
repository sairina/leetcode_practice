/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  //set var to keep track of number of zeros in nums1
  //iterate backwards from nums1, since we know zeros are at the end
    //if element is zero
      //add that to var
      //if number of zeros is equal to n
        //splice at that index (length of nums1 - n)
  //spread and push nums2 into nums1
  //sort nums1
  
  let numZeros = 0;
  
  for (let i = nums1.length; i >= 0; i--){
    if (nums1[i] === 0) {
      numZeros++;
      if (numZeros === n) {
        nums1.splice(nums1.length - n);
      }
    }
  }
  
  nums1.push(...nums2);

  return nums1.sort((a, b) => a - b);

};