const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');
const path = require('path');

//Get a list of ninjas from db
router.get('/ninjas', async (req, res, next) => {
    try {
        const {lng, lat} = req.query;
        const ninjas = await Ninja.aggregate([
            {
                '$geoNear': {
                    "near": {
                        'type': 'Point',
                        'coordinates': [parseFloat(lng), parseFloat(lat)]
                    },
                    "spherical": true,
                    "distanceField": 'dist',
                    "maxDistance": 100000
                }
            }
        ])
        res.send(ninjas);
    } catch (err) {
        next(err);
    }
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

// All other GET requests not handled before will return our React app
router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

module.exports = router;