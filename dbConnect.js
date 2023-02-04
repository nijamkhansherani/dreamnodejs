const express = require('express');
const app = express();

const { MongoClient } =  require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbname = 'admin'; 

let data;
const getData = async()=>{
    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbname);
    const collection = await db.collection('emp');
    const findResult = await collection.find({}).toArray();
    console.log("====findResult=====>",findResult);
    data=findResult;
    return 'done.';
    
};
getData();
app.get('',(req,res)=>{
    res.send(data);
})
app.listen(5000);

