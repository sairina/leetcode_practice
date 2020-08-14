/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (name === typed) return true;
  
  let typedArr = typed.split('');

  for (let i = 0; i < name.length; i++) {
    let typedLetterCount = 0;
    
    while (name[i] === typedArr[0]) {
      typedLetterCount++;
      typedArr.splice(0, 1);
      
      if (typedLetterCount === 1 && name[i] === name[i+1]) break;
    }
    
    if (typedLetterCount === 0) return false;
  }
  
  return typedArr.length ? false : true;
};