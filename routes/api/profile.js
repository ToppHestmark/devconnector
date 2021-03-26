const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @dec     Test profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profiles api route." }));

module.exports = router;
