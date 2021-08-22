


function printMsg(seconds,hours,days,weeks,months){
    document.write(`he lived with ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, and ${seconds} seconds<br>`);
}
var flag   = false;
var yearsLived = 0,monthsLived = 0,daysLived = 0,weeksLived = 0,hoursLived = 0,secondsLived = 0;
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
    if(flag == false){
     yearsLived = Number(currYear) - Number(userYear);
     monthsLived = (yearsLived*12)+(currMonth-userMonth);
     daysLived = Number(currDay - userDay)+(yearsLived*365)+((currMonth-userMonth)*30)+parseInt((currMonth-userMonth)/2);
     weeksLived = parseInt(daysLived/7);
     hoursLived = Number(daysLived*24);
     secondsLived = Number(hoursLived*3600);
     flag = true;
    }
    else{
        secondsLived += 1;
        minutesLived = parseInt(secondsLived/60);
        hoursLived = parseInt(minutesLived/60);
        daysLived = parseInt(hoursLived/24);
        weeksLived = parseInt(daysLived/7);
        let thirty  = parseInt(daysLived/31) - parseInt(daysLived/30);
        monthsLived = parseInt(daysLived/30) + thirty;


    }
    console.log(minutesLived);
    printMsg(secondsLived,hoursLived,daysLived,weeksLived,monthsLived);
    
}

let userBirthDate = window.prompt("Enter date of birth (Format - MM-DD-YYYY)");


setInterval(function(){findParameters(userBirthDate,new Date())},1000);
