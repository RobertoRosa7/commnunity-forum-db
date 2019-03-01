const express = require('express');

const app = express();

app.get('/', (req, res)=>{
	res.send('This is the DB - with PostgresSQL');
});

const port = process.env.PORT || 4444;
app.listen(port, (req, res)=>{
	console.log('The Server Node is UP, on port: ' + port);
});