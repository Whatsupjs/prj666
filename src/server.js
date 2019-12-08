require('../config');
const express = require("express");
const bodyParser = require("body-parser");
const { initialize } = require("./MongoDB");
const data_service = require("./data-service");

const mongoose = require('mongoose');
let ObjectId = mongoose.Types.ObjectId;

const app = express();

const API_PORT = process.env.API_PORT || 3001;
const API = process.env.API || "http://localhost";

function onHttpStart() {
    console.log("Express http server listening on: " + API_PORT);
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.static("public", { index: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }, { useNewUrlParser: true }));


//--------------- example -----------------//

//---- the goal of the test is to create a service, a user and to display them
//---- this will be triggered by submit a form from website.
//---- but to test, I am making those objects here

const address1 = {
    streetNumber: "333",
    streetName: "Testing Avenue",
    city: "Toronto",
    province: "Ontario",
    postal: "L3L 3P3"
};

const address2 = {
    streetNumber: "33",
    streetName: "Testing St.",
    city: "Toronto",
    province: "Ontario",
    postal: "N3M 3P3"
};

const user = {
    userName: "The5dealer",
    password: "dealer333",
    firstName: "Dealer",
    lastName: "Simpson",
    phone: "647-333-3333",
    email: "dealer55@gmail.com",
    address: address1
};

const service = {
    type: "House Keeping",
    name: "$3 Wash Ltd.",
    provider: undefined,
    price: 3.00,
    location: address2,
    introduction: "Best deal ever!",
    detail: "ONLY $3",
    rate: 3,
    image: "welding.jpg",
    comments: undefined
};

//--------------- End of the creating fake objects  ---------------//
// testing API server
app.get('/', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.send({ greeting: "hello quick!" });
});

/* --------------------- POST Requests ----------------------- */
app.post('/addService', (req, res) => {
    data_service.makeService(req.body)        //needs to pass service in req.body in real use case
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post('/addUser', (req, res) => {
    data_service.makeUser(req.body)            //needs to pass user in req.body in real use case
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post('/updateUser', (req, res) => {
    data_service.updateUser(req.body)            //needs to pass user in req.body in real use case
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.json(err);
        });
});


/* --------------------- GET Requests ----------------------- */
app.get('/services', async function (req, res) {
    let services;
    try {
        if (req.query.type) {
            services = await data_service.getServiceByType(req.query.type);
        } else if (req.query.id) {
            services = await data_service.getServiceById(req.query.id);
        } else if (req.query.name) {
            services = await data_service.getServiceByName(req.query.name);
        } else if (req.query.provider) {
            services = await data_service.getServiceByProvider(req.query.provider);
        } else {
            services = await data_service.getAllServices();
        }

        res.json(services);
    }
    catch (err) {
        res.json(err);
    }
});

app.get('/user', async function (req, res) {
    let user;
    try {
        if (req.query.name) {
            user = await data_service.getUserByUserName(req.query.username);
        } else if (req.query.id) {
            user = await data_service.getUserById(req.query.id);
        } else if (req.query.email) {
            user = await data_service.getUserByEmail(req.query.email);
        } else {
            user = await data_service.getAllUsers();
        }
        res.json(user);
    }
    catch (err) {
        res.json(err);
    }
});
//--------------- end of POST & GET -----------------//




initialize()
    .then((message) => {

        app.listen(API_PORT, onHttpStart);
        console.log(message);

        //---------- Testing database ---------------//
        //create user
        // data_service.makeUser(user)
        //     .then( (user_) => {
        //             console.log(user_);
        //             service.provider = ObjectId(user_._id);
        //             data_service.makeService(service)
        //                 .then((service_) => {
        //                     console.log(service_);
        //                     user_.providerOf.push(ObjectId(service_._id));
        //                     user_.save();
        //                 });
        //     }).catch(err => console.log(err) );
        //---------- End of the database test -------//

    }).catch(err => console.log(err));



