const router = require("express").Router();
const Character = require("./Character");
const User = require("./User");

router.use("/Character", Character);
router.use("/User", User);

module.exports = router;
