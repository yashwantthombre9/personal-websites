
let randomRanks = [];
let userInput = window.prompt("Enter number of people");
let values = new Set();
for(let index = 1;index<=(userInput+10);index++)
{
    let value = ((Math.ceil(Math.random()*(index+1)))%userInput);
    if(value == 0)
    value = userInput;
    values.add(value);
}
values = Array.from(values);

for(let start = 0;start<userInput;start++){
    window.alert("person no. : "+(start+1)+", Rank is : "+values[start]);
}

