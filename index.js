// Filename - index.js

// Importing express module
const express = require("express")
const app = express()
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('private/privatekey.pem'),
    cert: fs.readFileSync('private/certificate.pem')
};

// Handling GET /hello request
app.get("/hello", (req, res, next) => {
    res.send("This is the hello response");
})

// Handling GET / request
app.get("/", (req, res, next) => {
    res.send("This is the root response");
})

const server = https.createServer(options, app);

// Server setup
server.listen(443, () => {
    console.log("Server is Running")
})
