const router = require("express").Router();

const { user } = require("../controllers/user");

router.get("/", user);

module.exports = router;
