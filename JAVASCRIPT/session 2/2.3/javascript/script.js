
let mainString = window.prompt("Enter original string");
var toBeReplaced = window.prompt("Enter string to be replaced");
var replacedBy = window.prompt("Enter string with which original string to be replaced");


let count = 0;
let len = toBeReplaced.length;
let startChar = toBeReplaced[count];
for(let index = 0;index<mainString.length;index++){
    if(mainString[index] == startChar){
        mainString = mainString.substring(0,index) + replacedBy +mainString.substring(toBeReplaced.length+index);
        index = 0;
    }
}

document.write(mainString);
