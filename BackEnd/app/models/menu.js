var mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
 price:{type:Number, required:true},
 name:{type:String, required:true},
 drink:{type:String},
 starter:{type:String},
 mainCourse:{type:String},
 dessert:{type:String}
},{timestamps:true});

mongoose.model('menu',menuSchema);