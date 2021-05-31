const path = require('path');

const PORT = process.env.PORT;


// express api routing init
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, '../frontend/build/index.html')));
app.use(express.json());

// Use API routes from ./routes/api file
const API = require('./routes/api');
app.use('/api', API);


app.get('/*', (req, res) => {
	res.send(path.join(__dirname, '/../frontend/build/index.html'))
})

app.listen(
	PORT || 5000, 
	() => {
	console.log(`Server running on localhost:${PORT}`);
});