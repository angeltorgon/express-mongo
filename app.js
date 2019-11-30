require('dotenv').config();
const express = require('express');
const server = express();
const JournalRoute = require('./routes/journalRoute.js');
const mongoose = require('mongoose');
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Listening on ${port}`)
})

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

server.use(express.json())

server.use('/journal', JournalRoute)

server.get('/', (req, res) => {
    res.send("Welcome to express-mongo server!")
})