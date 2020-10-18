const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date) {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      let monthNum = date.getMonth();
      if ((0 <= monthNum) && (monthNum <= 1) || (monthNum == 11)) {
        return 'winter';
      } else if ((2 <= monthNum) && (monthNum <= 4)) {
        return 'spring';
      } else if ((5 <= monthNum) && (monthNum <= 7)) {
        return 'summer'
      } else if ((8 <= monthNum) && (monthNum <= 10)) {
        return 'fall';
      }
    } else {
      throw new Error('THROWN');
    }
  } else {
    return 'Unable to determine the time of year!';
  }
};
