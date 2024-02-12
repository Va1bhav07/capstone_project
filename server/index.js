const express = require("express");
require("dotenv").config(); // Load environment variables from .env file
const connectDB = require("./db");
const app = express();
const route = require("./routes");

//body parser
app.use(express.json());

//routes
app.use("/", route);

//connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
