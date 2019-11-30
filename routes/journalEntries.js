const express = require('express');
const Journal = express.Router();

Journal.get('/', (req, res) => {
    res.send("You are in Journal route!")
})

module.exports = Journal;