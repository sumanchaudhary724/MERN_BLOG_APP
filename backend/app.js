const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

// Database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connection"))
  .catch((err) => console.log(err));

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
