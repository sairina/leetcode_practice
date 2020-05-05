/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let reversed = '';
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  //iterate through arr
  for (let i = 0; i < S.length; i++) {
    
    //if letter, swap with last element
    if(letters.includes(S.charAt(i))) {
      reversed += S[S.length - (1 + i)];
    } else {
      reversed += S[i];
    }
  }
  
  return reversed;
};