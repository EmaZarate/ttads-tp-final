var mongoose = require ('mongoose');
extend = require('mongoose-schema-extend');
var personSchema = require('./person.js');

var userSchema=  personSchema.extend({
  email:{type:String},
  address:{type:String},
  password:{type:String},
  permits:{type:mongoose.Schema.Types.ObjectId, ref:'permits'}
});

mongoose.model('user',userSchema);
