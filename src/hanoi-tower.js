const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minMoves = 2 ** disksNumber - 1;
  let secs = Math.floor(minMoves * 60 * 60 / turnsSpeed);

  return obj = {turns: minMoves, seconds: secs};

};
