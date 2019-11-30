require('dotenv').config();
const express = require('express');
const server = express();
const JournalRoute = require('./routes/journalRoute.js');
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Listening on ${port}`)
})

server.use(express.json())

server.use('/journal', JournalRoute)

server.get('/', (req, res) => {
    res.send("Welcome to express-mongo server!")
})