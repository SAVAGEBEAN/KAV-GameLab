const express = require('express');
const router = express.Router();
const Games = require('../models/game');

router.get('/', async(req,res)=>{
   try{
    Games.find({} , (err,games)=>{
        if(err) console.warn(err)
        res.json(games)
    } )
    
   }catch(err){
       res.send('Err '+ err)
   }
     // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

})

module.exports = router