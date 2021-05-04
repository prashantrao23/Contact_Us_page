const express = require('express');
const routes = require('./email');
var cors = require('cors')
var nodemailer = require('nodemailer');





// set up express app
const app = express();

// set up cors
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize routes
app.use(routes);

// use this to add default route
// app.use('/url',routes);

app.listen(8080, function () {
    console.log("Server is listening on port 127.0.0.1:8080...")
})