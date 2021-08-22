
function printPair(first,second){
    document.write(first+" : "+second+"<br>");
}

function printOne(one){
    document.write(one+"<br>");
}

function addition(first,second){
    return (first+second);
}

function calculatePairs(arr,len,sum){
    
        for(let start = 0;start<len-1;start++){
            for(let end = start+1;end<len;end++){
                let add = addition(arr[start],arr[end]);
                if(add == sum){
                    printPair(arr[start],arr[end]);
                }
                if(arr[start] == sum)
                    printOne(sum);
            }
        }
        
}

let inputString = window.prompt("Enter the values");
let arr = inputString.split(',').map(function(item){
    return parseInt(item,10);
});

arr.sort();
let len = arr.length;
let sum = window.prompt("Enter the sum value");
calculatePairs(arr,len,sum);

