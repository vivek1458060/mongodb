var {ObjectID} = require('mongodb');
var jwt = require('jsonwebtoken');

var {Todo} = require('./../../models/todo');
var {User} = require('./../../models/user');

var userOneId = new ObjectID();
var userTwoId = new ObjectID();
var users = [{
  _id: userOneId,
  email: 'jan@gmail.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email: 'feb@gmail.com',
  password: 'userTwoPass'
}];

var todos = [{
  _id : new ObjectID(),
  text: 'first test todo'
}, {
  _id : new ObjectID(),
  text: 'second test todo',
  completed: true,
  completedAt: 333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
