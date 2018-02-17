var mongoose = require('mongoose');
const router = require('express').Router();
const bodyParser = require('body-parser');
var session = require('express-session');


router.get('/', (req,res) => {
          console.log("VALOR DE ADMIN EN CHECKLOG.JS");
          console.log(session.admin);
           return res.json(session.admin);
});


module.exports=router;
