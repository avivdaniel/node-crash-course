const express = require('express');
const routes = require('./routes/api');

// express index - instance;
const app = express();

//Initialized routes
app.use('/api',routes);

// listen to requests;
app.listen(process.env.port || 3000, ()=> {
    console.log('App listen to port 3000');
});