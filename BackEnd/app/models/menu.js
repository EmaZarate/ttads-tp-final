var mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
 price:{type:Number, required:true},
 name:{type:String, required:true},
 drink:{type:String},
 starter:{type:String},
 mainCourse:{type:String,required:true},
 dessert:{type:String}
},{timestamps:true});

mongoose.model('menu',menuSchema);