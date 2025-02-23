
//function
//way 1
// function sum(a,b){
//     // console.log("this my sum function");
//     let sum = a+b;
//     return(`my sum is ${sum}`)
// }
// console.log(sum(2,4))

//way 2-> first class function
let ans = function print(){
    return("i am print function");

}
console.log(ans());
