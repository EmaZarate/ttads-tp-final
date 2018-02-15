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
          session.user = user
          if(user.permits.type==="administrador"){
          session.admin = true;
        }
        else {
          session.admin = false;
        }
        return res.json(user)
      }
  })
});

module.exports=router;
