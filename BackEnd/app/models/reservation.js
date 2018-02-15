var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var menuModel = mongoose.model('menu');

var reservationSchema = new mongoose.Schema({
   date: {type:Date},
   type: {type:String},//with menu or without menu
   startTime: {type:Date},
   endTime: {type:Date},
   cantAdultPeople: {type:Number},
   cantChildren: {type:Number},
   cantBaby: {type:Number},
   extraHourPrice: {type:Number},
   state: {type:String},
   amount: {type:Number},
   description:{type:String},
   client:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
   room:{type:mongoose.Schema.Types.ObjectId, ref:'room'},
   menu:{type:mongoose.Schema.Types.ObjectId, ref:'menu'},
   sign: [{type:mongoose.Schema.Types.ObjectId, ref:'sign'}],
   guest: [{type:mongoose.Schema.Types.ObjectId, ref:'guest'}],
},{timestamps:true});

reservationSchema.methods.findAndSetData= function(){
  let obj=this.toObject();
  if(obj.type==="Con Servicio"){
    menuModel.findOne({"_id":obj.menu})
    .then(menu=>{
      amount= (menu.price*obj.cantAdultPeople)+((menu.price*obj.cantChildren)/2)
      obj.amount=amount
    })
  }
  else{
  }
  return obj;
}
mongoose.model('reservation',reservationSchema);

