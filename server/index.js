const express = require("express");
require("dotenv").config(); // Load environment variables from .env file
const connectDB = require("./db");
const route = require("./routes");
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json()); //body parser
app.use(cors()); // allow cors
// Express middleware to enable CORS
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

//routes
app.use("/", route);

//connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
