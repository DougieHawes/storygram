const { authRoute } = require("../controllers/auth");

const router = require("express").Router();

const { auth } = require("../controllers/auth");

router.get("/", auth);

module.exports = router;
