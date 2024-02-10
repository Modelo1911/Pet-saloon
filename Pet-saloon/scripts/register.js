//constructor
function Pet(n,a,g,b,s,t){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
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


function register(){
    //1 get the values
    //2 create th obj using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value);
    console.log(newPet);
    //3 push newPets to array
    salon.pets.push(newPet);
    //4 call for display function
    displayPetCards();
    //5 update display info
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService="";
    inputType="";
}

function init(){
// creating predefined odjects
let pet1=new Pet("Butterball",3,"Male","Golden Retriever","Bath","Dog");
let pet2=new Pet("Buzzball",8,"Female","Calico","Vaccine","Cat");
let pet3=new Pet("Beatbox",1,"Female","Taby","Bath","Cat");
let pet4=new Pet("Voodoo",4,"Male","Orange","Bath","Cat");
let pet5=new Pet("Ranger",4,"Female","Orange","De-clawing","Cat");
let pet6=new Pet("Jack",5,"Male","Beagal","Grooming","Dog");
salon.pets.push(pet1,pet2,pet3,pet4,pet5,pet6);
//execute fn
displayPetCards();
}
window.onload=init;//wait to render to HTML

