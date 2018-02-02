var session = require('express-session');
var router = require('express').Router();

router.use('/api/users', require('./user'));
router.use('/api/rooms', require('./room'));
router.use('/api/guests', require('./guest'));
router.use('/api/login', require('./login'));
router.use('/api/menus', require('./menu'));
router.use('/api/signs', require('./sign'));
router.use('/api/reservation', require('./reservation'));

module.exports=router;
