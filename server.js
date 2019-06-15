// Set up Express server 
const express = require('express');
const app = express();

// Enable CORS
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

// Test it with hello world  
app.get('/', (req, res) => {
    res.json({'message': 'Hello World'});
});

// Add another endpoint 
app.get('/whoami', (req, res) => {
    res.json({'ipaddress': req.connection.remoteAddress,
              'language': req.headers['accept-language'],
              'software': req.headers['user-agent']});
})

app.listen('8000', () => {
    console.log('App listening on port 8000');
});