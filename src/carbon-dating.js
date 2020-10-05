const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let s = typeof(sampleActivity);

  if (sampleActivity && Number.isFinite(sampleActivity) && (sampleActivity > 0) && (sampleActivity < 9000) && (s == 'number')) {
    t = Math.log2(MODERN_ACTIVITY/sampleActivity) / k;
    return Math.ceil(t);
  } else {
    return false;
  }

// k=0.693/HALF_LIFE_PERIOD;
// t = Math.log2(MODERN_ACTIVITY/sampleActivity) / k;
};
