

var birthDays  = {
    "yashwant":"1999-09-07",
    "jaywant":"1999-07-20",
    "shraddha":"1997-08-20",
    "lata":"1975-08-08"
};
var date = new Date();
var sameDay = [];
var index = 0;
function birthdayNextMonth(arr,item){
    let currMonth = date.getMonth();
    let birthMonth = Number(arr[1]);
    if(currMonth+1 == birthMonth-1)
    {
        console.log(`${item} has birthday in next month`);
    }
}

function birthdayOnSunday(arr,item){
    let currDay = new Date();
    currDay.setYear(Number(arr[0]));
    currDay.setMonth(Number(arr[1])-1);
    currDay.setDate(Number(arr[2]));
    curr = currDay.getDay();
    
    if(curr == 6)
    console.log(`${item} has birthday on Sunday`);
}

function birthdayOnSameDay(arr,currItem){
    for ( let item of Object.keys(birthDays)){
        let date = birthDays[item];
        let value = date.split('-');
        if((currItem != item)&&(Number(arr[1]) == Number(value[1])) && (Number(arr[2]) == Number(value[2]))){
            
            console.log(`${currItem} and ${item} have same Birth Date`);
        }
        else
        console.log("No match");
    
    }
}

function birthdayNextDay(arr,item){
    let currDay = new Date().getMonth();
    currDay += 1;
    let months  = (Number(arr[1])-currDay);
    if((months>0)){
        console.log(`${item} has next birth date after ${months}`);
    }
    else
    console.log(`${item} has next birth date after ${(12-currDay)+Number(arr[1])} months`);
}


function oldestFriend(){
    let friend = "all are of same age category";
    let oldest = Number.MAX_VALUE;
    for(let item of Object.keys(birthDays))
    {
    let arr = birthDays[item].split('-');
    if(Number(arr[0])<oldest)
    oldest = Number(arr[0]);
    friend = item;
    }
    console.log(`oldest friend is ${friend}`);
}

function addFriend(name,date){
    birthDays[name] = date;
    console.log(birthDays);
}
oldestFriend();
addFriend("hello","1999-9-9");
let localStore = localStorage;
localStore.clear();
for ( let item of Object.keys(birthDays)){
    localStore.setItem(item,birthDays[item]);
}


for ( let item in localStore)
{
    let value;
    if(localStore.getItem(item) != null){
    value = (localStore.getItem(item));
    let arr = value.split('-');
    birthdayNextMonth(arr,item);
    birthdayOnSunday(arr,item);
    birthdayOnSameDay(arr,item);
    birthdayNextDay(arr,item);
    }
    
}



