const convertToCelsius = function(num) {
  value = ((num - 32) * .5556);
  return Math.round(value * 10)/(10);
};

const convertToFahrenheit = function(num) {
  value = ((num * 1.8) + 32);
  return Math.round(value * 10)/(10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
