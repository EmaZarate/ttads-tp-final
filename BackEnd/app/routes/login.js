var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var session = require('express-session');
var userModel = mongoose.model('user');

router.get('/:email/:password', (req,res) => {
  userModel.findOne({email:req.params.email,password:req.params.password})
  .populate('permits')
  .then(user=>{
      if(!user){
        session.logued = false;
        return res.json(user)
      }
      else{
        session.user = user;
        session.user.email = user.email;
        if(user.permits.type==="administrador"){
          session.admin = true;
          session.logued = true;
        }
        else {
          session.admin = false;
          session.logued = true;
        }
        return res.json(user)
      }
  })
});

router.get('/', (req,res) => {
        return res.json(session.user.email)
})

module.exports=router;
