var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var reservationModel = mongoose.model('reservation');
var roomModel = mongoose.model('room');
var guestModel = mongoose.model('guest');
var signModel = mongoose.model('sign');
var menuModel = mongoose.model('menu');
var userModel = mongoose.model('user');
var session = require('express-session');



router.get('/:_id', (req,res) => {
  if(!session.admin){
    return res.status(401).send();
  }
  else{
    userModel.findOne({_id:req.params._id})
   .populate('room')
   .then(user=>{
      if(user.permits.type==="administrador"){
        reservationModel.find({})
        .then(reservations=>{
          return res.json(reservations)
        })
       }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
    })
}});

router.get('/:_id/:_id_reservation', (req,res) => {
  if(!session.admin){
    return res.status(401).send();
  }
  else{
    userModel.findOne({_id:req.params._id})
   .populate('client')
   .populate('room')
   .populate('sign')
   .populate('guest')
   .populate('menu')
   .then(user=>{
      if(user.permits.type==="administrador"){
        reservationModel.find({_id:req.params._id_reservation })
        .then(reservation=>{
          return res.json(reservation)
        })
       }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
    })
}});

router.post('/:_id',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
  userModel.findOne({_id:req.params._id})
  .then(user=>{
     if(user.permits.type==="administrador"){
       let instReservation = new reservation(req.body);
       instReservation.save()
      .then(reservation => {
       if(!reservation){return res.sendStatus(404);}
       return res.json(reservation)
      });
     }
    else{
      return res.json({permiso:'no tiene permiso'})
     }
   })
}});

router.put('/:_id/:_id_reservation',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
  userModel.findOne({_id:req.params._id})
  .then(user=>{
     if(user.permits.type==="administrador"){
        let _id_reservation = req.params._id_reservation;
        let fecha = req.body.fecha;
        let tipo = req.body.tipo;
        let hora_fin = req.body.hora_fin;
        let cant_adultos = req.body.cant_adultos;
        let cant_menores = req.body.cant_menores;
        let cant_bebes = req.body.cant_bebes;
        let precio_hora_extra = req.body.precio-hora_extra;
        let estado = req.body.estado;
        let monto = req.body.monto;
        reservationModel.findOneAndUpdate({ "_id":_id_reservation },{ "$set": { "fecha":fecha, "tipo":tipo,"hora_fin":hora_fin,"cant_adultos":cant_adultos,"cant_menores":cant_menores,"cant_bebes":cant_bebes,"precio_hora_extra":precio_hora_extra,"estado":estado,"monto":monto }})
         .then(reservation => {
           if(!reservation) { return res.sendStatus(404) }
           else { return res.status(200).send(reservation); }
          })
      }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
   })
}});

router.delete('/:_id/:_id_reservation',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
  userModel.findOne({_id:req.params._id})
   .then(user=>{
      if(user.permits.type==="administrador"){
        let _id_reservation = req.params._id_reservation;
        reservationModel.findByIdAndRemove(_id_reservation)
        .then( reservation => {
          if(!reservation){ return res.sendStatus(404);}
          return res.status(200).send(reservation);
         })
      }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
    })
}});


module.exports=router;
