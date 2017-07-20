const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 5, // x@y.z is the smallest email I can think of...
    trim: true
  }
})

module.exports = { User }