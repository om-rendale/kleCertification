
//sync
// console.log("first")
// console.log("second")
// console.log("third")

//async setTimeOut
// console.log("first")
// setTimeout(function(){
//     console.log("it will after 2 sec")
// },2000)
// setTimeout(function(){
//     console.log("it will after 4 sec")
// },4000)
// console.log("second")
// console.log("third")

// setTimeout(function(){
//     console.log("it will after 0 sec")
// },0)

// setInterval

// setInterval(function(){
//     console.log("it will after 2 sec")
// },2000)

//clear

let count = 0;
let intervalId = setInterval(function(){
    count++
    console.log(`my count is: ${count}`);

    if(count == 5){
        clearInterval(intervalId);
        console.log("Task comleted")
    }

},1000)