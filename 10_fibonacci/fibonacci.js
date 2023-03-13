const fibonacci = function(term) {
    if(term < 1){
        return "OOPS";  
    }else{
        return fibonacci(term-1) + fibonacci(term-2);
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
