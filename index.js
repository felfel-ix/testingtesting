// Filename - index.js

// Importing express module
const express = require("express")
const app = express()
const http = require('http');
// const fs = require('fs');

// const options = {
//     key: fs.readFileSync('private/privatekey.pem'),
//     cert: fs.readFileSync('private/certificate.pem')
// };

// Handling GET /hello request
app.get("/dummy", (req, res, next) => {
    res.json({ 'Dummy': 'Success' });
})

// Handling GET / request
app.get("/", (req, res, next) => {
    res.send("This is the root response");
})

const server = http.createServer(app);

// Server setup
server.listen(3000, () => {
    console.log("Server is Running")
})
