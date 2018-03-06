var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var session = require('express-session');


router.get('/', (req,res) => {
           return res.json(session.logued);
});


module.exports=router;
