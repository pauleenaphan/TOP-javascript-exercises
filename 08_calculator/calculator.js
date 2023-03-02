const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
	arr.forEach(item => {
    total += item;
  })
  return total;
};

const multiply = function(arr) {
  //this cannot be 0 bc everything times 0 = 0
  let total = 1;

  for(let i = 0; i < arr.length; i++){
    total *= arr[i];
  }
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if(num == 1 || num == 0){
    return 1;
  }else{
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
