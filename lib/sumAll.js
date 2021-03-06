var reduce = require('./reduce');
var isNumber = require('./isNumber');

function sumIfIsNumber (a, b) {
  return isNumber(b) ? a + b : a;
}

function sumAll (xs) {
  return reduce(sumIfIsNumber, xs, 0);
}

module.exports = sumAll;
