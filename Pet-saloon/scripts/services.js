let petService=0;

var services=[];//this is an array

$(document).ready(function(){
    console.log("Services Page");

    $("#btnService").click(addService);

    displayItems(services);

});

function Service(description,price){
    this.description=description;
    this.price=price;
}

function addService(){
    let inputService = $("#txtService").val();
    let inputPrice = $("#txtPrice").val();
    let newService = new Service(inputService,inputPrice);
    services.push(newService);
    saveItem(newService);
    displayItems(services);
}

function displayItems(items){//items is the object, inside the () is the array aswell
    let htmlList=$("#services");
    htmlList.html("");
    let li;
    for(let i=0;i<items.length;i++){
        let item=items[i];
        li=`<li>${item.description} -$ ${item.price}</li>`;//description is the property
        htmlList.append(li);
    }
}

    function getE(id){
        return document.getElementById(id);
    }

    function isValid(aService){
        let validation=true;

        getE("#txtService").classList.remove("alert-error");
        getE("#txtPrice").classList.remove("alert-error");
    
    if(item.service==""){
        validation=false;
        getE("#txtService").classList.add("alert-error");
    }
    if(item.price==""){
        validation=false;
        getE("#txtPrice").classList.add("alert-error");
    }
    return validation;
}

function showNotifications(msg,type){
    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML=`<p class="${type}">${msg}</p>`;

    setTimeout(function(){
        getE("notifications").classList.add("hidden");
    },4000);
}

