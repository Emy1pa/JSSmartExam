const express = require("express");
const router = express.Router();

const registerController = require('../controllers/authController/register');
const homeController = require('../controllers/homeController');
const indexController = require("../controllers/indexController");
const loginController = require('../controllers/authController/login');

router.get('/', homeController.home);
router.get('/statique', indexController.statique);

router.get('/register', registerController.getRegisterPage);
router.post('/register', registerController.register);
router.get("/login", loginController.login);
router.post('/login', loginController.login);

module.exports = router;
