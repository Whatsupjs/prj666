const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    serviceName: {
        type: String,
        trim: true,
        required: "Service name is Required"
    },
    serviceDesc:{
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    address: {
        streetNumber: {
            type: Number
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
        country: {
            type: String
        },
        postal: {
            type: String
        }
    },
    serviceType: {
        type: String
    },/*
    booking: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'booking'
    }],
    review: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'review'
    }],*/
    price: [{
        type: Number
    }]
})

// const Service = mongoose.model('service', ServiceSchema);

module.exports = Service;