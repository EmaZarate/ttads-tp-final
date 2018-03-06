var session = require('express-session');
var router = require('express').Router();

router.use('/api/users', require('./user'));
router.use('/api/rooms', require('./room'));
router.use('/api/guests', require('./guest'));
router.use('/api/login', require('./login'));
router.use('/api/menus', require('./menu'));
router.use('/api/signs', require('./sign'));
router.use('/api/reservation', require('./reservation'));
router.use('/api/checkLogs', require('./checkLog'));
router.use('/api/checkLoguedIns', require('./checkLoguedIn'));
router.use('/api/destroys', require('./destroy'));

module.exports=router;
