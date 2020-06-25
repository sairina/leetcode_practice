function rot13(str) { 
  let newStr = '';

  for (let i = 0; i < str.length; i++){ 
    let letterCode = str.charCodeAt(i);   
    if (letterCode > 77) {
      letterCode -= 13;
    } else {
      letterCode +=13;
    }
      newStr += String.fromCharCode(letterCode);
      console.log(newStr)
  }

  return newStr;
}

rot13("SERR PBQR PNZC");
