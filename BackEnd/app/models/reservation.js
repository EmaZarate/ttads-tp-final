var mongoose = require('mongoose');

var reservationSchema = mongoose.Schema({
   date:{type:Date},
   type:{type:String},
   endTime:{type:Date},
   cantAdultPeople:{type:Number},
   cantChildren:{type:Number},
   
})