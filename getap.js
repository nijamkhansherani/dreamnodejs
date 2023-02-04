const express = require('express');
const app = express();
const mongodb = require('mongodb')
const getData = require('./getconnect');
app.use(express.json())

app.get('/',async(req, res)=>{
    let dd = await getData("dreamcoder","student");
    const findResult = await dd.find({}).toArray();
    let ddd = await getData("ligthcode","employ");
    const findResult2 = await ddd.find({}).toArray();
    findResult.push(...findResult2)
     let data = await getData("khansaab","abc");
     const insert = await data.insertMany(findResult);
    res.send(findResult);  
    console.log(insert);
})


app.get('/:id',async(req,res)=>{
    let data = await getData("khansaab","abc");
    const findResult = await data.find({_id: new mongodb.ObjectId(req.params.id)}).toArray();
res.send(findResult)

})

// app.delete('/',async(req,res)=>{
//     let data = await getData('khansaab','abc')
//     let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.body.id) })
//     let data1= await data.find({}).toArray()
//     res.send(data1);

//     console.log("done")
// })

app.listen(4000);