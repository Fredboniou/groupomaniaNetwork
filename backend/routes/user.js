const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");
require("../MySql")

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.delete("/:id", auth, userCtrl.deleteUser);
router.get("/test", userCtrl.test);
//console.log(userCtrl)
module.exports = router;