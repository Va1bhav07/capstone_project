const router = require("express").Router();
const authController = require("./controllers/authController");
const instrctutorController = require("./controllers/instructorControllers");
const courseController = require("./controllers/courseController");

router.get("/", (_, res) => {
  return res.json("Api is working!...");
});

// ============== Auth Api ===============
router.post("/login", authController.LoginUser);
router.post("/signup", authController.SignUpUser);
router.get("/api/getUsers", authController.GetUsers);
router.delete("/api/deleteUser", authController.DeleteUser);

// ============== Instructor Api ===============
router.get("/api/getInstructors", instrctutorController.GetInstructors);
router.post("/api/instructorData", instrctutorController.InstructorDetails);

// ============== Course Api ===============
router.get("/api/getCourses", courseController.getCourses);
router.post("/api/createCourse", courseController.createCourse);

module.exports = router;
