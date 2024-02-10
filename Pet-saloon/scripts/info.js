let salon={//object
    name:"The Fashion Pet", 
    phone:"123-456-7891",
    address:{
        street:"Palm St",
        number:"234-J", 
        zip:"96654"
    },
    pets:[]//array
}



function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name}. We located on ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    `;
}

displayFooterInfo();