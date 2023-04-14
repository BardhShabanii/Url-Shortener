const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const urlRoutes = require("./routes/urlRoutes");

require("dotenv").config();

mongoose.connect(process.env.dbURI);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", urlRoutes);

app.listen(PORT, () => {
  console.log("server is listening on port: " + PORT);
});
