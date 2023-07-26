const router = require('express').Router();

const userController = require('./controllers/usercontrollers');

router.use('./users', userController);

module.exports = router;