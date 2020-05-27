/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  //create freqCounter
  //if value in counter...then subtract
  //if all keyvalue pairs are 0 return true, else false
  
  let freq = {};
  
  for (let letter of s){
    if (freq[letter] === undefined){
      freq[letter] = 1;
    } else {
      freq[letter]++;
    }
  }
  
  for(let letter of t){
    if(freq[letter] === undefined){
      freq[letter] = 1;
    } else {
      freq[letter]--;
    }
  }
  
  for(let key in freq) {
    if (freq[key]){
      return false;
    }
  }
  
  return true;
};