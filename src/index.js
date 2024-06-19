const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api',apiRouter);


// last middleware if any error comes 
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log("server started at PORT: ",PORT);
});



//api/v1/problems/ping