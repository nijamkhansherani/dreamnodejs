const express = require('express')
const app = express();
require('./config')
const {isValidForm, validators} = require('./helper');
app.use(express.json())
const userSchema = require('./userscma');

// app.post('/singup',async(req,res)=>{
//     let Email = req.body.email;
//     let EmailErr = "";
//     if(Email.includes("@gmail.com")== false){
//         EmailErr = "Plase valid Email";
//         res.send(EmailErr);
//     }
//     else{
//         let data =  await new userSchema(req.body)
//         let result = await data.save();
//         console.log(result);
//         res.send(result);
//     } 
// });

app.post('/singup',async(req,res)=>{
    const {email , name, passward, MoNumber} = req.body
    const form = {
        email: validators.checkEmail('email',email),
        name: validators.checkRequire('name',name),
        passward: validators.checkPassword('Passward',passward),
        MoNumber: validators.checkNumber('Phone Number',MoNumber),
    }
    
    console.log("======",form);

    if(form.name == null && form.email == null){
        if(form.passward == null && form.MoNumber == null){
            let data =  await new userSchema(req.body)
                 let result = await data.save();
                 res.send(result);
        }
        else{
            res.send(form)
        }
    }
    res.send(form);
})


app.get('/search/:name', async (req, res) => {
    let data = await  userSchema.find({
        "$or": [
            { "name": { $regex: req.params.name } },
            { "email": { $regex: req.params.name } },
            { "passward": { $regex: req.params.name } },
            { "MoNumber": { $regex: req.params.name } }

        ]
    });  
    res.send(data);
})

app.get('/find',async(req,res)=>{
    let data = await  userSchema.find();
    res.send(data);
})


app.get("/home",(req,res)=>{
    res.send("hello nijaam bhanu");
    console.log("hello bhanu ji");
})

app.get("/page",(req,res)=>{
    res.send('how are you');
    console.log("how are you");
})
app.listen(5000);