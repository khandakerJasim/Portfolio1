const express = require("express");
const Usercontroler = require("./../controller/Usercontroller");
const Emailcontroller = require("./../controller/Emailcontroler");
const router = express.Router();

//create userroute

router.post("/api/post", Usercontroler.register);
router.get("/api/get", Usercontroler.getdata);

//id
router.get("/api/get/:id", Usercontroler.getdatabyid);

router.delete("/api/delete/:id", Usercontroler.deleteuser);

router.put("/api/update/:id", Usercontroler.updateuser);

///emailrouter

router.post("/api/post1", Emailcontroller.postdata);

router.get("/api/email", Emailcontroller.getemail);

router.post("/api/post1/email", Emailcontroller.sendmail);

module.exports = router;
