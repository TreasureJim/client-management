require('dotenv').config({path: __dirname + '/.env'});
const yargs = require('yargs');

const arg


// express api routing init
const express = require('express');
const app = express();

// database connection init
const { Pool, Client } = require('pg');
const pool = new Pool();

const PORT = process.env.API_PORT;
const API = require('./routes/api');

app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

// Use API routes from ./routes/api file
app.use('/api', API);


app.get('/', (req, res) => {
	res.send("/");
});

app.listen(PORT, () => {
	console.log(`Server running on localhost:${PORT}`);
});