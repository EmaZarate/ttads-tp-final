var mongoose = require('mongoose');

var reservationSchema = mongoose.Schema({
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
   sing: [{type:mongoose.Schema.Types.ObjectId, ref:'sing'}],
   guest: [{type:mongoose.Schema.Types.ObjectId, ref:'guest'}],
},{timestamps:true});

mongoose.model('reservation',reservationSchema);
