var router = require('express').Router();

router.use('/api/clients', require('./client'));
router.use('/api/room', require('./room'));
router.use('/api/guests', require('./guest'));

module.exports=router;
