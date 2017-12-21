var mongoose = require ('mongoose');

var clientSchema= new mongoose.Schema({
  name:{type:String, required:true},
  surname:{type:String, required:true},
  phone:{type:Number},
  email:{type:String},
  address:{type:String},
  password:{type:String}
}, {timestamps:true});

mongoose.model('client',clientSchema);
