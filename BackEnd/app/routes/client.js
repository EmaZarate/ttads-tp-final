var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var client = mongoose.model('client');

router.get('/', (req,res) => {
  client.find({})
  .then( clients => {
    if(!clients) {return res.sendStatus(404) ; }
    return res.json(clients)
  })
});

router.get('/:name', (req,res) =>{
    let name=req.params.name;
    client.find({ name:name})
    .then( client =>{
      if(!client){return res.sendStatus(404);}
      return res.json(client)
    });
});

router.get('/:name/:surname', (req,res) =>{
    let name=req.params.name;
    let surname = req.params.surname;
    client.find({ name:name, surname:surname})
    .then( client =>{
      if(!client){return res.sendStatus(404);}
      return res.json(client)
    });
});


router.post('/',(req,res)=>{
  let instClient = new client(req.body);
  instClient.save()
  .then(client => {
    if(!client){return res.sendStatus(404);}
    return res.sendStatus(200)
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
  client.findOneAndUpdate({ "_id":id },{ "$set": { "name":name, "surname":surname,"phone":phone,"email":email,"address":address,"password":password }})
  .then(client=>{
    if(!client){return res.sendStatus(400);}
    return res.json(client);
  })
});

router.delete('/:_id',(req,res)=>{
 let id = req.params._id;
 client.findByIdAndRemove(id)
 .then( client => {
   if(!client){ return res.sendStatus(404);}
   return res.json(client.name)
 })
});


module.exports=router;
