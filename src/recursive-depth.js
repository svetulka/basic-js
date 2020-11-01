const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1;
    this.depthCount = 1;
  }

  calculateDepth(arr) {
    arr.forEach(elem => {
      if (typeof (elem) === 'object') {
        this.counter++
        this.calculateDepth(elem)
      }
    })
    if (this.counter > this.depthCount) {
      this.depthCount = this.counter
    }
    this.counter = 1
    return this.depthCount
  }

};
