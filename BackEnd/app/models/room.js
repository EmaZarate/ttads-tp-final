var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
 name:{type:String, required:true},
 address:{type:String,required:true},
 capacity:{type:Number},
 description:{type:String}
},{timestamps:true});

mongoose.model('room',roomSchema);