const express = require('express');
require('dotenv').config()

const propertyRouter =require('./routes/r_properties');

const app = express();

app.use('/api/property', propertyRouter);
app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}.`));