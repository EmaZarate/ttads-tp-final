var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var room = mongoose.model('room');

router.get('/', (req,res) => {
  room.find({})
  .then( rooms => {
    if(!rooms) {return res.sendStatus(404) ; }
    return res.json(rooms)
  })
});

router.get('/:name', (req,res) =>{
    let name=req.params.name;
    room.find({ name:name})
    .then( room =>{
      if(!room){return res.sendStatus(404);}
      return res.json(room)
    });
});


router.post('/',(req,res)=>{
  let instRoom = new room(req.body);
  instRoom.save()
  .then(room => {
    if(!room){return res.sendStatus(404);}
    return res.json(room)
  });
});

router.put('/:_id',(req,res)=>{
  let id = req.params._id;
  let name = req.body.name;
  let address = req.body.address;
  let capacity = req.body.capacity;
  let description = req.body.description;
  room.findOneAndUpdate( {"_id":id} , { "$set": {"name":name,"address":address,"capacity":capacity,"description":description }})
  .then(room => {
    if(!room){return res.sendStatus(401);}
    return res.json(room);
  })
});

router.delete('/:_id',(req,res)=>{
 let id = req.params._id;
 room.findByIdAndRemove(id)
 .then( room => {
   if(!room){ return res.sendStatus(404);}
   return res.json(room.name)
 })
});


module.exports=router;
