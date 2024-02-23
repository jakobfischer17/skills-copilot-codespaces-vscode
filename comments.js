// Description: This file contains the code for the comments path of the web server.
//Create web server with express
const express = require('express');
const app = express();
const port = 3000;

//Create a function that will be called when a GET request is made to the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Create a function that will be called when a GET request is made to the /comments path
app.get('/comments', (req, res) => {
  res.send('This is the comments path');
});

//Create a function that will be called when a POST request is made to the /comments path
app.post('/comments', (req, res) => {
  res.send('This is the comments path for POST requests');
});

//Create a function that will be called when a PUT request is made to the /comments path
app.put('/comments', (req, res) => {
  res.send('This is the comments path for PUT requests');
});

//Create a function that will be called when a DELETE request is made to the /comments path
app.delete('/comments', (req, res) => {
  res.send('This is the comments path for DELETE requests');
});

//Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)}); 