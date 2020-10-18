const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformArr = [];

  if (arr && (Array.isArray(arr))) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--discard-next') {
        if (i !== arr.length - 1) {
          i = i + 2;
        }

      } else if (arr[i] == '--discard-prev') {
        if (arr[i] !== arr[0]) {
          transformArr.splice(i-1, 1);
        }

      } else if (arr[i] == '--double-next') {
        if (i !== arr.length - 1) {
          transformArr.push(arr[i+1]);
        }
      } else if (arr[i] == '--double-prev') {
        if (arr[i] !== arr[0]) {
          transformArr.push(arr[i-1]);
        }

      } else {
        transformArr.push(arr[i]);
      }
    }
    return transformArr;
  } else {
    throw new Error('THROWN');
  }
};
