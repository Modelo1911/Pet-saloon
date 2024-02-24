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


//function showNotifications(msg,type){
    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML=`<p class="${type}">${msg}</p>`;

    setTimeout(function(){
        getE("notifications").classList.add("hidden");
    },3000);
}


//var: will declare a variable through out the page
//let: will declare a variable in its specific code block
//const: will lock a variable and keep it there
//this: refers to an object that is executing the code it is attached to

//JSON: An object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

//JSON.stringify: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

//JSON.parse: Converts a JavaScript Object Notation (JSON) string into an object.
