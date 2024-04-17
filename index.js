//import express
const express = require('express')

//initialize expresss
const app = express();
const port = 5000;

//end point
app.get('/', (req, res) => {
    res.send('response from expess');
});

app.get('/add', (req, res)=> {
    res.send('Response from add');
});

//delete
app.get('/delete', (req, res) => {
    res.send('response delete'); 
});

app.get('/update', (req, res) => {
    res.send('response update'); 
});
// start server
app.listen(port, () => { console.log('server started'); });