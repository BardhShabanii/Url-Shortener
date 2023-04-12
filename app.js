const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const urlRoutes = require("./routes/urlRoutes");
const dbURI =
  "mongodb+srv://bs48643:bardhi123@cluster0.y5cbtyf.mongodb.net/?retryWrites=true&w=majority";
require("dotenv").config();

// require("dotenv").config({ path: "../env" });

mongoose.connect(dbURI);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", urlRoutes);

app.listen(PORT, () => {
  console.log("server is listening on port: " + PORT);
});
