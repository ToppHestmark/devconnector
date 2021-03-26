const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @dec     Test users route
// @access  Private
router.get("/test", (req, res) => res.json({ msg: "Users api route." }));

module.exports = router;
