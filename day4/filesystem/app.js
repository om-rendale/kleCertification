let fs = require('fs');

// // //perform CRUD Operation
//  let data = "hi today's wether is cool";

//task-1 create a file and write data into it
// fs.writeFile('demo.txt',data,{
//     encoding:'uft-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("file is created sucessfull");
// })
// fs.writeFileSync('demo.txt',data,(err)=>{
//     if(err) throw err;
//     console.log("file is created sucessfull");
// });

//Read a file
// let fileread =  fs.readFileSync('demo.txt');
// console.log(fileread.toString());

//Upadate A  File

// fs.appendFileSync('demo.txt','\n I hope this wethetr will same for next day');

// //delete data 

// fs.unlinkSync('demo.txt');

// //Remove the old data
// fs.truncateSync()


let d = " E sal cup Namde"

fs.writeFileSync('rcb.txt',d,(err)=>{
    if(err) throw err;
    console.log("file is created sucessfull");
});



let fileread =  fs.readFileSync('rcb.txt');
console.log(fileread.toString());

fs.appendFileSync('rcb.txt','\n rcb win the finel match an virat kohali hit century in this match');

fs.unlinkSync('rcb.txt');