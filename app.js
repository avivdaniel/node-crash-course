const express = require('express');

// express app - instance;
const app = express();

app.get('/', (req,res)=> {
    res.sendFile('./views/index.html', {root: __dirname});
    // res.send('<p>Home Page</p>');
});
app.get('/about', (req,res)=> {
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/about-us', (req,res)=> {
    res.redirect('/about');
});
    //404 - last
app.use((req,res)=> {
    console.log('not fout')
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});

// listen to requests;
app.listen(3000, ()=> {
    console.log('App listen to port 3000');
});