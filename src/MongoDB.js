const mongoose = require('mongoose');
const uri = `mongodb+srv://reza:rezaadmin1@quickservice-jnovb.mongodb.net/quickService?retryWrites=true&w=majority`;

module.exports.initialize = async function() {
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    let db = mongoose.connection;
    db.once('open', () => { return "Connected to MongoDB successfully."; });
    db.on('error', (err) => { return "MongoDB connection error: " + err; });
}
