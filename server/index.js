const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file
const connectDB = require("./db");
const route = require("./routes");
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json()); //body parser
app.use(cors()); // allow cors

//routes
app.use("/", route);

//connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
