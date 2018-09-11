var express = require("express");
var bodyParser = require("body-parser");

var { ObjectID } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");

var { Users } = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

//GET /todos/1213212124

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  //valid id using isvalid
  // 404 - send back empty send
  //findById
  Todo.findById(id).then(
    todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send(todo);
    },
    e => {
      res.status(400).send();
    }
  );
  //Success
  // if todo - send it back
  // if no todo - send back 404 with empty bod
  //error;
  //400 - and send empty body back
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

module.exports = { app };
