const mongoose = require('mongoose');

const url = "mongodb+srv://adarsh7295:1234@cluster0.x3kbjni.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"

//Asynchronus function
mongoose.connect(url)
.then((result)=> {
  console.log('connected to db');
})
.catch((err)=> {
  console.log(err);
});

module.exports = mongoose;