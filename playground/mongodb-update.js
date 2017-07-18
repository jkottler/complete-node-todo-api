// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID("596e18633c32d675f5d786be") },
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result)
  //   })

  // find one and update
  // name -> my name
  // age -> incremented by one

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID("5968ba2836e871e1d53e3274")
    },
    {
      $set: {
        name: 'Jason'
      },
      $inc: {
        age: 1
      }
    },
    {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })

  // db.close();
});