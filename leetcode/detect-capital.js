/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let upperWord = word.slice().toUpperCase();
  //if all letters are capitalized, return true
  if (upperWord === word) return true;
  
  //make a copy of the word to all to lowercase
  let lowerWord = word.slice().toLowerCase();
  //make a copy of the word to all lowercase and first letter uppercase
  let capitalizedWord = word.slice().charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
  //if the copies are equal to word, return true
    //else return false
  return (word === lowerWord || word === capitalizedWord);
  
};