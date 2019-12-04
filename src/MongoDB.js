require('../config');
const mongoose = require('mongoose');
const user = process.env.US;
const pass = process.env.PASS;
const uri = `mongodb+srv://${user}:${pass}@quickservice-jnovb.mongodb.net/quickService?retryWrites=true&w=majority`;

module.exports.initialize = async function() {
    try {
        // 'mongoose.connect' is a simplified version of 'mongoose.createConnection'
        // Utilized when only one connection is required
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        return "Connected to MongoDB successfully.";
    }
    catch(err) {
       return err.toLocaleString();
    }
};

