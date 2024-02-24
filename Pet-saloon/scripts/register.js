let petID=0;
//constructor
function Pet(n,a,g,b,s,t,p){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
    this.payment=p
    this.id=petID++;//this will add an internal ID
}



function getE(id){
    return document.getElementById(id);
}

//get elements from HTML
let inputName= getE("txtName");
let inputAge= getE("txtAge");
let inputGender= getE("txtGender");
let inputBreed= getE("txtBreed");
let inputService= getE("txtService");
let inputType= getE("txtType");
let inputPayment= getE("txtPayment")

function isValid(aPet){
    let validation=true;
    //clear the style
    //document.querySelectorAll("inputs");
    getE("txtName").classList.remove("alert-error");
    getE("txtAge").classList.remove("alert-error");
    getE("txtGender").classList.remove("alert-error");
    getE("txtBreed").classList.remove("alert-error");
    getE("txtService").classList.remove("alert-error");
    getE("txtType").classList.remove("alert-error");
    getE("txtPayment").classList.remove("alert-error")

    if(aPet.name==""){
        //the part is not valid
        validation=false;
        getE("txtName").classList.add("alert-error");
    }
    if(aPet.age==""){
        validation=false;
        getE("txtAge").classList.add("alert-error");
    }
    if(aPet.gender==""){
        validation=false;
        getE("txtGender").classList.add("alert-error");
    }
    if(aPet.breed==""){
        validation=false;
        getE("txtBreed").classList.add("alert-error");
    }
    if(aPet.service==""){
        validation=false;
        getE("txtService").classList.add("alert-error");
    }
    if(aPet.type==""){
        validation=false;
        getE("txtType").classList.add("alert-error");
    }
    if(aPet.payment==""){
        validation=false;
        getE("txtPayment").classList.add("alert-error");
    }
    return validation;
}

function showNotifications(msg,type){
    $("#notifications").slideDown(1500);
    getE("notifications").innerHTML=`<p class="${type}">${msg} </p>`;
    $("#notifications").slideUp(2800);
}

function register(){
    //1 get the values
    //2 create th obj using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputPayment.value);
    console.log(newPet);

if(isValid(newPet)==true){
    //3 push newPets to array
    salon.pets.push(newPet);
    //4 call for display function
    saveItem(newPet,"petsDB");
    displayPetCards();
    //5 update display info
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
    inputPayment.value="";
    
        showNotifications("Successful Registration","success");
    }else{
        showNotifications("Please fill in all fields","alert-error");
    }
}
function deletePet(petID){
    let deleteIndex;//to get the index of the array (position of obj)
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        if(pet.id==petID){
            deleteIndex=i;
            break;
        }
    }
    getE(petID).remove();//remove from html
    salon.pets.splice(deleteIndex,1);//remove the pet from the array
}
function getServices(){
    let servicesList = readItems("services");
    for(let i=0;i<servicesList.length;i++){
        let service = servicesList[i];
        $("#txtService").append(
            `<option value="${service.description}">${service.description}</option>`
        );
    }
}

function init(){
// creating predefined odjects

let pet1=new Pet("Butterball",3,"Male","Golden Retriever","Bath","Dog","Check");
let pet2=new Pet("Daisy",8,"Female","Calico","Vaccine","Cat","Cash");
let pet3=new Pet("Beatbox",1,"Female","Taby","Bath","Cat","Credit");
let pet4=new Pet("Voodoo",4,"Female","Orange","Bath","Cat","Honor System");
let pet5=new Pet("Ranger",4,"Male","Orange","Nail Clipping","Cat","Honor System");
let pet6=new Pet("Jack",5,"Male","Beagal","Grooming","Dog","Cash");
salon.pets.push(pet1,pet2,pet3,pet4,pet5,pet6);
getServices();
displayPetCards();
}
window.onload=init;//wait to render to HTML

