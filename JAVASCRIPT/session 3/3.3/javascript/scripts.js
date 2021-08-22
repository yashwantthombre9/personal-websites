
var freqMap = new Map();


function calculateFreq(arr){
    // window.alert(arr.length);
    for(let index  = 0;index<arr.length;index++){
        let num = arr[index];
        if(freqMap.get(num) == undefined)
        freqMap.set(num,1);
        else
        freqMap.set(num,freqMap.get(num)+1);
    }
    
}

function largeFrequency(freqencyMap){
    let largest = Number.MIN_VALUE;
    let keyValue;
    for(let [key,value] of freqMap){
        if(value>largest && value>1){
        largest = value;
        keyValue  = key;
        }
    }
    if(keyValue == undefined)
    return window.Error("No such number exists.");
    else
    return keyValue;
}

let inputString = window.prompt("Enter the values");
let arr = inputString.split(',').map(function(item){
    return parseInt(item,10);
});

calculateFreq(arr); 
document.write("Number which is repeated more than others is : "+largeFrequency(freqMap));

