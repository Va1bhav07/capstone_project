import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import CourseDetails from "./pages/courses/course-details";
import InstructorDetails from "./pages/instructor/instructor-details";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/instructor-details" element={<InstructorDetails />} />
    </Routes>
  );
}

export default App;
