/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0;
  let result = '';
  
  // use multiple pointers, both starting at the right-hand side
  let num1Pointer = num1.length - 1;
  let num2Pointer = num2.length - 1;
  
  while(num1Pointer >= 0 || num2Pointer >= 0) {
    // hold onto 'sum' value
    let sum = 0;
    let numberOne = num1Pointer >= 0 ? Number(num1[num1Pointer--]) : 0;
    let numberTwo = num2Pointer >= 0 ? Number(num2[num2Pointer--]) : 0;
    
    //add numberOne and numberTwo together
    sum += numberOne + numberTwo + carry;
    //reset carry to 0
    carry = 0;
    
    //check if sum needs a "carry the one"
    if (sum > 9) {
      sum %= 10; //to get the ones place
      carry++;
    }
    
    //add it to the result (will get coerced into string)/order matters;
    result = sum + result;
  }
  
  //check if there is a carry at the end
  if (carry > 0) {
    result = carry + result;
  }
  
  return result;
};