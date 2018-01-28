var mongoose = require('mongoose');

var singSchema = mongoose.Schema({
 date:{type:Date, required:true},
 amount:{type:Number,required:true}
},{timestamps:true});

mongoose.model('sign',singSchema);
