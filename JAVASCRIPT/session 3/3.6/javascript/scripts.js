


let dailyCustomers = ["yashwant","jaywant","shraddha","lata","santosh"];
let productDetails = {
    "oil":150,
    "sugar":35,
    "parle_g":10,
    "milk":25
};

function calcCost(price,quantity){
    // price = Number(price);
    // quantity = Number(quantity);
    return price*quantity;
}

function calcTotalDiscount(totalCost,discount,quantity,extraQuant){
    
    if(quantity >= extraQuant)
    {
        discount += 2;
    }
    let discountPrice = (totalCost*discount)/100;
    // console.log((totalCost*discount)); 
    return discountPrice;
}

function displayMsg(product,quantity,prodCost,purchasingCost){
    console.log(`product name : ${product}`);
    console.log(`quantity : ${quantity}`);
    console.log( `Total product Cost : ${prodCost}`);
    console.log(`Total purchasing cost with discount : ${prodCost-purchasingCost}`);
}

function calcDiscount(custName,prodName,quantity){
    

    let dailyCustDiscount = 5;
    let newCustDiscount = 2;
    let extraQuantity = 5;
    let extraQuantDiscount = 2;
    let flag = false;
    let totalDiscount = 0;

    for ( let value in dailyCustomers){
        
        if(dailyCustomers[value] == custName){
            flag = true;
            totalDiscount += dailyCustDiscount;
            let price = productDetails[prodName];
            let totalProdCost = calcCost(price,quantity);
            let discountCost = calcTotalDiscount(totalProdCost,totalDiscount,quantity,extraQuantity);
            displayMsg(prodName,quantity,totalProdCost,discountCost);
        }
        
    }
    if(flag == false){
        totalDiscount += newCustDiscount;
            let price = productDetails[prodName];
            let totalProdCost = calcCost(price,quantity);
            let discountCost = calcTotalDiscount(totalProdCost,totalDiscount,quantity,extraQuantity);
            displayMsg(prodName,quantity,totalProdCost,discountCost);
    }
}

let customer = window.prompt("Enter customer name");
let product = window.prompt("Enter product Name");
let quantity = window.prompt("Enter quantity of product");
quantity = Number(quantity);
calcDiscount(customer,product,quantity);


