const express = require('express');
const JournalRoute = express.Router();
const Journal = require('../models/Journal');

JournalRoute.get('/', async (req, res) => {
    try {
        const posts = await Journal.find();
        res.send(posts)
        
    } catch (err) {
       res.send({error: err})
    }
})

JournalRoute.get('/:entryId', async (req, res) => {
    try {
        const post = await Journal.findById(req.params.entryId)
        res.send(post)
    } catch (err) {
       res.send({error: err})
    }
})

JournalRoute.delete('/:entryId', async (req, res) => {
    try {
        const post = await Journal.findByIdAndDelete(req.params.entryId)
        res.send(post)
    } catch (err) {
       res.send({error: err})
    }
})

JournalRoute.put('/:entryId', async (req, res) => {
    try {
        const post = await Journal.findByIdAndUpdate(req.params.entryId, req.body)
        res.send(post)
    } catch (err) {
       res.send({error: err})
    }
})

JournalRoute.post('/', async (req, res) => {
    const journalEntry = new Journal({
        title: req.body.title,
        body: req.body.body
    })
    try {
        const newEntry = await journalEntry.save();
        res.send(newEntry)
    } catch (err) {
       res.send({error: err})
    }
})

module.exports = JournalRoute;