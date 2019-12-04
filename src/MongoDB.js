// require('../config');
// const mongoose = require('mongoose');
// const user = process.env.USER;
// const pass = process.env.PASSWORD;
// const uri = `mongodb+srv://${user}:${pass}@quickservice-jnovb.mongodb.net/quickService?retryWrites=true&w=majority`;

// module.exports.initialize = async function() {
//     await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//     let db = mongoose.connection;
//     db.once('open', () => { return "Connected to MongoDB successfully."; });
//     db.on('error', (err) => { return "MongoDB connection error: " + err; });
// };
