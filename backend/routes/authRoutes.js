const express = require("express");
const router = express.Router();

//auth Routes
router.get("/", (req, res) => {
  res.send("Hello from node js");
});

module.exports = router;
