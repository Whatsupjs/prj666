const mongoose = require('mongoose');
const AddressSchema = require('./addressModel.js');
const Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId;

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
    phone: String,
    address: AddressSchema,
    providerOf: [{ type: ObjectId, ref: 'Service' }],
    userOf: [{ type: ObjectId, ref: 'Service' }]
});

module.exports = mongoose.model('User', UserSchema);
