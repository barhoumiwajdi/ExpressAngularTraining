const express = require('express');
const { login } = require('../Controllers/UserControllers');



const router = express.Router()

router.post('/login', login)

module.exports = router