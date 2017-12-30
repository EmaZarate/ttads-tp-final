var mongoose = require ('mongoose');

var clientSchema=  mongoose.Schema({
  name:{type:String, required:true},
  surname:{type:String, required:true},
  phone:{type:Number},
  email:{type:String},
  address:{type:String},
  password:{type:String}
});

mongoose.model('client',clientSchema);
