const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user.js');

const userId = '59708d4851fdd0afc0a6fb34';
// const id = '697fb2bb58c6089a047b954a11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid', id);
// }

// Todo.find({ _id: id }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('id not found', id);
//     }
//     console.log('todo by id', todo);
//   })
//   .catch(e => console.log(e));

// Challenge:
// Query users collection
// User.findById
// handle no user found, user found, error cases

User.findById(userId)
  .then(
    user => {
      if (!user) {
        return console.log('userId not found', userId);
      }
      console.log('user by id:', user);
    },
    e => {
      console.log(e);
    }
  )
  .catch(e => console.log(e));
