const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/connexion', authController.connexion);
router.post('/initialiser', authController.initialiserAdmin);

module.exports = router;
