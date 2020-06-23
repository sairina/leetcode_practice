/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  //iterate over nums
    //turn element into string 
    //check if length % 2 is 0
      //add to count
  
  //return count
  
  let count = 0;
  
  for (let num of nums) {
    let digit = num.toString();
    if (digit.length % 2 === 0) {
      count++;
    }
  }
  return count;
};