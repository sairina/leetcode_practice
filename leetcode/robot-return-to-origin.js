var judgeCircle = function(moves) {
  let freqCounter = {
    U: 0,
    D: 0,
    L: 0,
    R: 0
  }
  
  for (let step of moves) {
    freqCounter[step] += 1;
  }
  
  return (freqCounter.U === freqCounter.D && freqCounter.R === freqCounter.L);
};