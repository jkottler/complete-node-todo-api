// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: "Eat lunch" }).then((result) => {
  //   console.log(result);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({ text: "Eat lunch" }).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // })

  // findmany Jason Kottler users
  // db.collection('Users').deleteMany({ name: 'Jason Kottler' }).then((result) => {
  //   console.log(result.result);
  // })
  // findoneanddelte by _id
  // db.collection('Users').findOneAndDelete({ _id: new ObjectID("5968bc864a977fe5c3f6ca03") }).then((result) => {
  //   console.log(result.value);
  // })

  // db.close();
});