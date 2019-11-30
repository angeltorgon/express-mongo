const express = require('express');
const JournalRoute = express.Router();
const Journal = require('../models/Journal');

JournalRoute.get('/', async (req, res) => {
    const posts = await Journal.find();
    res.send(posts)
})

JournalRoute.get('/:entryId', async (req, res) => {
    const post = await Journal.findById(req.params.entryId)
    res.send(post)
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