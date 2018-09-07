// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

//findOneAndUpdate



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server')

  db.collection('Users').insertOne({
    name: 'Dan',
    age: 30,
    location: 'somerville'
  }, (err,result) => {
    if (err) {
      return console.log('unable to connect to sever')
    }
    console.log(result.ops)
  }
)

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b92d31f997a604f7a709b99")
  }, {
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    })
  });
//update name
//increment name


  // db.close();
