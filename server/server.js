const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Learn how to make reactive, desktop style, web apps',
  completed: true,
  completedAt: 1500389162
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc)
}, (e) => {
  console.log('Unable to save todo')
})


