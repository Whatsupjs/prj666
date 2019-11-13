const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    streetNumber: String,
    streetName: String,
    city: String,
    province: String,
    postal: String
});

module.export = mongoose.model('Address', AddressSchema);;
