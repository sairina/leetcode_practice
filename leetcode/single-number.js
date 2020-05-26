/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let numsObj = freqCounter(nums);
  
  for (let key in numsObj) {
    if(numsObj[key] === 1) {
      return key;
    }
  }
  
};

function freqCounter(arr) {
  let freq = {};
  for (let num of arr) {
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  }
  return freq;
}
