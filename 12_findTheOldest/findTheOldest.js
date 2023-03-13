const findTheOldest = function(arr) {
    let temp = 0;
    let retname = "";
    for(let i = 0; i < arr.length; i++){
        //If there is no death then we will assign yod to yob+current year
        if(!arr[i].yearOfDeath){
            arr[i].yearOfDeath = new Date().getFullYear();
        }
        //After being assigned a yod find the differences
        if((arr[i].yearOfDeath - arr[i].yearOfBirth) > temp){
            temp = arr[i].yearOfDeath - arr[i].yearOfBirth;
            retname = arr[i].name;
        }
    }
    //return the oldest person
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name == retname){
            return arr[i];
        }
    }
    
};

// Do not edit below this line
module.exports = findTheOldest;
