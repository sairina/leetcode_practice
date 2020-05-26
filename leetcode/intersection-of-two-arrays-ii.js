/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let combined = [];
  let shorter;
  let longer;
  
  //const shorter = nums1.length < nums2.length ? a : b;
  //const longer = nums1 === small ? b : a;
  
  if (nums1.length < nums2.length || nums1.length === nums2.length) {
    shorter = nums1;
    longer = nums2;
  } else {
    shorter = nums2;
    longer = nums1;
  }
  
  for (let i = 0; i < shorter.length; i++) {
    for (let j = 0; j < longer.length; j++) {
      if (shorter[i] === longer[j]) {
        combined.push(longer.splice(j, 1));
        break;
      }
    }
  }
  return combined;
};