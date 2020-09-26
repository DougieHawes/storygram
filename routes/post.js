const router = require("express").Router();

const { post } = require("../controllers/post");

router.get("/", post);

module.exports = router;
