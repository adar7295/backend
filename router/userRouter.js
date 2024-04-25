const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

router.post('/add',(req,res)=>{
    console.log(req.body);
  res.send('Response from user add');
});
  
//getall
router.get('/getall',(req,res)=>{
  res.send('Response from user getall');
});

//getbyid
router.get('/getbyid',(req,res)=>{
  res.send('Response from user getbyid');
});

//delete
router.get('/delete',(req,res)=>{
  res.send('Response from user delete');
});

//update 
router.get('/update',(req,res)=>{
  res.send('Response from user update');
});

module.exports = router;