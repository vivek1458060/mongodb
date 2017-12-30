var mongoose = require('mongoose');

var User = mongoose.model('User', { //object to configure properties that user should have
   email: {
     type: String,
     required: true,
     minlength: 1,
     trim: true
   }
});

module.exports = {User};
