const http = require('http');

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('in the middleware');
//     next();
//     }
// )

app.use('/vini', (req, res, next) => {
    console.log('in another middleware')
    res.send('<h1>Hello World of Vinih</h1>')
});

app.use( '/', (req, res, next) => {
    console.log('in another middleware')
    res.send('<h1>Hello World</h1>')
});

app.listen(3000);

