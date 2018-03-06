var mongoose = require('mongoose');
var session = require('express-session');
const router = require('express').Router();
const bodyParser = require('body-parser');
var room = mongoose.model('room');
var userModel = mongoose.model('user')



router.get('/', (req,res) => {
  room.find({})
  .then( rooms => {
    if(!rooms) {return res.sendStatus(404) ; }
    else{
      return res.json(rooms);
    }
  })
});

router.get('/:_id', (req,res) =>{
    let id=req.params._id;
    room.find({ _id:id})
    .then( room =>{
      if(!room){return res.sendStatus(404);}
      return res.json(room)
    });
});


router.post('/',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let instRoom = new room(req.body);
        instRoom.save()
       .then(room => {
        if(!room){return res.sendStatus(404);}
        return res.json(room)
       });
}});

router.put('/:_id',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let _id = req.params._id;
        let name = req.body.name;
        let address = req.body.address;
        let capacity = req.body.capacity;
        let description = req.body.description;
        let images = req.body.images;
        let latitude =req.body.latitude;
        let longitude = req.body.longitude;
        let airConditioner = req.body.airConditioner;
        room.findOneAndUpdate( {"_id":_id} , 
        { "$set": {"name":name,"address":address,"capacity":capacity,"description":description,"images":images,"longitude":longitude,"latitude":latitude,"airConditioner":airConditioner }})
        .then(room => {
        if(!room){return res.sendStatus(401);}
        return res.json(room);
       })
}});

router.delete('/:_id',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let id = req.params._id;
        room.findByIdAndRemove(id)
        .then( room => {
         if(!room){ return res.sendStatus(404);}
          return res.json(room.name)
        })
}});


module.exports=router;
