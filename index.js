const { application, json } = require('express');
const http = require('node:http');
data =require('./data');
const arr = require('./text');
const index2 = require('./index2');
const fs = require('fs');



 //const hostname = '127.0.0.1';
 //const port = 5000;

/*let arr = [
  {
    name:nijam",
    class:"nodejs",
    subject:"coding"
  }
  {
    name:"sharif",
    class:"js",
    subject:"coding"
  },
  {
    name:"sarvesh",
    class:"react",
    subject:"coding"
  },
  {
    name:"ayan",
    class:"js",
    subject:"coding"
  },
  {
    name:"ramjan",
    class:"html",
    subject:"coding"
  },

];

arr.push(arr[0]);
arr.push(arr[1]);
arr.push(arr[2]);
arr.push(arr[3]);
arr.push(arr[4]);

let arr2 ="" ;
for(let i=0;i < arr.length;i++){
  arr2 += arr[i];
}


let name = "";

let newarr = data.filter((item,index)=>{
 return item.name == name;
});

if(newarr.length == 0){
  newarr = "valid to emety"
}*/

/*const input =process.argv;


let obj={
  name : input[2],
  email : input[3],
  passward : input[4],
  pincode : input[5],
  address : input[6],
}*/

/*let data = [
  {
    name:"nijam",
    class:"node",
    address:"pbc"
  },
   {
    name:"sharif",
    class:"js",
    address:"basni"
  },
  {
    name:"sarvesh",
    class:"html",
    address:"pbc"
  },
];

data[2].name= data[0].name+data[data.length-1].name
data[2].class= data[0].class+data[data.length-1].class
data[2].address= data[0].address+data[data.length-1].address
console.log(data);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data[2]));
  res.end();
});

server.listen(port, hostname, () => {
console.log(`server running at http://${hostname}:${port}`)
});*/
//nodeconsole.log("====",abc);

//console.log(data);

//console.log("nijam sherani");
/*const input =process.argv;


if(input[2]=="add"){
fs.writeFileSync(input[3],input[4]);

}
else if(input[2]=="remove"){
  fs.unlinkSync(input[3]);

}
else{
  console.log("invalid input");
}*/



//console.log(input[2]);

