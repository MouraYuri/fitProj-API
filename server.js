// Dependencies
const express = require('express');
const colors = require('colors');
const dotEnv = require('dotenv');

// Configuring enviroment variables
dotEnv.config({
    path: './config/config.env'
});

const app = express();

// Importing routes
const user = require('./routes/user');

// Mount routers
app.use('/', user);



const server = app.listen(process.env.HOST_PORT, console.log(`Running on port 5000`.green));

//Handle unhandle rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    process.exit(1);
})