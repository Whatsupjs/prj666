require('../config');
const express = require("express");
const bodyParser = require("body-parser");
const data_service = require("./data-service.js");

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
    streetNumber: "22",
    streetName: "Honest's Avenue",
    city: "Toronto",
    province: "Ontario",
    postal: "L2L 4P4"
};

const address2 = {
    streetNumber: "29",
    streetName: "Winter St.",
    city: "Toronto",
    province: "Ontario",
    postal: "N2M 2P3"
};

const user = {
    userName: "sunny",
    password: "sydny332",
    firstName: "Hummer",
    lastName: "Simpson",
    phone: "647-345-7878",
    email: "salutation@gmail.com",
    address: address1
};

const service = {
    type: "House Keeping",
    name: "Wash it Up!",
    provider: undefined,
    price: 55.55,
    location: address2,
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    detail: "Some detail",
    image: "./welding.jpg",    // the test image is located in the same folder as the component. for test we don,t need path
    comments: undefined
};

//--------------- End of the creating fake objects  ---------------//

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
    console.log("update recognized in server.js");
    // console.log(req.body);
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
        } else {
            user = await data_service.getAllUsers();
        }
        res.json(user);
    }
    catch (err) {
        res.json(err);
    }
});
//--------------- end of example -----------------//




data_service.initialize()
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



