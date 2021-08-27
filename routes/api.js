const express = require('express');
const router = express.Router();

//Get a list of ninjas from db
router.get('/ninjas', (req,res)=> {
    res.send({type: 'GET'})
});

//ADD
router.post('/ninjas', (req,res)=> {
    res.send({type: 'POST'})
});

//UPDATE
router.put('/ninjas/:id', (req,res)=> {
    res.send({type: 'PUT'})
});

//DELETE
router.delete('/ninjas/:id', (req,res)=> {
    res.send({type: 'DELETE'})
});

module.exports= router;