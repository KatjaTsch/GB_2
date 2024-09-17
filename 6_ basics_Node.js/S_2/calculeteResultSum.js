const NP = require("number-precision");

function calculeteResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => NP.plus((acc, purchase)), 0);

  total = NP.times(total, discount);
  return total;
}
modules.exports.calculeteResultSum = calculeteResultSum;
