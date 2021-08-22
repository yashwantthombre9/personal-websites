let firstName = window.prompt("Enter your First Name");
let lastName  = window.prompt("Enter your Last Name");
let gender    = window.prompt("Enter your Gender (M/F)");
let dateOfApplication = window.prompt("Enter Date of license application\nFormat - 'YYYY-MM-DD'");
let birthDate = window.prompt("Enter your date of birth \nFormat - 'YYYY-MM-DD'");

let firstCondition = firstName[0] + lastName[0];

let secondCondition  =  birthDate.split("-");
let birthYear = secondCondition[0];

let secondCondition2 = dateOfApplication.split("-");
let applicationYear = secondCondition2[0];

let yearsAdd = Number(birthYear)+Number(applicationYear);

let STR1 = firstCondition+yearsAdd;
let lastTwo = firstName[firstName.length-2] + firstName[firstName.length-1]+ lastName[lastName.length-2]+lastName[lastName.length-1];
let age = new Date().getFullYear() - Number(birthYear);
STR1 += lastTwo+age;
console.log("final license number is :",STR1);
window.alert("Your License number is :");
window.alert(STR1);





