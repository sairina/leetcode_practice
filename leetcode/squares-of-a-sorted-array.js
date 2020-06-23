/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  //map to double; then sort
  
  return A.map(num => num * num).sort((a, b) => a - b);
};