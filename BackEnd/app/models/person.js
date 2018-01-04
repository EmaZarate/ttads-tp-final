var mongoose = require ('mongoose');

var personSchema = mongoose.Schema({
    name:{ type:String, required:true },
    surname:{ type:String, required:true },
    phone: { type:Number },
},{timestamps:true});

mongoose.model('person',personSchema);

module.exports = personSchema;