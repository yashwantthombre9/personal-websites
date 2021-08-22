
// 1. Seconds lived.
// 2. Hours lived
// 3. Days lived - true;
// 4. Weeks lived
// 5. Months lived - true;

function printMsg(seconds,hours,days,weeks,months){
    console.log(`he lived with ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, and ${seconds} seconds`);
}

function findParameters(userDate,currDate){
    let  arr =  userDate.split('-');
    // currDate = Number(currDate);
    let currYear = Number(currDate.getFullYear());
    let currMonth = Number(currDate.getMonth());
    currMonth += 1;
    let currDay = Number(currDate.getDate());

    let userYear = Number(arr[2]);
    let userMonth = Number(arr[0]);
    let userDay = Number(arr[1]);

    let yearsLived = Number(currYear) - Number(userYear);
    let monthsLived = (yearsLived*12)+(currMonth-userMonth);
    let daysLived = Number(currDay - userDay)+(yearsLived*365)+((currMonth-userMonth)*30)+parseInt((currMonth-userMonth)/2);
    let weeksLived = parseInt(daysLived/7);
    let hoursLived = daysLived*24;
    let secondsLived = hoursLived*3600;
    printMsg(secondsLived,hoursLived,daysLived,weeksLived,monthsLived);
    
}

let userBirthDate = window.prompt("Enter date of birth (Format - MM-DD-YYYY)");
let currDate = new Date();


findParameters(userBirthDate,currDate);