const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = '';
  if (members.length>0 && (typeof(members) == 'object') || typeof(members) == 'array') {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        let name = members[i].trim();
        result = result + name[0];
      }
    };
    return result.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
};
