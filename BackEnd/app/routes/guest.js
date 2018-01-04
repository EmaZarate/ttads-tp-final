var router = require('express').Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var guest = mongoose.model('guest');

router.get('/',(req,res)=>{
   let guests = guest.find({})
   .then( guests=>{
        if(!guests){return res.sendStatus(404)}
        return res.json(guests)
   })
});

router.post('/',(req,res)=>{
    let instGuest = new guest(req.body);
    instGuest.save()
    .then(guest=>{
        if(!guest){return res.sendStatus(400)}
        return res.sendStatus(200)
    })
});

router.put('/:_id',(req,res)=>{
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
});

router.delete('/:_id',(req,res)=>{
    guest.findByIdAndRemove(req.params._id)
    .then(guest=>{
        if(!guest){return res.sendStatus(400)}
        return res.sendStatus(200)
    })
});

module.exports = router;