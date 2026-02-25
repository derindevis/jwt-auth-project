const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

router.get("/dashboard", verifyToken, (req, res) => {
    res.json("Welcome to Protected Dashboard");
});

module.exports = router;