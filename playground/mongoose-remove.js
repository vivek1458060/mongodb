const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a5272a4adfc021664a7bd74'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('5a5348692e85242b1cda51e5').then((todo) => {
//   console.log(todo);
// });
