
let freqList = new Map();

function charFreq(inputString){
    for(let startIndex = 0;startIndex<inputString.length;startIndex++){
        let character = inputString[startIndex];
        if(freqList.get(character) == undefined){
            freqList.set(character,1);
        }
        else{
            freqList.set(character,freqList.get(character)+1);
        }
    }
}

let input = window.prompt("Enter input string");
charFreq(input);
// document.write(freqList.get('a'),
// freqList.get('b'),
// freqList.get('c'));

for(let [key,value] of freqList){
    document.write(key+" : "+value+"<br>");
}