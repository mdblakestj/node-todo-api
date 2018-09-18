const mongoose = require("mongoose");
const validator = require("validator");

// {
//   email: 'test@example.com',
//   password: 'fsdfnlsngosdnosd',
//   tokens: [{
//     access: 'auth',
//     token: 'dfgjdlfjgdfjlkgjd',
//
//   }]
// }

var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true, ///verifies email doens't exist in database
    validate: {
      validator: validator.isEmail,
      message: ` is not a valid email`
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        require: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = { User };
