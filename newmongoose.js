const express = require('express')
const app = express();
const studentSchema = require('./schemaconnect')
require('./connectdb')

app.use(express.json());
app.post('/creat',async (req,res)=>{
    let data = new studentSchema(req.body);
    let result =  await data.save()
    res.send(result)
    console.log(result);
})
  
app.get('/find',async(req,res)=>{
    const student = await studentSchema.find();
    res.send(student);
    console.log(student);
    })

    app.put('/:id',async(req,res)=>{
      const abc = await studentSchema.updateOne({name:"sharif"},{$set:req.body})
      res.send(abc);
    })

    app.delete('/:id',async(req,res)=>{
      const xyz = await studentSchema.deleteOne(req.body)
      res.send(xyz);
    })

    
app.listen(4000);
