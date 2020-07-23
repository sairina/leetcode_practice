/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
  let maxProfit = 0;
  let left = 0;
  let right = 1;
  
  while (right <= prices.length) {
    if (prices[right] > prices[left]) {
      
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
      
      right++;
      
    } else {
      left++;
      right = left + 1;
    }
  }
  
  return maxProfit;
};