var router = require('express').Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var guest = mongoose.model('guest');
var reservationModel = mongoose.model('reservation');
var session = require('express-session');


router.get('/:_id_reservation',(req,res)=>{
    let id = req.params._id_reservation;
    reservationModel.findOne({_id:id})
    .populate('guest')
    .then(reservation=>{
      return res.status(202).send(reservation.guest)
    })
});

router.post('/:_id_reservation',(req,res)=>{
    let instGuest = new guest(req.body);
    instGuest.save()
    .then(guest=>{
        if(!guest){return res.sendStatus(400)}
        else{

          return res.sendStatus(200)
        }
        
    })
});

router.put('/:_id',(req,res)=>{
  if(!req.session.user){
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

router.delete('/:_id',(req,res)=>{
    guest.findByIdAndRemove(req.params._id)
    .then(guest=>{
        if(!guest){return res.sendStatus(400)}
        return res.sendStatus(200)
    })
});

module.exports = router;
