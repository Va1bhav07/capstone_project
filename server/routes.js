const router = require("express").Router();
const authController = require("./controllers/authController");

router.get("/", (req, res) => {
  return res.json("Api is working!...");
});

router.post("/login", authController.SignUpUser);

module.exports = router;