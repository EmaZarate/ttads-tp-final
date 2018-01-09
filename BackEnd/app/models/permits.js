var mongoose = require('mongoose');

var permitsSchema = mongoose.Schema({
 type:{type:String, required:true},
 description:{type:String}
},{timestamps:true});

mongoose.model('permits',permitsSchema);