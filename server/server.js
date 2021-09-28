const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const blogRoutes = require('./routes/blog')
server.use('./blogs', blogRoutes)

server.get('/', (req, res) => res.send('Welcome! This is Telegraph by Ben and Elena'))

module.exports = server