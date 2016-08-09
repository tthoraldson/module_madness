//MODULE 2

exports.toUSD = function(num){
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};
