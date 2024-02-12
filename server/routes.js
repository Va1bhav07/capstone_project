const router = require("express").Router();
const authController = require("./controllers/authController");

router.get("/", (req, res) => {
  return res.json("Api is working!...");
});

router.post("/api/signIn", authController.SignUpUser);

module.exports = router;
