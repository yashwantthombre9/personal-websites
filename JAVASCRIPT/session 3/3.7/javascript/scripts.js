

let stationDistance = {
    "Begumpet":0,
    "Fatehnagar":8,
    "HITECH City":40,
    "Hafizpet":7,
    "Chandanagar":5,
    "Lingampally":7
};

let stations = ["Begumpet","Fatehnagar","HITECH City","Hafizpet","Chandanagar","Lingampally"];


// 1 Km charge  = 2/-
// Trains run to and from : Begumpet Lingampally


// 60 seconds (Lingampally  to Begumpet);
// 72 seconds (Begumpet to Lingampally);

// Train starts at 5AM to 11PM to night;

//I/P
// 1) starting station,ending station,number of tickets.

// O/P - 
// 1) Distance between two stations.
// 2) total fare
// 3) Next Train time.

function findWay(start,end){
    let startPos=-1,endPos=-1;
    for ( let key in stations){
        if(stations[key]  == start)
        startPos = key;
        if(stations[key] == end)
        endPos = key;
    }
    if(startPos == -1 || endPos == -1)
    console.log("Invalid station entered");
    if(startPos < endPos)
    return true;
    else
    return false;
}

function distBetweenTwo(start,end){
    let startDist,endDist;
    for ( let key of Object.keys(stationDistance)){
        if(key == start)
        startDist = stationDistance[key];
        if(key == end)
        endDist = stationDistance[key];
    }
    return endDist-startDist;
}

function calcFare(distance,rate,tickets){
    return distance*rate*tickets;
}

function calcNextTrainTime(distance,way,currentTime){
    let timeNeeded;
    if(way == true)
    timeNeeded = 72;
    else
    timeNeeded = 60;
    let nextTime =  (2*(timeNeeded*distance));
    let nextMinute = parseInt(nextTime/60);
    let nextSeconds = parseInt(nextTime%60);
    if(nextMinute>=60)
    {
        currentTime += parseInt(nextMinute/60);
        nextMinute = parseInt(nextMinute%60);
    }
    if(nextMinute<10)
    nextMinute = `0${nextMinute}`;
    if(currentTime<10)
    currentTime = `0${currentTime}`;
    if(nextSeconds<10)
    nextSeconds = `0${nextSeconds}`;
    return `${currentTime}:${nextMinute}:${nextSeconds}`;
}

function printMsg(start,distance,totalFare,nextTrainTime){
    console.log(`total distance : ${distance}Km`);
    console.log(`total fares : ${totalFare}`);
    console.log(`next train time at station ${start} is  ${nextTrainTime}AM`);
}

let startStation = window.prompt("Enter starting station name");
let endStation = window.prompt("Enter Ending station name");
let totalTickets = Number(window.prompt("Enter total number of tickets"));
let rate = 2;

let way = findWay(startStation,endStation);

let distance = distBetweenTwo(startStation,endStation);
let totalFare = calcFare(distance,rate,totalTickets);
let nextTrainTime = calcNextTrainTime(distance,way,5);

printMsg(startStation,distance,totalFare,nextTrainTime);