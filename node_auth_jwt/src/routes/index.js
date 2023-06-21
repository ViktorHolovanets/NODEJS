const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwt_key = "1a2b3c4d";
const {register, login, resetPassword} = require('../components/index.js')

router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.post('/api/auth/reset', resetPassword);

module.exports = router;