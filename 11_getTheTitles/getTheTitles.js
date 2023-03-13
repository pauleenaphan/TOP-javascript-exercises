const getTheTitles = function(arr) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].title);
        arr2[i] = arr[i].title;
    }
    return arr2;
};

// Do not edit below this line
module.exports = getTheTitles;
