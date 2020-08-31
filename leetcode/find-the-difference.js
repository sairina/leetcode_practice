/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

  let sDict = makeADictionary(s);
  let tDict = makeADictionary(t);

  for (let letter of t) {
    if (sDict[letter] === undefined) {
      return letter;
    } else {
      sDict[letter]--;
    }
  }
  
  for (let key in sDict) {
    if (sDict[key] < 0) return key;
  }
  
};

function makeADictionary(str) {
  let obj = {};
  for (let letter of str) {
    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  return obj;
}