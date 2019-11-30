const express = require('express');
const JournalRoute = express.Router();
const Journal = require('../models/Journal');

JournalRoute.get('/', (req, res) => {
    res.send("You are in Journal route!")
})

module.exports = JournalRoute;