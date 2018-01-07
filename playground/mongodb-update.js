// //const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');
//
// var obj = new ObjectID();
// console.log(obj);
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
//   if(err) {
//     return console.log('Unable to connect to MongoDB Server');
//   }
//
//   console.log('connected to MongoDB server');
//
// //see documentation of mongodb update operators
// // db.collection('Todos').findOneAndUpdate({
// //   _id: new ObjectID('5a45d424bb1e5f249459d753')
// // }, {
// //   $set: {
// //     text: "hello"
// //     }
// //   }, {
// //     returnOriginal: false
// //   }).then((result) => {
// //     console.log(result);
// // });
//
// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('5a45ef3881a35c10b0ca8318')
// }, {
//   $set: {
//     name: "andrew"
//   },
//   $inc: {
//     age: 10
//   }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
// });
//
// //db.close();
// });
