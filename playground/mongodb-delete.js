// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//deleteMany


//deleteOne
//findOneAndDelete

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server')

  // db.collection('Todos').deleteMany({test: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({name: 'Dan'}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b8f011bbccd1c207eefb3bf")}).then((result => {
    console.log(result);
  }))

  //deleteMany


  //deleteOne
  //findOneAndDelete

  // db.close();
});
