//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }

  console.log('connected to MongoDB server');

//   //deleteMany
// db.collection('Users').deleteMany({name: 'vivek'}).then((result) => {
//   console.log(result);
// });


// //deleteOne
// db.collection('Todos').deleteOne({text: 'eat'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5a45efc1019a7e2b00c5092e")
}).then((results) => {
  console.log(results);
});

//db.close();
});
