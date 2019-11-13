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
    id: ObjectId,
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
    id: ObjectId,
    type: String,
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
        //let db = mongoose.connection;
        //db.once('open', () => {
        console.log("in");
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
    return await Service.find().exec();
};

module.exports.getServiceByType = async function(type) {
    return await Service.find({type: type}).exec();
};

module.exports.getServiceByProvider = async function(provider) {
    return await Service.find({provider: provider}).exec();
};

module.exports.getServiceByPrice = async function(price) {
    return await Service.find({price: price}).exec();
};

module.exports.getServiceByPriceRange = async function(min, max) {
    return await Service.find().reduce(service => service.price >= min && service.price <= max).exec();
};

module.exports.getServiceByLocation = async function(location) {
    return await Service.find({location: location}).exec();
};

module.exports.getServiceByArea = async function(postal) {
    return await Service.find().exec().reduce(service => service.location.postal == postal);
};

module.exports.getServiceByRate = async function(rate) {
    return await Service.find({rate: rate}).exec();
};

module.exports.getServiceByRateRange = async function(min, max) {
    return await Service.find().where("rate").gte(min).lte(max).exec();
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
    return await User.find().exec();
};

module.exports.getUserById = async function(id) {
    return await User.find({_id : id});
};

module.exports.getUserByUserName = async function(userName) {
    return await User.find({userName : userName});
};

module.exports.getUserByEmail = async function(email) {
    return await User.find({email : email});
};

//--------------- Create

module.exports.makeUser = async function(user) {
    let newUser = await new User(user);
    return await newUser.save();
};
