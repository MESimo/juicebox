require('dotenv').config();
const {PORT = 3000} = process.env;
const express = require('express');
const server = express();
const { client } = require('./db');

client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())

const apiRouter = require('./api');
server.use('/api', apiRouter);
