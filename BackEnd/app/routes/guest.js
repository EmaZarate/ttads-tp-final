var router = require('express').Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var guest = mongoose.model('guest');
var reservationModel = mongoose.model('reservation');
var session = require('express-session');


router.get('/:_id_user',(req,res)=>{
    if(!session.admin){
        let _id_user=req.session.user._id;
        reservationModel.find({client:_id_user})
        .populate('guest')
        .populate('menu')
        .populate('room')
        .populate('client')
        .then(reservation=>{
          return res.status(200).send(reservation)
        })
      }
      else{
        return res.status(401).send();
}});

router.post('/:_id_reservation',(req,res)=>{
    if(!session.admin){
       let instGuest = new guest(req.body);
       instGuest.save()
       reservationModel.findOne({_id:req.params._id_reservation})
       .then(reservation=>{
           reservation.guest.push(instGuest)
           reservation.save()
           return res.sendStatus(200)
       })
      }
      else{
        return res.status(401).send();
}});

router.put('/:_id',(req,res)=>{
  if(session.admin){
    return res.status(401).send();
  }
  else{
    guest.findOneAndUpdate({'_id':req.params._id},{"$set":{
       "name":req.body.name,
       "surname": req.body.surname,
       "phone": req.body.phone,
       "payCard":req.body.payCard
    }})
    .then(guest=>{
        if(!guest){return res.sendStatus(400)}
        return res.sendStatus(200)
    })
}});

router.delete('/:_id/:_id_reservation',(req,res)=>{
    if(session.admin){
        return res.status(401).send();
      }
      else{
    guest.findByIdAndRemove(req.params._id)
    .then(guest=>{
        if(!guest){return res.sendStatus(400)}
        else{
         reservationModel.findOne({_id:req.params._id_reservation})
         .then(reservation=>{
            reservation.guest.pull(guest)
            reservation.save()
         })
         return res.sendStatus(200)
        }
        
    })
}});

module.exports = router;
