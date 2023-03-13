/*
const palindromes = function (string) {
    punc = ["!", ",", "."]
    for(let i = 0; i < string.length/2; i++){
        //console.log(string[string.length - 1 - i]);
        if(string[i].match(["!"]) || string[i].match([","]) || string[i].match(["."]) || string[string.length - 1 - i].match(["!"]) || string[string.length - 1 - i].match([","]) || string[string.length - 1 - i].match(["."])){
            
        }else if(string[i] != string[string.length - 1 - i]){

            return false;
        }
    }
    return true;
};
*/
const palindromes = function (string){
    punc = ["!", ",", "."];
    let eofString = string.length;

    for(let i = 0; i < eofString/2; i++){
        if(string[i] == punc[0] || string[i] == punc[1] || string[i] == punc[2]){
            i++;
        }else if(string[string.length - 1 - i] == punc[0] || string[string.length - 1 - i] == punc[1] || string[string.length - 1 - i] == punc[2]){
            
        }
    }
}

// Do not edit below this line
module.exports = palindromes;
