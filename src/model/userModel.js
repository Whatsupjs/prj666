const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    phone: {
        type: String,
        required: true
    },
    address: { 
        streetNumber: { 
        type : Number
        },
        streetName: { 
            type: String
        },
        city: { 
            type: String
        },
        province: { 
            type: String 
        },
        postal: { 
            type: String
        } 
    },
    phone: {
        type: String
    }
})


UserSchema.virtual('userId').get(function() { return this._id; });

// const User = mongoose.model('user', UserSchema);

module.exports = User;