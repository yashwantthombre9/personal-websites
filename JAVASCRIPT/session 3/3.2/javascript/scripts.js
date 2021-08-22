
function displayMsg(first,second){
    document.write("The two elements whose sum is zero or closest to zero are "+first+" and "+second+"<br>");
}

function addition(first,second){
    return first+second;
}


function calculatePairs(arr){
    for(let start = 0;start<arr.length-1;start++){
        for(let end = start+1;end<arr.length;end++){
        let add = addition(arr[start],arr[end]);
        if((add <=5 && add >=0) || add>=-5 && add<=0){
            displayMsg(arr[start],arr[end]);
            }
        }
    }
}


let inputString = window.prompt("enter numbers");
// let checkedString = 
var arr = inputString.split(',').map(function(item) {
    return parseInt(item, 10);
});

arr.sort();
window.alert(arr);
calculatePairs(arr);

