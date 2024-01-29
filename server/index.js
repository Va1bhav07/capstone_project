const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const { MONGODB_URI, PORT } = process.env;

// Middleware
app.use(express.json());

// Connect Mongo DB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(` Listing PORT:>>${PORT}`));
  })
  .catch((err) => console.log(`connection error :>> ${err} `));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
