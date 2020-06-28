function rot13(str) { 
  let ciphered = '';

  for (let i = 0; i < str.length; i++){ 
    let letterCode = str.charCodeAt(i);   
    if (letterCode > 77 && letterCode < 91) {
      letterCode -= 13;
    } else if (letterCode > 64 && letterCode <= 77){
      letterCode +=13;
    }
      ciphered += String.fromCharCode(letterCode);
  }

  return ciphered;
}

rot13("SERR PBQR PNZC");
