
function saveItem(item,key){
    let itemsArray = readItems();//getting local storage data
    itemsArray.push(item);//will add the new item to the array
    let val = JSON.stringify(itemsArray);//this is the string
    localStorage.setItem(key,val);
}

function readItems(key){
    //getting items from local storage
    let data=localStorage.getItem(key);
    if(!data){//if it is not data
        return [];
    }else{
        //if there is data
        let list = JSON.parse(data);
        return list;
    }
}


