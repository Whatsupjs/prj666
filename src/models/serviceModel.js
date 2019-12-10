const mongoose = require('mongoose');
const AddressSchema = require('./addressModel.js');
const Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId;

// Creates the Service Schema
const ServiceSchema = new Schema({
    // please do not change id to _id
    id: ObjectId,
    type: String,
    name: String,
    provider: { type: ObjectId, ref: "User" }, // Refers to the User that posted this Service entry
    price: Number,
    location: AddressSchema,
    introduction: String,
    detail: String,
    rate: { type: Number, min: 0, max: 5 },
    image: String,
    availability: [{ date: Date, booked: Boolean, by: { type: ObjectId, ref: "User" } }], // An array of dates used for Booking - Includes whether each date is available or not
    comments: [{ type: String, author: { type: ObjectId, ref: "User" }, date: Date }] // An array of comments for each Service listing - Includes the User who posted and the date of posting
});

// Creates a Mongoose Model using the Service Schema
// Makes this Mongoose Model available to the Node application 
module.exports = mongoose.model('Service', ServiceSchema);
