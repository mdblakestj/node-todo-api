// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'Dan', age: 30};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server')
  db.collection('Users').find({name: 'Dan'}).toArray().then((docs) => {
    console.log(docs);


  }, (err) => {
    console.log('Error', err)
  })
  // db.close();
});
