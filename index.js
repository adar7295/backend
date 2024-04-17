//import express
const express = require('express')

//initialize expresss
const app = express();
const port = 5000;

// start server
app.listen(port, () => { console.log('server started'); });