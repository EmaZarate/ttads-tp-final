var router = require('express').Router();

router.use('/api/clients', require('./client'));
router.use('/api/rooms', require('./room'));

module.exports=router;
