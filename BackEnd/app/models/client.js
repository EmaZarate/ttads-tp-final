var mongoose = require ('mongoose');
extend = require('mongoose-schema-extend');
var personSchema = require('./person.js');

var clientSchema=  personSchema.extend({
  email:{type:String},
  address:{type:String},
  password:{type:String}
});

mongoose.model('client',clientSchema);
