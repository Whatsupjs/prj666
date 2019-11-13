const mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING;
const HTTP_PORT = process.env.PORT || 8081;

const dataService = require("./src/data-service.js");

const data = dataService(mongoDBConnectionString);
const app = express();

// "" Routes

////////////

// "" Routes

////////////

// "" Routes

////////////

// Catch-All 404 error
app.use((req, res) => {
    res.status(404).end();
});

// Connect to the DB and start the server
data.connect().then(()=>{
    app.listen(HTTP_PORT, ()=>{console.log("API listening on: " + HTTP_PORT)});
})
.catch((err)=>{
    console.log("Unable to start the server: ", err.message);
    console.log("MongoDB Connection String is missing in .env / .env is missing");
    process.exit();
});
