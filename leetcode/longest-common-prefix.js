/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs.length) return '';
  
  let shortestStr = strs.sort((a, b) => a.length - b.length)[0];
  
  //iterate through shortest string
  for (let i = 0; i < shortestStr.length; i++){
    //iterate through array of strings
    for (let str of strs) {
      //if letter in each of the array elements is not in the same index as shortest string
      if (str[i] !== shortestStr[i]) {
        //return the length so far
        return str.slice(0, i);
      }
    }
  }
  
  //otherwise return shortestStr
  return shortestStr;
};