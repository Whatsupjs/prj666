const mongoose = require('mongoose');
const AddressSchema = require('./addressModel.js');
const Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId;

// Creates the User Schema
const UserSchema = new Schema({
    // please do not change id to _id
    id: ObjectId,
    userName: {
        type: String,
        unique: true,
        trim: true,
        required: "Username is Required",
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function(input) { // Password length must be longer than 6 characters
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
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"] // Basic validation - "xxx@xxx.xxx" Format
    },
    phone: String,
    address: AddressSchema,
    providerOf: [{ type: ObjectId, ref: 'Service' }], // An array containing all of the User's Service listings
    userOf: [{ type: ObjectId, ref: 'Service' }] // An array containing all of the Services the User has booked/used
});

// Creates a Mongoose Model using the User Schema
// Makes this Mongoose Model available to the Node application 
module.exports = mongoose.model('User', UserSchema);
