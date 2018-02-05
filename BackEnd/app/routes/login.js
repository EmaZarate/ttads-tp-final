  var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var session = require('express-session');
var userModel = mongoose.model('user');

router.get('/:email/:password', (req,res) => {
    userModel.findOne({email:req.params.email,password:req.params.password})
    .populate('permits')
    .then(user=>{
        if(!user){ return res.sendStatus(404)}
        else{
            session.email = user.email;
    /*      if(user[0].permits.type==="administrador"){
            req.session.admin = true;
          }
          else {
            req.session.admin = false;
          } */
          return res.json(user)
        }
    })
});

module.exports=router;
