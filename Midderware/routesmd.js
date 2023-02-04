const express = require('express');
const app = express();
const reqMidderware = require('./Midderware');
const route = express.Router(reqMidderware);

route.use(reqMidderware);

route.get('',(req, res)=>{
    res.send("this is a home page");
})

app.get('/about',(req, res)=>{
    res.send("this is a about page");
})
route.get('/login',(req, res)=>{
    res.send("this is a login page");
})
app.get('/profile',(req, res)=>{
    res.send("this is a profile page");
})
app.get('/header',(req, res)=>{
    res.send("this is a header page");
}) 
app.listen(5000);
app.use('',route);


