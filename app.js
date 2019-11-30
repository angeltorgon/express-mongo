require('dotenv').config();
const express = require('express');
const server = express();
const Journal = require('./routes/journalEntries');
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Listening on ${port}`)
})

server.use(express.json())

server.use('/journal', Journal)

server.get('/', (req, res) => {
    res.send("Welcome to express-mongo server!")
})