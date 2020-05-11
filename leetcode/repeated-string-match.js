/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = (A, B) => {
  let count = Math.ceil(B.length / A.length);
  let str = A.repeat(count);
  
  if (str.includes(B)) {
    return count;
  } else if ((str + A).includes(B)) {
    return count + 1;
  } else {
    return -1;
  }
};