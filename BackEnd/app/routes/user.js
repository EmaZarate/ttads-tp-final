var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var userModel = mongoose.model('user');
var permitsModel = mongoose.model('permits');

router.get('/:_id', (req,res) => {
  userModel.find({_id:req.params._id}) 
  .populate('permits')
  .then(user=>{
    name = user.name
    console.log(name)
    return res.send(user.name)
  })
  
});

router.get('/:name', (req,res) =>{
    let name=req.params.name;
    userModel.find({ name:name})
    .then( client =>{
      if(!user){return res.sendStatus(404);}
      return res.json(user)
    });
});

router.get('/:name/:surname', (req,res) =>{
    let name=req.params.name;
    let surname = req.params.surname;
    user.find({ name:name, surname:surname})
    .then( user =>{
      if(!user){return res.sendStatus(404);}
      return res.json(user)
    });
});


router.post('/',(req,res)=>{
  let instUser = new userModel(req.body);
  instUser.save()
  .then(user => {
    if(!user){return res.sendStatus(404);}
    else{
        return res.json(user);
      }
  });
});

router.put('/:_id',(req,res)=>{
  let id = req.params._id;
  let name = req.body.name;
  let surname = req.body.surname;
  let phone = req.body.phone;
  let email = req.body.email;
  let address = req.body.address;
  let password = req.body.password;
  user.findOneAndUpdate({ "_id":id },{ "$set": { "name":name, "surname":surname,"phone":phone,"email":email,"address":address,"password":password }})
  .then(user=>{
    if(!user){return res.sendStatus(400);}
    return res.sendStatus(200)
  })
});

router.delete('/:_id',(req,res)=>{
 let id = req.params._id;
 user.findByIdAndRemove(id)
 .then( user => {
   if(!user){ return res.sendStatus(404);}
   return res.sendStatus(200)
 })
});


module.exports=router;
