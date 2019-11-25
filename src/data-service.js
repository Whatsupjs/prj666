const mongoose = require('mongoose');
const uri = `mongodb+srv://reza:rezaadmin1@quickservice-jnovb.mongodb.net/quickService?retryWrites=true&w=majority`;

const Schema = mongoose.Schema;
let ObjectId = mongoose.Types.ObjectId;


const AddressSchema = new Schema({
    streetNumber: String,
    streetName: String,
    city: String,
    province: String,
    postal: String
});

const UserSchema = new Schema({
    _id: ObjectId,
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

const ServiceSchema = new Schema({
    _id: ObjectId,
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

let User;
let Service;

module.exports.initialize = async function() {
    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        User = mongoose.model('User', UserSchema);
        Service = mongoose.model('Service', ServiceSchema);
        return "Connected to MongoDB successfully.";
    }
    catch(err) {
        console.log(err);
    }


}





//--------------- SERVICE --------------//

//--------------- Read

module.exports.getAllServices = async function() {
    return await Service.find().populate('provider').exec();
};

module.exports.getServiceById = async function(id) {
    console.log("this is data-service" + id);
    return await Service.find({_id: id}).populate('provider').exec();
};

module.exports.getServiceByName = async function(name) {
    console.log("searching by name" + name);
    return await Service.find({name: name}).populate('provider').exec();
};

module.exports.getServiceByType = async function(type) {
    return await Service.find({type: type}).populate('provider').exec();
};

module.exports.getServiceByProvider = async function(provider) {
    return await Service.find({provider: provider}).populate('provider').exec();
};

module.exports.getServiceByPrice = async function(price) {
    return await Service.find({price: price}).populate('provider').exec();
};

module.exports.getServiceByPriceRange = async function(min, max) {
    return await Service.find().populate('provider').exec().reduce(service => service.price >= min && service.price <= max);
};

module.exports.getServiceByLocation = async function(location) {
    return await Service.find({location: location}).populate('provider').exec();
};

module.exports.getServiceByArea = async function(postal) {
    return await Service.find().populate('provider').exec().reduce(service => service.location.postal == postal);
};

module.exports.getServiceByRate = async function(rate) {
    return await Service.find({rate: rate}).populate('provider').exec();
};

module.exports.getServiceByRateRange = async function(min, max) {
    return await Service.find().where("rate").gte(min).lte(max).populate('provider').exec();
};

module.exports.getServiceByProviderAvailability = async function(provider) {
    await getServiceByProvider(provider).then( async function(service) {
        return await service.availability.reduce( av => !av.booked );
    });
};

//--------------- Create

module.exports.makeService = async function(service) {
    let newService = await new Service(service);
    return await newService.save();
};

//--------------- Update

module.exports.rateService = async function(id,rate) {
    return await Service.findByIdAndUpdate(id, {rate: rate}).exec();
};

module.exports.bookService = async function(id, date) {
    return await Service.findByIdAndUpdate(id, async function (err, service) {
        await service.availability.reduce( av => {
            if (av.date === date) { av.booked = true; }
        });
    }).exec();
};

module.exports.commentService = async function(comment, serviceId, userId) {
    let comment_ = { comment, author: userId, date: Date() };
    return await Service.findByIdAndUpdate(serviceId, async function (err, service) {
        return await service.comment.push(comment_);
    }).exec();
};

//--------------- Delete

module.exports.deleteService = async function(id) {
    return await Service.findByIdAndDelete(id).exec();
};



//--------------- USER --------------//

//--------------- Read

module.exports.getAllUsers = async function() {
    return await User.find().populate().exec();
};

module.exports.getUserById = async function(id) {
    return await User.find({_id : id}).populate().exec();
};

module.exports.getUserByUserName = async function(userName) {
    return await User.find({userName : userName}).populate().exec();
};

module.exports.getUserByEmail = async function(email) {
    return await User.find({email : email}).populate().exec();
};

//--------------- Create

module.exports.makeUser = async function(user) {
    let newUser = await new User(user);
    return await newUser.save();
};
