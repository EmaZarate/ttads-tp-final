var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var userModel = mongoose.model('user');


router.get('/:email/:password', (req,res) => {
    userModel.find({email:req.params.email,password:req.params.password}) 
    .then(user=>{
        if(!user){ return res.sendStatus(404)}
        else{ return res.json(user)}
    })
});

module.exports=router;