const express = require('express');
require('dotenv').config()

const propertyRouter =require('./routes/r_properties');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/property', propertyRouter);

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}.`));