const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });
/// insert new doc into users (name, age, location)

  db.collection('Users').insertOne({
    name: 'Dan',
    age: '30',
    location: 'Somerville'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to connect to mongo');
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  });
  db.close();
});
