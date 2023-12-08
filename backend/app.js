const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//import routes
const authRoutes = require("./routes/authRoutes");

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cookieParser);
app.use(cors());

//Routes middleware
// app.get("/", (req, res) => {
//   res.send("Hello from node js");
// });
app.use("/", authRoutes);

//Error middleware
app.use(errorHandler);

// Database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1); // Exit the process in case of a database connection failure
  });
// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
