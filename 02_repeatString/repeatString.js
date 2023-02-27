const repeatString = function(str, numb) {
    if(numb < 0){
        return("ERROR");
    }

    let strRet = "";
    for(let i = 0; i < numb; i++){
        strRet = str + strRet;
    }
    return strRet;
};

// Do not edit below this line
module.exports = repeatString;
