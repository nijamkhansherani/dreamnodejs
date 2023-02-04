const express = require('express');
const app = express();
const mongodb = require('mongodb')
const getData = require('./db');
app.get('/student',async(req, res)=>{
    let dd = await getData("dreamcoder","student");
    const findResult = await dd.find({}).toArray();
    res.send(findResult);
})
app.get('/employ',async(req, res)=>{
    let dd = await getData("ligthcode","employ");
    const findResult = await dd.find({}).toArray();
    res.send(findResult);
})



app.listen(5000);