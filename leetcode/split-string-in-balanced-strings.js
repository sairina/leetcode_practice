/* Balanced strings are those who have equal quantity of 'L' and 'R' characters.
* Given a balanced string s split it in the maximum amount of balanced strings.
* Return the maximum amount of splitted balanced strings.
*/

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

var balancedStringSplit = function(s) {
  //let count = 0;
  //let obj = {};
  
  //iterate through string
    //if char exists in obj
      //add 1
    //else
      //add it to obj
  
    //if number of L is equal to number of R
      //increase count

  //return count
  
  let count = 0;
  let counter = {};
  
  for (let char of s) {
    if (counter[char] === undefined){
      counter[char] = 1;
    } else {
      counter[char] += 1;
    }
    
    if (counter.L === counter.R){
      count++;
    }
  }
  
  return count;
};