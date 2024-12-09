const express = require("express");
const router = express.Router();
const usercontroler = require("./../controller/Usercontroller");

//router use

router.post("/api/post", usercontroler.register);

module.exports = router;
