var mongoose = require('mongoose');
var personSchema = require('./person');
extend = require('mongoose-schema-extend');

var guestSchema = personSchema.extend({
  payCard:{type:Boolean}
})

mongoose.model('guest',guestSchema);