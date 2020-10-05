const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for(let i = 0; i < matrix.length; i++) {
    let elem = matrix[i];
    for(let j = 0; j < elem.length; j++) {
      if (elem[j] === '^^') {
        result = result + 1;
      }
    }
  }
  return result;
};
