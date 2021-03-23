const express = require("express");

const auth = require("../../../middleware/auth");

const router = express.Router();

router.use(auth)



module.exports = router ;