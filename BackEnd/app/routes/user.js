var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var userModel = mongoose.model('user');
var permitsModel = mongoose.model('permits');

router.get('/:_id', (req,res) => {
    userModel.find({_id:req.params._id})
   .populate('permits')
   .then(user=>{
      if(user[0].permits.type==="administrador"){
        userModel.find({})
        .then(users=>{
          return res.json(users)
        })
       }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
    })
});


router.get('/:_id_admin/:_id', (req,res) =>{
  userModel.find({_id:req.params._id_admin}) 
   .populate('permits')
   .then(user=>{
      if(!user){return res.sendStatus(404) }
      else if(user[0].permits.type==="administrador"){
        userModel.find({_id:req.params._id})
        .populate('permits')
        .then(users=>{
          if(!users) { return res.json('usuario no encontrado') }
          else{ return res.json(users) }
        })
       }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
    })
});

router.get('/:_id_admin/:name/:surname', (req,res) =>{
  userModel.find({_id:req.params._id_admin})
  .populate('permits')
  .then(user=>{
     if(!user){return res.sendStatus(404) }
     else if(user[0].permits.type==="administrador"){
       userModel.find({name:req.params.name,surname:req.params.surname})
       .then(users=>{
         if(!users) { return res.json('usuario no encontrado') }
         else{ return res.json(users) }
       })
      }
    else{
      return res.json({permiso:'no tiene permiso'})
     }
   })
});


router.post('/:_id',(req,res)=>{
  userModel.find({_id:req.params._id})
  .populate('permits')
  .then(user=>{
     if(user[0].permits.type==="administrador"){
       permitsModel.find({type:req.body.permission})
       .then(permits=>{
         let instUser = new userModel();
         instUser.name = req.body.name;
         instUser.surname = req.body.surname;
         instUser.phone = req.body.phone;
         instUser.email = req.body.email;
         instUser.address = req.body.address;
         instUser.password = req.body.password;
         instUser.permits = permits[0]._id;
         instUser.save()
         .then(user => {
           if(!user) { return res.sendStatus(404) }
           else { return res.status(200).send(user);}
          })
       })
      }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
  })
});

router.put('/:_id',(req,res)=>{
  userModel.find({_id:req.params._id})
  .populate('permits')
  .then(user=>{
     if(user[0].permits.type==="administrador"){
       permitsModel.find({type:req.body.permission})
       .then(permission=>{
        let id = req.body._id;
        let name = req.body.name;
        let surname = req.body.surname;
        let phone = req.body.phone;
        let email = req.body.email;
        let address = req.body.address;
        let password = req.body.password;
        let permits = permission[0]._id
        userModel.findOneAndUpdate({ "_id":id },{ "$set": { "name":name, "surname":surname,"phone":phone,"email":email,"address":address,"password":password,"permits":permits }})
         .then(user => {
           if(!user) { return res.sendStatus(404) }
           else { return res.status(200).send(user); }
          })
        })
      }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
   })
});

router.delete('/:_id_admin/:_id',(req,res)=>{

  userModel.find({_id:req.params._id_admin})
   .populate('permits')
   .then(user=>{
      if(user[0].permits.type==="administrador"){
        let id = req.params._id;
        userModel.findByIdAndRemove(id)
        .then( user => {
          if(!user){ return res.sendStatus(404);}
          return res.status(200).send(user);
         })
      }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
    })


});


module.exports=router;
