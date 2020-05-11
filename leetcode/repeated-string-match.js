/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = (A, B) => {
  let count = Math.ceil(B.length / A.length);
  let str = A.repeat(count);
  
  return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1;
};