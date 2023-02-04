/*const {MongoClient}=require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client =new MongoClient(url);

const Databasename = 'student';
const collectionName = 'person';
const getData = async()=>{
    await client.connect();
    console.log("Connected successfully to server");
    const db =  client.db(Databasename);
    const collection = db.collection(collectionName);
    //const insertdata = await
    //collection.insertOne({name:"ayan",class:"java",address:"pbc"});
    // const updatedata = await collection.updateOne({name:"sharif"},{$set:{name:"ramjan"}})
    //collection.deleteOne({name:"ayan"})
    let abc = await collection.find({}).toArray;
    //  console.log("======>",updatedata)
    console.log(abc);
  // return collection;

}
getData();*/

