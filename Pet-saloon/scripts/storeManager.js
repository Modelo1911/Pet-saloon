function saveItem(item){
    let itemsArray = readItems();//getting local storage data
    itemsArray.push(item);//will add the new item to the array
    let val = JSON.stringify(itemsArray);//this is the string
    localStorage.setItem("services",val);
}

function readItems(){
    //getting items from local storage
    let data=localStorage.getItem("services");
    if(!data){//if it is not data
        return [];
    }else{
        //if there is data
        let list = JSON.parse(data);
        return list;
    }
}





