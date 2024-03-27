const router = require("express").Router();
const authController = require("./controllers/authController");

router.get("/", (_, res) => {
  return res.json("Api is working!...");
});

router.post("/login", authController.LoginUser);
router.post("/signup", authController.SignUpUser);
router.post("/admin-login", authController.AdminLogin);

module.exports = router;
