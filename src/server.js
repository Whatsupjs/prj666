const express = require("express");
const bodyParser = require("body-parser");
const data_service = require("./data-service.js");

const app = express();
const router = express.Router();

const API_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on: " + API_PORT);
}

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}, {useNewUrlParser: true }));


//--------------- example -----------------//

//---- the goal of the test is to create a service, a user and to display them
//---- this will be triggered by submit a form from website.
//---- but to test, I am making those objects here

const address1 = {
    streetNumber: "36",
    streetName: "Angel's St.",
    city: "Totonto",
    province: "Ontario",
    postal: "M4M 4M4"
};

const address2 = {
    streetNumber: "40",
    streetName: "Guest St.",
    city: "Totonto",
    province: "Ontario",
    postal: "N2N 2N2"
};

const user = {
    userName: "KeithUserName",
    password: "KeithPassword",
    firstName: "Keith",
    lastName: "Chen",
    phone: "647-123-1234",
    email: "karla123@gmail.com",
    address: address1
};

const service = {
    type: "House Keeping",
    name: "Aunt Mary's",
    provider: undefined,
    price: 99.99,
    location: address2,
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    detail: "Some detail",
    image: "./welding.jpg",    // the test image is located in the same folder as the component. for test we don,t need path
    comments: undefined
};

//--------------- End of the creating fake objects  ---------------//


router.post('/addService', (req, res) => {
    data_service.makeService(req.body)        //needs to pass service in req.body in real use case
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('/addUser', (req, res) => {
    data_service.makeUser(req.body)            //needs to pass user in req.body in real use case
        .then((message) => {
            res.json(message);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/services', (req, res) => {
    data_service.getAllServices()
        .then((services) => {
            res.json(services);
        })
        .catch((err) => {
            res.json(err);
        });
});



//--------------- end of example -----------------//




data_service.initialize()
    .then( (message) => {

        app.listen(API_PORT, onHttpStart);
        console.log(message);

        //---------- Testing database ---------------//
        data_service.makeUser(user)
            .then( (message) => {
                console.log(message);
                data_service.getUserByEmail(user.email)
                    .then( (user_) => {
                        console.log(user_);
                        service.provider = user_._id;
                        data_service.makeService(service)
                            .then((message) => console.log(message));
                    }).catch(err => console.log(err) );
            }).catch(err => console.log(err) );
        //---------- End of the database test -------//
    }).catch(err => console.log(err) );



