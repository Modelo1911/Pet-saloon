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
    saveItem(newService,"services");
    displayItems();
}

function displayItems(){//items is the object, inside the () is the array aswell       let htmlList=$("#services");
    let items=readItems();
    let htmlList=$("#services");
    htmlList.html("");
    let li;
    for(let i=0;i<items.length;i++){
        let item=items[i];
        li=`<li>${item.description} -$ ${item.price}</li>`;//description is the property
        htmlList.append(li);
    }
}

