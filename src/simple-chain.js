const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!arguments.length) {
			this.chain.push('(  )');
		} else {
			this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
			Number.isNaN(position) ||
			position.toString().includes('.') ||
			this.chain[position] === undefined
		) {
      this.chain = [];
      throw new Error();
		} else {
			this.chain.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    const str = this.chain.join('~~');
		this.chain = [];

		return str;
  }
};

module.exports = chainMaker;
