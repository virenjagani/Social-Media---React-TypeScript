const express = require("express");
const router = express.Router();
const Auth = require("../api/auth.js");

router.post("/register", Auth.register);
router.post("/login", Auth.login);

module.exports = router;
