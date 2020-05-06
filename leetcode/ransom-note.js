/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var freqCounter = function(str) {
  let freq = {};
  
  for (let char of str) {
    if (freq[char] === undefined) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }
  return freq;
};

var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  
  //make freqcounter for magazine
  let magazineObj = freqCounter(magazine);
  
  //subtract freqcounter for ransomnote from magazine
  for (let char of ransomNote) {
    if (magazineObj[char] !== undefined) {
      magazineObj[char]--;
    } else {
      magazineObj[char] = 0;
      magazineObj[char]--;
    }
  }
    
  //if freqcounter value for magazine has any negatives
    //return false
  for (let key in magazineObj) {
    if (magazineObj[key] < 0) {
      return false;
    }
  }
  return true;
  
};