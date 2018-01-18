var router = require('express').Router();

router.use('/api/users', require('./user'));
router.use('/api/rooms', require('./room'));
router.use('/api/guests', require('./guest'));
router.use('/api/login', require('./login'));


module.exports=router;
