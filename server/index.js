const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.port || 3001;
// express index - instance;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Second middleware- Body-parser
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
    app.listen(PORT, () => {
        console.log(`App listen to port ${PORT}`);
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
