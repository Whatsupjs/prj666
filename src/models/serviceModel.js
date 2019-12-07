const mongoose = require('mongoose');
const AddressSchema = require('./addressModel.js');
const Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId;

const ServiceSchema = new Schema({
    // please do not change id to _id
    id: ObjectId,
    type: String,
    name: String,
    provider: { type: ObjectId, ref: "User" },
    price: Number,
    location: AddressSchema,
    introduction: String,
    detail: String,
    rate: { type: Number, min: 0, max: 5 },
    image: String,
    availability: [{ date: Date, booked: Boolean, by: { type: ObjectId, ref: "User" } }],
    comments: [{ type: String, author: { type: ObjectId, ref: "User" }, date: Date }]
});

module.exports = mongoose.model('Service', ServiceSchema);
