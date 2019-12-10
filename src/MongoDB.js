require('../config');
const mongoose = require('mongoose');

// Refers to '.env' file
const user = process.env.US;
const pass = process.env.PASS;

// Custom login string based on '.env' file
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

