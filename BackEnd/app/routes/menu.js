var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var menu = mongoose.model('menu');
var userModel = mongoose.model('user')
var session = require('express-session');


router.get('/', (req,res) => {
  if(!session.email){
    return res.status(401).send();
  }
  else{
  menu.find({})
  .then( menus => {
    if(!menus) {return res.sendStatus(404) ; }
    return res.json(menus)
  })
}});

router.get('/:_id', (req,res) =>{
  if(!session.email){
    return res.status(401).send();
  }
  else{
    let id=req.params._id;
    menu.find({ _id:id})
    .then( menu =>{
      if(!menu){return res.sendStatus(404);}
      return res.json(menu)
    });
}});


router.post('/:_id',(req,res)=>{
  if(!session.email){
    return res.status(401).send();
  }
  else{
  userModel.findOne({_id:req.params._id})
   .populate('permits')
   .then(user=>{
      if(user.permits.type==="administrador"){
        let instMenu = new menu();
        instMenu.price = req.body.price;
        instMenu.name = req.body.name;
        instMenu.drink = req.body.drink;
        instMenu.starter = req.body.starter
        instMenu.mainCourse = req.body.mainCourse;
        instMenu.dessert = req.body.dessert;
        console.log(instMenu);
        instMenu.save()
       .then(menu => {
        if(!menu){return res.sendStatus(404);}
        return res.json(menu)
       });
      }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
    })
}});

router.put('/:_id_admin/:_id',(req,res)=>{
  if(!session.email){
    return res.status(401).send();
  }
  else{
  userModel.findOne({_id:req.params._id_admin})
   .populate('permits')
   .then(user=>{
      if(user.permits.type==="administrador"){
        let id = req.params._id;
        let price = req.body.price;
        let name = req.body.name;
        let drink = req.body.drink;
        let starter = req.body.starter;
        let mainCourse = req.body.mainCourse;
        let dessert = req.body.dessert;
        menu.findOneAndUpdate( {"_id":id} , { "$set": {"price":price,"name":name,"drink":drink,"starter":starter,"mainCourse":mainCourse,"dessert":dessert }})
        .then(menu => {
        if(!menu){return res.sendStatus(401);}
        return res.json(menu);
       })
      }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
  })
}});

router.delete('/:_id_admin/:_id',(req,res)=>{
  if(!session.email){
    return res.status(401).send();
  }
  else{
  userModel.findOne({_id:req.params._id_admin})
   .populate('permits')
   .then(user=>{
      if(user.permits.type==="administrador"){
        let id = req.params._id;
        menu.findByIdAndRemove(id)
        .then( menu => {
         if(!menu){ return res.sendStatus(404);}
          return res.json(menu.name)
        })
      }
     else{
       return res.json({permiso:'no tiene permiso'})
      }
  })
}});


module.exports=router;
