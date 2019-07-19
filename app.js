const express = require('express');

const app = express();
//now middlewares ....

//    next(); allows the request to continue to the next middlesware


app.use((req, res, next) => {
    console.log('in another one');
    res.send('<h1>hello from express</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
