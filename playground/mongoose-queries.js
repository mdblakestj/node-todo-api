const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b96c3bc47d562737fa833e8'
//
// id (!ObjectID.isvalid(id)) {
//   console.log('ID not valid');
// }

var id = '5b92eade89b89fb553727961'

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })

User.findById('5b92eade89b89fb553727961').then((user) => {
  if (!user) {
    return console.log('unable to find user')
  }
  console.log(JSON.stringify(user,undefined,2));
}, (e) => {
  console.log(e)
} );

// user not found
//user found print to screen
//print error object

// Todo.findById(id).then((todo) =>{
//   if (!todo) {
//     console.log('No id found')
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e))
