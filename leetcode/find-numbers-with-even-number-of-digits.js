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

  return nums.filter(num => num.toString().length % 2 === 0).length;
};