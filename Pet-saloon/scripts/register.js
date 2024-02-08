let salon={
    name:"The fashion Pet", 
    phone:"123-456-7891",
    address:{
        street:"palm",
        number:"234-J", 
        zip:"96654"
    },
    pets: []
}

//constructor
function Pet(n,a,g){
    this.name=n;
    this.age=a;
    this.gender=g;
}


function displayPetNames(){
    document.getElementById('pets').innerHTML="";
    for(let i=0;i<salon.pets.length;i++){
        document.getElementById('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    document.getElementById('totalPets').innerHTML=`Total=${salon.pets.length}`;

}

function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    `;
}

//get elements from HTML
let inputName= document.getElementById("txtName");
let inputAge= document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");


function register(){
    //1 get the values
    //2 create th obj using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value);
    console.log(newPet);
    //3 push newPets to array
    salon.pets.push(newPet);
    //4 call for display function
    displayPetNames();
    //5 update display info
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
}

function init(){
// creating predefined odjects
let pet1=new Pet("Butterball",3,"Male");
let pet2=new Pet("Buzzball",8,"Female");
let pet3=new Pet("Beatbox",1,"Female");
salon.pets.push(pet1,pet2,pet3);
//execute fn
displayPetNames();
displayFooterInfo();

window.onload=init;//wait to render to HTML
}
