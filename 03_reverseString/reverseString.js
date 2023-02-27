const reverseString = function(str) {
    for(let i = 0; i < (str.length/2); i++){
        /*
        temp = str[i];
        console.log(temp);
        str[i] = str[str.length - i];
        console.log(str[i]);
        str[str.length - i] = temp;
        */

        return str.split("").reverse().join("");
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
