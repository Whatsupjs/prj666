const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    date: { 
        type: Date 
    },
    userId: { 
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    service: { 
        type: Schema.Types.ObjectId, 
        ref: 'service'
    }
})

// const Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking;