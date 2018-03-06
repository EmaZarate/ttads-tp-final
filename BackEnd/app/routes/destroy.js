var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var session = require('express-session');


router.get('/', (req,res) => {
           session.admin = null;
           session.logued = false;
           session.user.email = null;
           session.user = null;
           return res.json(session);
});


module.exports=router;
