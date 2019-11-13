const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Added to get around the deprecation warning: "Mongoose: mpromise (mongoose's default promise library) is deprecated"

// Load the schemas
const addressSchema = require('./component/model/addressModel.js');
const bookingSchema = require('./component/model/bookingModel.js');
const reviewSchema = require('./component/model/reviewModel.js');
const serviceSchema = require('./component/model/serviceModel.js');
const userSchema = require('./component/model/userModel.js');

module.exports = function(mongoDBConnectionString) {
    let Address;
    let Booking;
    let Review;
    let Service;
    let User;

    return {
        connect: function() {
            return new Promise(function(resolve,reject) {
                let db = mongoose.createConnection(mongoDBConnectionString, { useNewUrlParser: true });
                
                db.on('error', (err)=>{
                    reject(err);
                });
        
                db.once('open', ()=>{
                    Address = db.model("Address", addressSchema);
                    Booking = db.model("Booking", bookingSchema);
                    Review = db.model("Review", reviewSchema);
                    Service = db.model("Service", serviceSchema);
                    User = db.model("User", userSchema);

                    resolve();
                });
            })
        },
        getAllServices: function() {
            return new Promise(function(resolve,reject) {
                Service.find()
                       //.sort({}) // OPTIONAL Sort - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/ 
                       .populate("Service") // Populate the "Service" field
                       .exec
                       .then((services) => {
                           resolve(services);
                       })
                       .catch((err) => {
                           reject(err);
                       });
            })
        }
    }
}