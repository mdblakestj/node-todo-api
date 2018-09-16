const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

Todo.findByIdAndRemove("5b9ec38514a06fd50baf2a30").then(todo => {
  console.log(todo);
});
