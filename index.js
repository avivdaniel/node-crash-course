const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// express index - instance;
const app = express();

app.use(bodyParser.json());

//Initialized routes
app.use('/api', routes);

//Error handling middleware
app.use((err, req, res, next)=> {
    res.status(422).send({error: err.message})
});

connect();

// listen to requests;
function listen() {
    app.listen(process.env.port || 3000, () => {
        console.log('App listen to port 3000');
    })
};

//Connect to db
function connect() {
    mongoose.connect('mongodb://localhost:27017/ninjago', {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.on('error', err => console.log(err));
    db.once('open', listen);
}
