var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var reservationModel = mongoose.model('reservation');
var userModel = mongoose.model('user');
var roomModel = mongoose.model('room');
var guestModel = mongoose.model('guest');
var signModel = mongoose.model('sign');
var menuModel = mongoose.model('menu');
var session = require('express-session');


router.get('/', (req,res) => {
  if(!session.admin){
    return res.status(401).send({permiso:'no tiene permiso'});
  }
  else{
        reservationModel.find()
        .sort({"date":1})
        .populate('client')
        .populate('room')
        .then(reservations=>{
          return res.json(reservations);
        })
}});

router.get('/:_id_reservation', (req,res) => {
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        reservationModel.findOne({_id:req.params._id_reservation })
        .populate('client')
        .populate('room')
        .populate('sign')
        .populate('guest')
        .populate('menu')
        .then(reservation=>{
          return res.json(reservation);
        })
}});

router.post('/',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
    let instReservation = new reservationModel(req.body);
    if(instReservation.type==="Con Servicio"){
      menuModel.findOne({_id:instReservation.menu})
      .then(menu=>{
       instReservation.setAmount(menu.price)
       instReservation.save()
      .then(reservation => {
       if(!reservation){return res.sendStatus(404);}
       else{
        return res.json(reservation)
       }
      });
      })
       }
       else{
        instReservation.save()
        .then(reservation => {
         if(!reservation){return res.sendStatus(404);}
         else{
          return res.json(reservation);
         }
        });
       }
}});

router.put('/:_id',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let _id = req.params._id;
        let date = req.body.date;
        let type = req.body.type;
        let startTime = req.body.startTime
        let endTime = req.body.endTime;
        let cantAdultPeople = req.body.cantAdultPeople;
        let cantChildren = req.body.cantChildren;
        let cantBaby = req.body.cantBaby;
        let extraHourPrice = req.body.extraHourPrice;
        let state = req.body.state;
        let amount = req.body.amount;
        let description = req.body.description;
        let client =req.body.client;
        let menu = req.body.menu;
        let room = req.body.room;
        if(type=="Con Servicio"){
          menuModel.findOne({_id:menu})
          .then(menu=>{
            amount= (menu.price*cantAdultPeople)+((menu.price*cantChildren)/2)
            reservationModel.findOneAndUpdate({ "_id":_id },{ "$set": { "date":date, "type":type,"startTime":startTime,"endTime":endTime,"cantAdultPeople":cantAdultPeople,"cantChildren":cantChildren,"cantBaby":cantBaby,"extraHourPrice":extraHourPrice,"state":state,"amount":amount,"description":description,"room":room,"menu":menu,"client":client }})
         .then(reservation => {
           if(!reservation) { return res.sendStatus(404) }
           else {
             return res.status(200).send(reservation);
            }
          })
          })
        }
        else{
          reservationModel.findOneAndUpdate({ "_id":_id },{ "$set": { "date":date, "type":type,"startTime":startTime,"endTime":endTime,"cantAdultPeople":cantAdultPeople,"cantChildren":cantChildren,"cantBaby":cantBaby,"extraHourPrice":extraHourPrice,"state":state,"amount":amount,"description":description,"room":room,"menu":menu,"client":client }})
         .then(reservation => {
           if(!reservation) { return res.sendStatus(404) }
           else {
             return res.status(200).send(reservation);
            }
          })
        }
}});

router.delete('/:_id_reservation',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let _id_reservation = req.params._id_reservation;
        reservationModel.findByIdAndRemove(_id_reservation)
        .then( reservation => {
          if(!reservation){ return res.sendStatus(404);}
          else{
            signModel.remove({"_id": {"$in" : reservation.sign}}).
            then(()=>{
              return res.status(200).send(reservation);
            })
          }
         })
}});


module.exports=router;
