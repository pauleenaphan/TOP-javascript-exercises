const sumAll = function(num1, num2) {
    let sum = 0;
    if(Number.isInteger(num1) == true && Number.isInteger(num2) == true){
        if(num1 < num2 && num1 > 0){
            for(let i = 0; i < num2; i++){
                sum = (num1 + i) + sum;
            }
        }else if(num2 < num1 && num2 > 0){
            for(let i = 0; i < num1; i++){
                sum = (num2 + i) + sum;
            }
        }else if(num1 < 1 || num2 < 1){
            return("ERROR");
        }
        return sum;  
    }else{
        return("ERROR");
    }
    
};

// Do not edit below this line
module.exports = sumAll;
