const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/Users')

router.post("", usersController.postCreateUser);
//router.post("", usersController.postLogin);

module.exports = router;