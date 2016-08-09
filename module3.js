//MODULE 3
var module1 = require('./module1.js');
var module2 = require('./module2.js');

exports.finalNumber = function(){
  var number = module1.randomNumber();
  return module2.toUSD(number);
}

exports.printResult = function(USDstring){
  return 'Account balance: \n' + USDstring;
}

// module.exports = finalNumber, printResult;
