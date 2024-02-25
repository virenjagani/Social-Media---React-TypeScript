const express = require("express");
const router = express.Router();
const Auth = require("../api/auth.js")

router.post('/register',Auth.register)

module.exports = router