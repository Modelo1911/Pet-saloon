var globalVar = "I'm in global scope";

function myFunction(){
    //This can access globalVariable
    console.log(globalVar);
}

myFunction();

function myFunction2() {
    var localVar = "I'm in local scope";
    console.log(localVar);

    if (true){
        let blockVar = "I'm in the block scope";
        console.log(blockVar);
    }
    
    //Accessing blockVariable here would result in an error
}

myFunction2();


function planeTicket(destination,price){
    console.log("Traveling to ..." + destination);
    return price*1.11;
}

function calculateProfits(){
    var price1=placeTicket("Italy",100);
    var price2=placeTicket("Amsterdam",200);
    var price3=placeTicket("Barcelona",300);

    console.log(price1+price2+price3);
}

calculateProfits();


{
    name:"Butterball",
    age:3,
    gender:"Male",
    service:"Bath", 
    breed:"Golden Retiever"
},
{
    name: "Buzball",
    age: 8,
    gender:"female",
    service: "Cat Grooming",
    breed: "Calico American Short Hair"
},
{
    name:"Beatbox",
    age:1,
    gender:"Female",
    service:"Vaccine",
    breed:"Orange Munchkin"
}

    
