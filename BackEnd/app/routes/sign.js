var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var sign = mongoose.model('sign');
var userModel = mongoose.model('user');
var Reserva = mongoose.model('reservation');
var session = require('express-session');




router.get('/', (req,res) => {
  if(!session.admin){
    return res.status(401).send();
  }
  else{
  sign.find({})
  .then( signs => {
    if(!signs) {return res.sendStatus(404) ; }
    return res.json(signs)
  })
}});


router.get('/:_id', (req, res) => {
  if(!session.admin){
    return res.status(401).send();
  }
  else{
  let _id = req.params._id;
  sign.findById(_id)
    .then(signs => {
      if(!signs){ return res.sendStatus(401); }
      return res.json({'signs': sings})
  })

}});

router.post('/:_id/:_id_reservation',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let instSign = new sign(req.body);
        let id = req.params._id_reservation
        instSign.save()
       .then(Reserva.findOne({"_id": id})
       .then(reserva => {
        if(!reserva){return res.sendStatus(404);}
        else{
          reserva.sign.push(instSign);
          reserva.save();
          return res.json({'sign': instSign})
        }
      }));
}});

router.put('/:_id_admin/:_id',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let id = req.params._id;
        let date = req.body.date;
        let amount = req.body.amount;
        sign.findOneAndUpdate( {"_id":id} , { "$set": {"date":date,"amount":amount }})
        .then(sign => {
        if(!sign){return res.sendStatus(401);}
        return res.json(sign);
       })
}});

router.delete('/:_id_admin/:_id',(req,res)=>{
  if(!session.admin){
    return res.status(401).send();
  }
  else{
        let _id = req.params._id;
        sign.findByIdAndRemove(_id)
        .then(Reserva.findOne({"sign" : _id}).then(reserva => {
         if(!reserva){ return res.sendStatus(404);}
        else{
          reserva.sign.pull(_id);
          reserva.save();
          return res.json({'reservas': reserva})
        }
      }))
}});

module.exports=router;
