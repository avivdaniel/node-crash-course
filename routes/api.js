const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//Get a list of ninjas from db
router.get('/ninjas', (req, res, next) => {
    res.send({type: 'GET'})
});

//ADD
router.post('/ninjas', async (req, res, next) => {
    try {
        const ninja = await Ninja.create(req.body);
        res.send(ninja);
    } catch (err) {
        next(err);
    }
});


//UPDATE
router.put('/ninjas/:id', async (req, res, next) => {
    try {
        await Ninja.findByIdAndUpdate({
            _id: req.params.id
        }, req.body);
        const updatedNinja = await Ninja.findOne({
            _id: req.params.id
        })
        res.send(updatedNinja);
    } catch (err) {
        next(err);
    }
});

//DELETE
router.delete('/ninjas/:id', async (req, res, next) => {
    try {
    const ninja = await Ninja.findByIdAndRemove({
        _id: req.params.id
    });
    res.send(ninja);
    } catch (err) {
        next(err);
    }
});

module.exports = router;