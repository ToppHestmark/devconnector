const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @dec     Test posts route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts api route." }));

module.exports = router;
