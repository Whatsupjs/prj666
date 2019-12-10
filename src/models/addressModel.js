const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates the Address Schema
const AddressSchema = new Schema({
    streetNumber: String,
    streetName: String,
    city: String,
    province: String,
    postal: String
});

// Creates a Mongoose Model using the Address Schema
// Makes this Mongoose Model available to the Node application 
module.export = mongoose.model('Address', AddressSchema);;
