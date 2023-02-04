const mongoose = require('mongoose');
const express = require('express')
const app = express();
const url = 'mongodb://127.0.0.1:27017/folder';
mongoose.connect(url);

const studentSchema = new mongoose.Schema({
    name:String,
    class:String,
    address:String
})

const insertData =async ()=>{
    const student = mongoose.model('file',studentSchema);
    let data = new student({
         name:"rahil",
         class:"JS",
         address:"merta"
    });
    const resultsss = await data.save();
    console.log("=======dsdfsf===>",resultsss);
}


insertData();