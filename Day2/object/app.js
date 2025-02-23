// //object

// let person = {
//     name : 'om',
//     age : 20,
//     favColor : 'White',
//     course : 'BCA'
// }

// // console.log(person);
// // console.log(person.name);
// // console.log(person.age);
// // console.log(person['age'])

// //change propeties in object
// person.name = 'vinayak'
// // console.log(person);

// //adding new properties

// person.gender = 'male';
// // console.log(person);
// //delete properties

// delete person.favColor;
// console.log(person)

//Advance object
let person = {
    name : 'om',
    age : 20,
    favColor : 'White',
    course : 'BCA',
    fun: function print(){
        return(`my name is ${this.name} and my age is ${this.age}`);

    },
    newObj:{
        gender : "male",
        address : "jatrat"
    }
}
// console.log(person.print());
// console.log(person.fun());
console.log(person.newObj.address);