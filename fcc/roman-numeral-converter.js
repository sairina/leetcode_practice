function convertToRoman(num) {
  let romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10, 
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  //iterate through romanNum
    //while it's less than or equal to num
      //add key to roman
      //subtract from romanNum val
  
  let roman = '';

  for (let key in romanNum) {
    while (romanNum[key] <= num) {
      roman += key;
      num -= romanNum[key];
    }
  }
  return roman;
}

convertToRoman(36);
