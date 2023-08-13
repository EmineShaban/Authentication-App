const router = require('express').Router();

const userController = require('./controllers/usersControllers');

router.use('./users', userController);

module.exports = router;