/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
 
  let words = S.split(' ');
  let finalWords = [];
  let vowel = 'aeiouAEIOU';
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let goatA = 'a'.repeat(i + 1);
    
    if (vowel.includes(word[0])) {
      let goatWord = word + 'ma' + goatA;
      finalWords.push(goatWord);
    } else {
      let first = word.slice(0, 1);
      finalWords.push(word.slice(1) + first + 'ma' + goatA);
    }
  }
  
  return finalWords.join(' ');
};