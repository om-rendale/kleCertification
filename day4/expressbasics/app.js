const express = require('express');
const app = express();


//meddleware
// app.use('/home',(req,res)=>{
//     // console.log(req);
//     res.send('<h1>response from sever</h1>');
//     console.log(res);
// })


//get
app.get('/thakgaaye',(req,res)=>{
    res.send('<h1>Responce from my routr -> thakana mana he')
})

app.get('/hello',(req,res)=>{
    res.send('<h1>hello world</h1>')
})


app.get('/virat',(req,res)=>{
    res.send('<h1>virat hit the cetury against pak</h1>')
})


app.get('/rcb',(req,res)=>{
    res.send('<h1>E sal cup nammde</h1>')
})


app.listen(8080,()=>{
    console.log("server is run at port  8080")
})