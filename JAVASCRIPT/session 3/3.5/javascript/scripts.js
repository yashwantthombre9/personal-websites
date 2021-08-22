let data = {
  TCS: {
    revenue: 1000000,
    expenses: { salaries: 30, rent: 20, utilites: 15 },
    employees: [
      {
        name: "Joe",
        age: 30,
        role: "Admin",
      },
      {
        name: "34",
        age: 40,
        role: "Tester",
      },
      {
        name: "Sherlock",
        age: 45,
        role: "Programmer",
      },
    ],
  },
  GGK: {
    revenue: 2000000,
    expenses: { salaries: 40, rent: 30, utilites: 20 },
    employees: [
      {
        name: "Joe",
        age: 30,
        role: "Admin",
      },
      {
        name: "344",
        age: 40,
        role: "Tester",
      },
      {
        name: "Sher",
        age: 45,
        role: "Programmer",
      },
    ],
  },

  Osmosys: {
    revenue: 1000000,
    expenses: { salaries: 30, rent: 20, utilites: 15 },
    employees: [
      {
        name: "Joe",
        age: 10,
        role: "Admin",
      },
      {
        name: "34",
        age: 20,
        role: "Tester",
      },
      {
        name: "Sherlock",
        age: 75,
        role: "Programmer",
      },
    ],
  },
};
var largest = Number.MIN_VALUE;
var smallest = Number.MAX_VALUE;
var largestName;
var smallestName;
var rev;
var exp;
var flag  = false;
var moreProfit = Number.MIN_VALUE;
var moreProfitName;
function empWithAgeGreater(choice,inputAge) {

  for (const key of Object.keys(data)) {
    //    console.log(key);
    rev = 0;
    exp = 0;
    rev = data[key].revenue;
    flag = false;
    for (const key1 of Object.keys(data[key])) {
      //    console.log(data[key][key1]);
      
      for (const key2 of Object.keys(data[key][key1])){
        
        for (const key3 of Object.keys(data[key][key1][key2]))
        {
        if(choice == 1){
          if (data[key][key1][key2].age <= inputAge) {
            console.log(
              `employee-name : ${data[key][key1][key2].name} and company is : ${key}`
            );
          }
        }
        else if ( choice == 2){
            if (data[key][key1][key2].age >= inputAge) {
                console.log(
                  `employee-name : ${data[key][key1][key2].name} and company is : ${key}`
                );
              }
        }
        else if(choice == 3){
            if(data[key][key1][key2].age > largest){
            largest  = data[key][key1][key2].age;
            largestName = data[key][key1][key2].name;
            }
            if(data[key][key1][key2].age < smallest){
            smallest = data[key][key1][key2].age;
            smallestName = data[key][key1][key2].name;
            }
        }
        else if(choice == 4){
            console.log(`employees in ${key} is : ${data[key][key1][key2].name}`)

        }


        }
        if(flag == false)
        if(choice == 5){
            exp = data[key][key1].salaries;
            exp += data[key][key1].rent;
            exp += data[key][key1].utilites;
            let profit = rev-exp;
            if(profit>moreProfit){
            moreProfit  = profit;
            moreProfitName  = key;
            }
            console.log(`profit in ${key} is ${rev-exp}`);
            flag = true;
        }
    }
        
    }
    if(choice == 3){
    console.log(`youngest employee in :${key} is ${smallestName}`);
    console.log(` and oldest employee in ${key} is ${largestName}`);
    }
    
  }
  if(choice == 5){
    console.log(`maximum profit is of ${moreProfitName} and which is ${moreProfit}`);
}
}



let choice = window.prompt(
  "Choose - \n1)Print the name of employees in all the companies whose age is less than or equal to X\n2)Print the name of employees in all the companies whose age is greater than X\n3)Print the youngest and oldest person in each company.\n4)Print all the names of testers, programmers and admins.5) Calculate profit (revenue - expenses) and print company wise profits. "
);

let inputAge;
if(choice <= 2)
inputAge = window.prompt("Enter Age");
empWithAgeGreater(choice,inputAge);
