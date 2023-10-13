const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/price/:user_id/:nombre_producto', UserController.getSpecialPrice);

module.exports = router;
