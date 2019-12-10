// Database needs to be initialized before using this module
const User = require('./models/userModel.js');
const Service = require('./models/serviceModel.js');



//=============== SERVICE ==============//

//--------------------------------------//
//--------------- Read -----------------//
//--------------------------------------//
// Gets all Services currently in the database
module.exports.getAllServices = async function() {
    return await Service.find().populate('provider').exec();
};

// Gets the Service which matches the queried 'id'
module.exports.getServiceById = async function(id) {
    console.log("this is data-service" + id);
    return await Service.find({_id: id}).populate('provider').exec();
};

// Gets the Service which matches the queried 'name'
module.exports.getServiceByName = async function(name) {
    console.log("searching by name" + name);
    return await Service.find({name: name}).populate('provider').exec();
};

// Gets all Services which belong to the queried service 'type'
module.exports.getServiceByType = async function(type) {
    return await Service.find({type: type}).populate('provider').exec();
};

// Gets all Services which are submitted by the queried 'provider'
module.exports.getServiceByProvider = async function(provider) {
    return await Service.find({provider: provider}).populate('provider').exec();
};

// Gets the Service which matches the queried 'price'
module.exports.getServiceByPrice = async function(price) {
    return await Service.find({price: price}).populate('provider').exec();
};

// Gets all Services which are within the queried 'price' range
module.exports.getServiceByPriceRange = async function(min, max) {
    return await Service.find().populate('provider').exec().reduce(service => service.price >= min && service.price <= max);
};

// Gets all Services which match the queried 'location'
module.exports.getServiceByLocation = async function(location) {
    return await Service.find({location: location}).populate('provider').exec();
};

// Gets all Services within the queried 'postal' range
module.exports.getServiceByArea = async function(postal) {
    return await Service.find().populate('provider').exec().reduce(service => service.location.postal === postal);
};

// Gets all Services which match the queried 'rate'
module.exports.getServiceByRate = async function(rate) {
    return await Service.find({rate: rate}).populate('provider').exec();
};

// Gets all Services which are within the queried 'rate' range
module.exports.getServiceByRateRange = async function(min, max) {
    return await Service.find().where("rate").gte(min).lte(max).populate('provider').exec();
};

// Gets all Services which are available/unbooked
module.exports.getServiceByProviderAvailability = async function(provider) {
    await this.getServiceByProvider(provider).then(async function(service) {
        return await service.availability.reduce( av => !av.booked );
    });
};

//--------------------------------------//
//-------------- Create ----------------//
//--------------------------------------//
// Creates a Service based on the passed in data
module.exports.makeService = async function(service) {
    let newService = await new Service(service);
    return await newService.save(); // Saves new Service into database
};

//--------------------------------------//
//-------------- Update ----------------//
//--------------------------------------//
// Applies a rate to an existing Service
module.exports.rateService = async function(id,rate) {
    return await Service.findByIdAndUpdate(id, {rate: rate}).exec();
};

// Applies availability changes to selected Service based on newly booked dates
module.exports.bookService = async function(id, date) {
    return await Service.findByIdAndUpdate(id, async function (err, service) {
        await service.availability.reduce( av => {
            if (av.date === date) { av.booked = true; }
        });
    }).exec();
};

// Adds a comment to an existing Service
module.exports.commentService = async function(comment, serviceId, userId) {
    let comment_ = { comment, author: userId, date: Date() };
    return await Service.findByIdAndUpdate(serviceId, async function (err, service) {
        return await service.comment.push(comment_); // Pushes new comment into the comment array
    }).exec();
};

//--------------------------------------//
//-------------- Delete ----------------//
//--------------------------------------//
// Deletes an existing Service
module.exports.deleteService = async function(id) {
    return await Service.findByIdAndDelete(id).exec();
};



//================ USER ================//

//--------------------------------------//
//--------------- Read -----------------//
//--------------------------------------//
// Gets all User currently in the database
module.exports.getAllUsers = async function() {
    return await User.find().populate().exec();
};

// Gets the User which matches the queried 'id'
module.exports.getUserById = async function(id) {
    return await User.find({_id : id}).populate().exec();
};

// Gets the User which matches the queried 'username'
module.exports.getUserByUserName = async function(userName) {
    return await User.find({userName : userName}).populate().exec();
};

// Gets the User which matches the queried 'email'
module.exports.getUserByEmail = async function(email) {
    return await User.find({email : email}).populate().exec();
};

//--------------------------------------//
//-------------- Create ----------------//
//--------------------------------------//
// Creates a new User account based on the passed in data
module.exports.makeUser = async function(user) {
    const newUser = await new User(user);
    return await newUser.save(); // Saves new User into database
};

//--------------------------------------//
//-------------- Update ----------------//
//--------------------------------------//
// Updates the queried User's profile with updated data passed in from the form
module.exports.updateUser = async function(user) {
    return await User.findByIdAndUpdate(user._id, user).exec();
};
