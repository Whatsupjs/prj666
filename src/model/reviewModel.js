const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'user'
    },
    service: {
        type: Schema.Types.ObjectId, 
        ref: 'service'
    },
    rating: { 
        type: Number
    },
    review: { 
        type: String
    },
    date: { 
        type: Date
    }
})

// const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;