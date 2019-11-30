const express = require('express');
const JournalRoute = express.Router();
const Journal = require('../models/Journal');

JournalRoute.get('/', (req, res) => {
    res.send("You are in Journal route!")
})

JournalRoute.post('/', async (req, res) => {
    const journalEntry = new Journal({
        title: req.body.title,
        body: req.body.body
    })
    const newEntry = await journalEntry.save();
    res.send(newEntry)
})

module.exports = JournalRoute;