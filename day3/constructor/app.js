
// function Details(){
//     this.name = "vinayak"
//     this.age=25;
//     this.address="chikhali"
// }

// let user = new Details();
// console.log(user.name);

//custom 


function Details(naam,umar,isthan){
    this.name = naam
    this.age=umar
    this.address=isthan
    this.description = function(){
        return (`my name is ${this.name}, my age is ${this.age}`)
    }
}

let user = new Details("vinayak",25,"chikhali");
let user1 = new Details("om",21,"jatrat");
let user2 = new Details("virat",32,"Delhi");

// console.log(user);
console.log(user.description())
// console.log(user1);
console.log(user1.description())
// console.log(user2);