var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var userModel = mongoose.model('user');
var permitsModel = mongoose.model('permits');
var reservationModel = mongoose.model('reservation');
var session = require('express-session');


router.get('/', (req,res) => {
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        userModel.find({})
        .then(users=>{
          return res.json(users)
    })
}});


router.get('/:_id', (req,res) =>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        userModel.find({_id:req.params._id})
        .populate('permits')
        .then(users=>{
          if(!users) { return res.json('usuario no encontrado') }
          else{ return res.json(users) }
        })
}});

router.get('/:name/:surname', (req,res) =>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
       userModel.find({name:req.params.name,surname:req.params.surname})
       .then(users=>{
         if(!users) { return res.json('usuario no encontrado') }
         else{ return res.json(users) }
       })
}});


router.post('/',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
       permitsModel.findOne({type:req.body.permission})
       .then(permits=>{
         let instUser = new userModel();
         instUser.name = req.body.name;
         instUser.surname = req.body.surname;
         instUser.phone = req.body.phone;
         instUser.email = req.body.email;
         instUser.address = req.body.address;
         instUser.password = req.body.password;
         instUser.permits = permits._id;
         instUser.save()
         .then(user => {
           if(!user) { return res.sendStatus(404) }
           else { return res.status(200).send(user);}
          })
       })
}});

router.put('/:_id',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
       permitsModel.findOne({type:req.body.permission})
       .then(permission=>{
        let id = req.params._id;
        let name = req.body.name;
        let surname = req.body.surname;
        let phone = req.body.phone;
        let email = req.body.email;
        let address = req.body.address;
        let password = req.body.password;
        let permits = permission._id
        userModel.findOneAndUpdate({ "_id":id },{ "$set": { "name":name, "surname":surname,"phone":phone,"email":email,"address":address,"password":password,"permits":permits }})
         .then(user => {
           if(!user) { return res.sendStatus(404) }
           else { return res.status(200).send(user); }
          })
        })
}});

router.delete('/:_id',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let id = req.params._id;
        userModel.findByIdAndRemove(id)
        .then( user => {
          if(!user){ return res.sendStatus(404);}
          return res.status(200).send(user);
         })
}});


module.exports=router;
